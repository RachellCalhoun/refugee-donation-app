from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Donate, Request, DonationMatch, RequestMatch, SubCategory, Category


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class DonateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donate
        fields = ('url', 'item', 'author', 'image', 'details', 'location', 'published_date', 'condition', 'category', 'subcategory')

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('url', 'item', 'author', 'location', 'published_date', 'category', 'subcategory')

class RequestMatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestMatch
        fields = ('url', 'request', 'interested', 'approve_contact')

class DonationMatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationMatch
        fields = ('url', 'donate', 'interested', 'approve_contact')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('url', 'order', 'title')

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ('url', 'order', 'title', 'link', 'category')