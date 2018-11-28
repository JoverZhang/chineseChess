from django.db import models


# Create your models here.

class chess(models.Model):
    account = models.CharField(max_length=16)
    username = models.CharField(max_length=16)
    password = models.CharField(max_length=16)
    win = models.IntegerField(default=0)
    lose = models.IntegerField(default=0)
    balance = models.IntegerField(default=0)
    point = models.IntegerField(default=100)
    history = models.CharField(max_length=100)