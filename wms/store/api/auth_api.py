
#django imports
from django.contrib.auth.models import User

#local imports 
from ..serializers import UserSerializer,RegisterSerializer,LoginSerializer

#rest_framework import s
from rest_framework import generics,permissions
from rest_framework.response import Response
from rest_framework.views import APIView
#knox imports
from knox.models import AuthToken
class UserApi(generics.RetrieveAPIView):
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    queryset = User.objects.all()
    serializer_class = UserSerializer




class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })

class LoginApi(generics.GenericAPIView):
    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })