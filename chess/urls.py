from django.urls import path, re_path

from . import views

app_name = 'chessUrl'

urlpatterns = [
    path('', views.ChessView.index, name='index'),
    path('realTimeIndex/', views.ChessView.realTimeIndex, name='realTimeIndex'),
    path('game<int:table>/<str:player>/', views.ChessView.game, name='game'),
    path('game<int:table>/<str:player>/realTimeGame/<int:key>/<str:value>/', views.ChessView.realTimeGame,
         name='realTimeGame'),
    path('login/', views.ChessView.login, name='login'),
    path('logout', views.ChessView.logout, name='logout'),
]
