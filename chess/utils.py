from django.views.generic.base import View
from .models import chess as chessData
import memcache
import operator

mc = memcache.Client(['127.0.0.1:11211'], debug=0)


class RealTime(View):
    def refreshTime(request, time):
        print('refresh')
        global mc
        chess_username_list = chessData.objects.values_list('username')
        online_list = []
        # reset people count
        online_count = 0
        for username in chess_username_list:
            if mc.get(username[0]):
                online_count += 1
                online_list.append(username[0])
        mc.set('online_list', online_list)
        mc.set('online_count', online_count)
        mc.set('refresh_time', 1, time)
        return

    def getAllUser(request):
        chess_info = chessData.objects.values_list('username', 'win', 'lose',
                                                   'balance', 'point')
        get_detail = []
        for item in chess_info:
            get_detail.append \
                ({'username': item[0],
                  'win': item[1],
                  'lose': item[2],
                  'balance': item[3],
                  'point': item[4]
                  })
        all_user_detail = sorted(get_detail, key=operator.itemgetter('point'),
                                 reverse=True)
        return all_user_detail

    def filterOnlineUser(request, all_user):
        online_user = mc.get('online_list')
        online_list = []
        # print('in filer: ', all_user)
        for item in all_user:
            if item['username'] in online_user:
                online_list.append(item)
        return online_list
