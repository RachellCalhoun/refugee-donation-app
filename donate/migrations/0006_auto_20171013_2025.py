# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2017-10-13 20:25
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0005_auto_20170823_0045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donationmatch',
            name='donate',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='donateobj', to='donate.Donate'),
        ),
    ]
