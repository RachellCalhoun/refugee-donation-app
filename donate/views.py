from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from donate.serializers import UserSerializer, GroupSerializer, DonateSerializer, RequestSerializer, DonationMatchSerializer, RequestMatchSerializer, CategorySerializer, SubCategorySerializer
# 
from donate.models import Donate, Category, SubCategory, Request, DonationMatch, RequestMatch
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from tastypie.http import HttpUnauthorized, HttpForbidden
from django.conf.urls import url
from django.db import IntegrityError


# Create your views here.
def donate(request):
	return render(request, 'donate/index.html')

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

# Create your views here.
class DonateViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows donations to be viewed and edited.
    """
    queryset = Donate.objects.all()
    serializer_class = DonateSerializer

class RequestViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows donations to be viewed and edited.
    """
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows donations to be viewed and edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class DonationMatchViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows donations to be viewed and edited.
    """
    queryset = DonationMatch.objects.all()
    serializer_class = DonationMatchSerializer

class RequestMatchViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows donations to be viewed and edited.
    """
    queryset = RequestMatch.objects.all()
    serializer_class = RequestMatchSerializer