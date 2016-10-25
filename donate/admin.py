from django.contrib import admin
from .models import Donate, Category, SubCategory, Request
# Register your models here.

class SubCategoryInline(admin.TabularInline):
    model = SubCategory
    extra = 3

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    fieldsets = [(None, {'fields': ['title', 'order']}), ]
    inlines = [SubCategoryInline]

admin.site.register(Donate)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Request)
