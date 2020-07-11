#django imports
from django.contrib.auth.models import User

#local imports 
from ..serializers import UserSerializer,RegisterSerializer,LoginSerializer,WarehouseSerializer,ProductSerializer,ProductsSerializer,CustomerSerializer,ShipmentSerializer,ShipmentsSerializer

#rest_framework import s
from rest_framework import generics,permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response