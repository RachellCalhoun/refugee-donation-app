# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-23 20:00
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20161023_2000'),
        ('donate', '0004_auto_20161021_2347'),
    ]

    operations = [
        migrations.AddField(
            model_name='donate',
            name='condition',
            field=models.CharField(choices=[('New', 'New'), ('Like New', 'Like New'), ('Very Good', 'Very Good'), ('Good', 'Good'), ('Acceptable', 'Acceptable')], default='New', max_length=15),
        ),
        migrations.AddField(
            model_name='donate',
            name='contact_method',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.UserProfile'),
        ),
        migrations.AddField(
            model_name='donate',
            name='location',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]