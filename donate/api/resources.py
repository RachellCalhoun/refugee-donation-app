from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from donate.models import Donate, Category



class DonateResource(ModelResource):
    class Meta:
        queryset = Donate.objects.all()
        list_allowed_methods = ['get', 'post']
        detail_allowed_methods = ['get', 'post', 'put', 'delete']
        authorization = Authorization()

    def build_schema(self):
       	base_schema = super(DonateResource, self).build_schema()
       	for f in self._meta.object_class._meta.fields:
       		if f.name in base_schema['fields'] and f.choices:
       			base_schema['fields'][f.name].update({'choices': f.choices,})
       	return base_schema

class CategoryResource(ModelResource):
	class Meta:
		queryset = Category.objects.all()
		list_allowed_methods = ['get', 'post']
		detail_allowed_methods = ['get', 'post', 'put', 'delete']
		authorization = Authorization()
