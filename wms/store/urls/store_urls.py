from django.urls import path,include 
from knox import views as knox_views

from ..api.store_api import WarehouseAPI,ProductAPI,ProductsAPI,CustomerAPI,ShipmentAPI,ShipmentCreateAPI


urlpatterns = [
    path('warehouse/',WarehouseAPI.as_view(),name="warehouse"), 
    path('product/',ProductAPI.as_view(),name="products_add"),
    path('products/',ProductsAPI.as_view(),name="products_list"),
    path('customer/',CustomerAPI.as_view(),name="customer_list"),
    path('shipment/',ShipmentAPI.as_view(),name="shipment_list"),
    path('shipment/create/',ShipmentCreateAPI.as_view(),name="shipment_create"),
]