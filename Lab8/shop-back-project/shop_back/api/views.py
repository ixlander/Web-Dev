from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductDetailAPIView(APIView):
    def get(self, request, id):
        try:
            product = Product.objects.get(id=id)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProductSerializer(product)
        return Response(serializer.data)

class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class CategoryDetailAPIView(APIView):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CategorySerializer(category)
        return Response(serializer.data)

class CategoryProductsAPIView(APIView):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)
        
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)