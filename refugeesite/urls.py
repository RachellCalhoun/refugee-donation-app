from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from tastypie.api import Api
from donate.api.resources import DonateResource, CategoryResource, SubCategoryResource, RequestResource, UserResource, DonationMatchResource


v1_api = Api(api_name='v1')
v1_api.register(SubCategoryResource())
v1_api.register(CategoryResource())
v1_api.register(DonateResource())
v1_api.register(RequestResource())
v1_api.register(UserResource())
v1_api.register(DonationMatchResource())

# v1_api.register(ContactResource())

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^',include('donate.urls')),
    url(r'^api/', include(v1_api.urls)),
    # url(r'^accounts/',include('donate.urls')),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()

