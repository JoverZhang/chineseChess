from django.urls import path, re_path

from . import views

app_name = 'chessUrl'

urlpatterns = [
    path('', views.index, name='index'),
    path('game/', views.game, name='game'),
    path('game/hall/', views.hall, name='hall')
]
