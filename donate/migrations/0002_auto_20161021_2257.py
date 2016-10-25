# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-21 22:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='subcategory',
            old_name='menu',
            new_name='category',
        ),
        migrations.AddField(
            model_name='donate',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='donate.Category'),
        ),
    ]
