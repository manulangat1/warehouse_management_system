from django.contrib import admin
from django.urls import path,include
from knox import views as knox_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/',include('store.urls.auth_urls')),
    path('api/auth',include('knox.urls')),
]
