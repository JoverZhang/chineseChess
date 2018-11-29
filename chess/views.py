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

    def game(request):
        print(request.session.get('username'))
        chess = chessData.objects.get(account='456')
        if request.session.get('username') is not None:
            return render(request, 'game.html', {'chess': chess})
        else:
            return redirect('/')
        # return render(request, 'game.html', {'chess': chess})

    def realTimeIndex(request):
        global mc
        # keepLive
        chess = chessData.objects.get(account='456')
        mc.set(chess.username, 1, 4)

        # hold time end
        if not mc.get('refresh_time'):
            rt.refreshTime(request, time=10)

        # return data
        online_count = mc.get('online_count')
        all_user = rt.getAllUser(request)
        online_list = rt.filterOnlineUser(request, all_user)
        print('people:', online_count)
        return_data = {
            'online_count': online_count,
            'online_list': online_list,
            'rank_list': all_user
        }
        return JsonResponse(return_data)

    def realTimeGame(request):
        pass

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
