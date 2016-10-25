# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-25 19:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20161023_2150'),
        ('donate', '0006_auto_20161023_2150'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='contact_method',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.ContactMethod'),
        ),
        migrations.AddField(
            model_name='request',
            name='published_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]