from django.shortcuts import render, HttpResponse
from .models import chess as chessData
from django.http import JsonResponse


# Create your views here.

av = ['1']

def index(request):
    global av
    av.append(2)
    print(av)
    return render(request, 'index.html')


def game(request):
    chess = chessData.objects.get(account='456')
    return render(request, 'game.html', {'chess': chess})


def hall(request):
    print(av)
    a = {'count': 2}
    return JsonResponse(a)
