# Generated by Django 2.1.1 on 2018-11-28 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='chess',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account', models.CharField(max_length=16)),
                ('username', models.CharField(max_length=16)),
                ('password', models.CharField(max_length=16)),
                ('win', models.IntegerField(default=0)),
                ('lose', models.IntegerField(default=0)),
                ('balance', models.IntegerField(default=0)),
                ('point', models.IntegerField(default=100)),
                ('history', models.CharField(max_length=100)),
            ],
        ),
    ]