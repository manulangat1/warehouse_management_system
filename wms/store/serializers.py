from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from .models import Product,Customer,Shipment,Warehouse

class RegisterSerializer(serializers.ModelSerializer):
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
    password =  serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        return serializers.ValidationError("Incorect Credential")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email'
        )


class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = (
            'id',
            'name',
            'location'
        )

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'price',
            'quantity',
            'sku',
            'date',
            'user',
            'warehouse'

        )
class ProductsSerializer(serializers.ModelSerializer):
    warehouse = serializers.SerializerMethodField()
    total_price = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'price',
            'quantity',
            'sku',
            'date',
            'user',
            'warehouse',
            'total_price'
        )
    def get_warehouse(self,obj):
        return WarehouseSerializer(obj.warehouse).data
    def get_total_price(self,obj):
        return obj.total_price()
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = (
            'id',
            'firstname',
            'lastname',
            'email'
        )

class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipment
        fields = (
            'id',
            'customer',
            'destination',
            'product',
            'quantity'
        )

class ShipmentsSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()
    class Meta:
        model = Shipment
        fields = (
            'id',
            'customer',
            'destination',
            'product',
            'quantity',
            'total'
        )
    def get_product(self,obj):
        return ProductsSerializer(obj.product.all(),many=True).data
    def get_total(self,obj):
        total = 0
        for i in obj.product.all():
            print(i.total_price())
            total += i.total_price()
        return total