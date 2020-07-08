from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Warehouse(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=400)

    def __str__(self):
        return self.name

class Product(models.Model):
    user = models.ForeignKey(User,on_delete=models.DO_NOTHING)
    warehouse = models.ForeignKey(Warehouse,on_delete=models.DO_NOTHING)
    name = models.CharField( max_length=300)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    sku = models.CharField(max_length=50, null=False, blank=False, unique=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

class Customer(models.Model):
    firstname = models.CharField( max_length=50)
    lastname = models.CharField( max_length=50)
    email = models.EmailField()

    def __str__(self):
        return f'{self.firstname} {self.lastname}'


class Shipment(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    customer = models.ForeignKey(Customer, on_delete=models.DO_NOTHING)
    destination = models.CharField( max_length=100, null=False, blank=False)
    product = models.ManyToManyField(Product)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f'Shipment #{self.id}'
