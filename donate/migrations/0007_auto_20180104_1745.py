# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2018-01-04 17:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0006_auto_20171013_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='location',
            field=models.TextField(blank=True, max_length=20, null=True),
        ),
    ]
