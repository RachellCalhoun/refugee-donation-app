from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from rest_framework import routers
from donate import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'donations', views.DonateViewSet)
router.register(r'donationmatches', views.DonationMatchViewSet)
router.register(r'requests', views.RequestViewSet)
router.register(r'requestmatches', views.RequestMatchViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^',include('donate.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
    # url(r'^accounts/',include('donate.urls')),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()

