from django.db import models
from django.utils import timezone
from accounts.models import UserProfile

# give or recieve, category of thing, subcategory
# in post: email, message(? django-postman),
# users can contact me by text, phone, email
# phone number, contact name
# posting title, location, body, langauge(of posting/contact), condition of item, include "more ads by this user" link

# Create your models here.
class Donate(models.Model):
	author = models.ForeignKey('auth.User')
	item = models.CharField(max_length=20)
	details = models.TextField(blank=True, null=True)
	#geo-django? https://djangopackages.org/grids/g/maps/
	#https://pypi.python.org/pypi/django-google-maps/0.5.0
	#https://django-geoposition.readthedocs.io/en/latest/
	location = models.CharField(max_length=20, blank=True, null=True)
	created_date = models.DateTimeField(default=timezone.now)
	published_date = models.DateTimeField(blank=True, null=True)
	contact_method = models.ForeignKey('accounts.ContactMethod', blank=True, null=True)
	NEW = 'New'
	LIKENEW = 'Like New'
	VERYGOOD = 'Very Good'
	GOOD = 'Good'
	ACCEPTABLE = 'Acceptable'
	CONDITION_CHOICES = (
        (NEW, 'New'),
        (LIKENEW, 'Like New'),
        (VERYGOOD, 'Very Good'),
        (GOOD, 'Good'),
        (ACCEPTABLE, 'Acceptable')
        )
	condition = models.CharField(max_length=15, choices=CONDITION_CHOICES, default=NEW)

	category = models.ForeignKey(
        'Category',
        on_delete=models.CASCADE, blank=True, null=True)
	subcategory = models.ForeignKey(
        'SubCategory',
        on_delete=models.CASCADE, blank=True, null=True)

	def publish(self):
		self.published_date = timezone.now()
		self.save()

	def __str__(self):
		return self.item

class Category(models.Model):
	order = models.PositiveIntegerField(help_text="Enter a number. 1 will be on the left.")
	title = models.CharField(null=True, max_length=100)

	def __str__(self):
		return self.title

class SubCategory(models.Model):
	order = models.PositiveIntegerField(help_text="Enter a number.")
	title = models.CharField(null=True, max_length=100)
	link = models.CharField(blank=True, null=True, max_length=100)
	category = models.ForeignKey(
        'Category',
        on_delete=models.CASCADE,
    )

	def __str__(self):
		return self.title

class Request(models.Model):
	author = models.ForeignKey('auth.User')
	item = models.CharField(max_length=20)
	details = models.TextField(blank=True, null=True)
	category = models.ForeignKey(
        'Category',
        on_delete=models.CASCADE, blank=True, null=True)
	subcategory = models.ForeignKey(
        'SubCategory', limit_choices_to={'Category': 'Category'},
        on_delete=models.CASCADE, blank=True, null=True)
	published_date = models.DateTimeField(blank=True, null=True)
	contact_method = models.ForeignKey('accounts.ContactMethod', blank=True, null=True)


	def publish(self):
		self.published_date = timezone.now()
		self.save()


	def __str__(self):
		return self.item
