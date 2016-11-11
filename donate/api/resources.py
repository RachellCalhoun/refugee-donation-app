from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from donate.models import Donate


class DonateResource(ModelResource):
    class Meta:
        queryset = Donate.objects.all()
        list_allowed_methods = ['get', 'post']
        detail_allowed_methods = ['get', 'post', 'put', 'delete']
        authorization = Authorization()
