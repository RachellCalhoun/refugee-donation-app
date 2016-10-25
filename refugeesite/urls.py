from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^donate/',include('donate.urls')),
    # url(r'^accounts/',include('donate.urls')),
]
