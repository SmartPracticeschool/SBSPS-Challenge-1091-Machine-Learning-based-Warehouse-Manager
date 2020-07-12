from rest_framework import viewsets,filters, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Meal, Item
from .serializers import MealSerializer, ItemSerializer 

class MealViewset(viewsets.ModelViewSet): 
  queryset = Meal.objects.all()
  serializer_class = MealSerializer

class ItemViewset(viewsets.ModelViewSet):
  queryset = Item.objects.all()
  serializer_class = ItemSerializer
  filter_backends = [filters.OrderingFilter]
  ordering_fields = ['id']

# def create_item(request, *args, **kwargs)