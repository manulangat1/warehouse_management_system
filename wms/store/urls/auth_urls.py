from django.urls import path,include 
from knox import views as knox_views

from ..api.auth_api import UserApi,LoginAPI,RegisterApi

urlpatterns = [
    path('user/',UserApi.as_view(),name="user"),
    path('login/',LoginAPI.as_view(),name="login"),
    path('register/',RegisterApi.as_view(),name="register_api"),
    path('logout/',knox_views.LogoutView.as_view(),name='logout'),
    path('api/auth',include('knox.urls')),
]