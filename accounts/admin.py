from django.contrib import admin
from .models import UserProfile, ContactMethod
# Register your models here.

class ContactMethodInline(admin.TabularInline):
    model = ContactMethod
    extra = 1


class UserProfileAdmin(admin.ModelAdmin):

    inlines = [ContactMethodInline]

admin.site.register(UserProfile, UserProfileAdmin)
