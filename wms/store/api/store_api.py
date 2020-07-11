from ._base import *
from ..models import Product,Customer,Shipment,Warehouse

class WarehouseAPI(generics.ListCreateAPIView):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer

class ProductAPI(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def create(self,request):
        ware = request.data['warehouse']
        w = Warehouse.objects.filter(pk=ware).first()
        product_count = Product.objects.count()
        if w:
            product = Product(
                name=request.data['name'],
                price=request.data['price'],
                quantity=request.data['quantity'],
            )
            product.user = request.user
            product.warehouse = w
            product.sku = product_count + 1 
            print(product)
            product.save()
            return Response(ProductSerializer(product).data)
        return Response({"The Warehouse does not exist in our systems, Kindly find an operational one near you"})


class ProductsAPI(generics.ListAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
class CustomerAPI(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ShipmentAPI(generics.ListAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = Shipment.objects.all()
    serializer_class = ShipmentsSerializer



class ShipmentCreateAPI(generics.CreateAPIView):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer

    def create(self,request):
        c = Customer.objects.filter(pk=request.data['customer']).first()
        print(c)
        produc = request.data['product']
        if c:
            shipment = Shipment(
                destination=request.data['destination'],
                quantity=request.data['quantity'],
            )
            shipment.user = request.user
            shipment.customer = c
            shipment.save()
            shipment.product.add(produc)
            shipment.save()
            print(shipment)
            return Response(ShipmentsSerializer(shipment).data)
        return Response({"hey"})