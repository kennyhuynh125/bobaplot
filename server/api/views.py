from django.shortcuts import render

from rest_framework import generics
from .models import BobaStores
from .serializers import BobaStoresSerializer, RatingsSerializer

# Create your views here.

class GetBobaStores(generics.ListCreateAPIView):
    queryset = BobaStores.objects.all()
    serializer_class = BobaStoresSerializer

class GetBobaReviewAndRating(generics.ListCreateAPIView):
    queryset = BobaStores.objects.all()
    serializer_class = RatingsSerializer
