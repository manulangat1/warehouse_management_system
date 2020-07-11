from django.contrib import admin
from .models import Product,Customer,Shipment,Warehouse

# Register your models here.

admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(Shipment)
admin.site.register(Warehouse)