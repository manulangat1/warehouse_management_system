from rest_framework import serializers
from django.contrib.auth.models import User
from django.shortcuts import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'id'
        )

class RegisterSerializer(serializer.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'password'
        )
    extra_kwargs = {'password':{'write_only':True}}
    def create(self,validated_data):
        user = User.objects.create_user(validated_data['username'],validated_data['password'],validated_data['email'])
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        return serializers.ValidationError({"Incorrect credentials"})