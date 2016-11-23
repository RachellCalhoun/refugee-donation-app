from tastypie.authorization import Authorization
from tastypie import fields
from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from donate.models import Donate, Category, SubCategory


class CategoryResource(ModelResource):

    class  Meta:
        queryset = Category.objects.all()
        list_allowed_methods = ['get', 'post']
        detail_allowed_methods = ['get', 'post', 'put', 'delete']
        authorization = Authorization()

        # resource_name = "category"

class SubCategoryResource(ModelResource):
    category = fields.ForeignKey(CategoryResource, 'category', null=True, full=True)

    class Meta:
      queryset = SubCategory.objects.all()
      filtering = {
            'category' : ALL_WITH_RELATIONS,
            }
      resource_name = 'subcategory'


class DonateResource(ModelResource):
    category = fields.ForeignKey(CategoryResource, 'category', null=True, full=True)
    subcategory = fields.ForeignKey(SubCategoryResource, 'subcategory', null=True, full=True)

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

