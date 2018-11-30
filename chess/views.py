from django.views.generic.base import View
from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http import JsonResponse
from .models import chess as chessData
from .utils import RealTime as rt
import memcache

# Create your views here.
mc = memcache.Client(['127.0.0.1:11211'], debug=0)


class ChessView(View):

    def index(request):
        uname = request.session.get('username')
        if uname is not None:
            chess_set = chessData.objects.filter(username=uname)
            history = (chess_set[0].history).split(',')
            print(history)
            return render(request, 'index.html',
                          {'userInfo': chess_set, 'history': history})
        return render(request, 'index.html')

    def game(request, table, player):
        print(request.session.get('username'))
        chess = chessData.objects.get(account='456')
        if request.session.get('username') is not None:
            return render(request, 'game.html', {'chess': chess})
        else:
            return redirect('/')

    def realTimeIndex(request):
        global mc
        # keepLive
        chess = chessData.objects.get(account='456')
        mc.set(chess.username, 1, 4)

        # hold time end
        if not mc.get('refresh_time'):
            rt.refreshTime(request, time=10)

        # return data
        table_list = rt.getTableState(request, table=3)
        online_count = mc.get('online_count')
        all_user = rt.getAllUser(request)
        online_list = rt.filterOnlineUser(request, all_user)
        print('people:', online_count)
        return_data = {
            'online_count': online_count,
            'online_list': online_list,
            'rank_list': all_user,
            'table_list': table_list
        }
        return JsonResponse(return_data)

    def realTimeGame(request, table, player, key, value):

        if key is 0 and str(value) == 'wait':
            # return data
            online_count = mc.get('online_count')
            all_user = rt.getAllUser(request)
            online_list = rt.filterOnlineUser(request, all_user)
            print('people:', online_count)
            return_data = {
                'online_count': online_count,
                'online_list': online_list,
                'key': 0,
            }
            return JsonResponse(return_data)

        elif key is 0 and str(value) == 'start':
            me = str(table) + player
            mc.set(me, 1, 10)
            print(me)
            his = str(2) if int(me[-1]) - 1 == 0 else str(1)
            his = me[:-1] + his
            if mc.get(his):
                print('success')
                map = rt.getInitMap(request)
                mc.set('game' + str(table), map, 10)
                mc.set('game' + str(table) + 'count', 1, 10)

                # return data
                online_count = mc.get('online_count')
                all_user = rt.getAllUser(request)
                online_list = rt.filterOnlineUser(request, all_user)
                # print('people:', online_count)
                return_data = {
                    'online_count': online_count,
                    'online_list': online_list,
                    'key': 1,
                    'value': map,
                    'down': 2
                }
                return JsonResponse(return_data)
            else:
                # return data
                online_count = mc.get('online_count')
                all_user = rt.getAllUser(request)
                online_list = rt.filterOnlineUser(request, all_user)
                # print('people:', online_count)
                return_data = {
                    'online_count': online_count,
                    'online_list': online_list,
                    'key': 0,
                }
                return JsonResponse(return_data)
        else:
            print('>=1')
            count = mc.get('game' + str(table) + 'count')
            print('key: ', key)
            print('value:', value)
            value = value.split(',')
            value_list = []
            flag = 0
            for i in range(0, 10):
                lists = []
                for j in range(0, 9):
                    lists.append(int(value[flag]))
                    flag += 1
                value_list.append(lists)

            print('value_list:', value_list)

            if int(key) > int(count):
                print('key > count')
                mc.set('game' + str(table), value_list, 10)
                mc.set('game' + str(table) + 'count', 1, 10)
            map = mc.get('game' + str(table))
            print('map:', map)
            if count > 1:
                down = 1 if count % 2 == 0 else 2
            else:
                down = 2

            print('down:', down)
            # return data
            online_count = mc.get('online_count')
            all_user = rt.getAllUser(request)
            online_list = rt.filterOnlineUser(request, all_user)
            # print('people:', online_count)
            return_data = {
                'online_count': online_count,
                'online_list': online_list,
                'key': count,
                'value': map,
                'down': down,
            }
            return JsonResponse(return_data)

    def login(request):
        uname = request.POST.get('username')
        pwd = request.POST.get('password')
        print(request.session)
        chess_set = chessData.objects.filter(username=uname, password=pwd)
        if len(chess_set) == 1:
            session = request.session
            session['username'] = uname
            return redirect(reverse('chessUrl:index'))
        return redirect(reverse('chessUrl:index'))

    def logout(request):
        pass
