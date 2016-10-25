from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

class UserProfile(models.Model):
    username = models.ForeignKey('auth.User', default="")
    organization = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.username

class ContactMethod(models.Model):
    user = models.ForeignKey('accounts.UserProfile')
    email = models.EmailField(max_length=70)
    phone_num = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_num], max_length=15, blank=True) # validators should be a list
    PHONE = "Phone Call"
    EMAIL = "Email"
    POSTCATEGORY = (
        (PHONE, 'Phone Call'),
        (EMAIL, 'Send Email'),
        )
    contact_method = models.CharField(max_length=5, choices=POSTCATEGORY, default=EMAIL)

    def __str__(self):
        return self.contact_method
