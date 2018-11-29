from django.urls import path, re_path

from . import views

app_name = 'chessUrl'

urlpatterns = [
    path('', views.ChessView.index, name='index'),
    path('realTimeIndex/', views.ChessView.realTimeIndex, name='realTimeIndex'),
    path('game/', views.ChessView.game, name='game'),
    path('game/realTimeGame/', views.ChessView.realTimeGame,
         name='realTimeGame'),
    path('login/', views.ChessView.login, name='login'),
    path('logout', views.ChessView.logout, name='logout'),
]
