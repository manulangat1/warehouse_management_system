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