from django.urls import path,include 
from knox import views as knox_views

from ..api.store_api import WarehouseAPI,ProductAPI


urlpatterns = [
    path('warehouse/',WarehouseAPI.as_view(),name="warehouse"), 
    path('products/',ProductAPI.as_view(),name="products_list")
]