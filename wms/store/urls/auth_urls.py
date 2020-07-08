from django.urls import path,include 
from knox import views as knox_views

from ..api.auth_api import UserApi,LoginApi,RegisterApi

urlpatterns = [
    path('',UserApi.as_view(),name="user"),
    path('login/',LoginApi.as_view(),name="login_api"),
    path('register/',RegisterApi.as_view(),name="register_api")
]