from django.shortcuts import render, HttpResponse
from .models import chess as chessData
from django.http import JsonResponse
import memcache


# Create your views here.


def index(request):
    # mc = memcache.Client(['127.0.0.1:11211'], debug=0)
    # mc.set('a', '1')
    return render(request, 'index.html')


def game(request):
    chess = chessData.objects.get(account='456')
    return render(request, 'game.html', {'chess': chess})


def hall(request):
    chess = chessData.objects.get(account='456')
    mc = memcache.Client(['127.0.0.1:11211'], debug=0)

    mc.set(chess.username, 1, 4)  # keepLive
    userList = ['jason', 'jover', 'abc']
    inLine = []  # inLineCount

    if not mc.get('refreshTime'):
        print('refresh')
        peopleCount = 0
        for i in userList:
            if mc.get(i):
                peopleCount += 1
        mc.set('people', peopleCount)
        mc.set('refreshTime', 1, 3)

    for i in userList:
        if mc.get(i):
            inLine.append(i)

    people = mc.get('people')
    count = {'count': people, 'inline': inLine}
    print('people:', people)
    return JsonResponse(count)
