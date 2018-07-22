from rest_framework import serializers

from .models import BobaStores

class BobaStoresSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'country',
            'address1',
            'address2',
            'address3',
            'city',
            'state',
            'zip_code',
            'phone',
            'latitude',
            'longitude',
            'rating',
            'review_count'
        )
        model = BobaStores

class RatingsSerializer(serializers.ModelSerializer):
    class meta:
        fields = (
            'id',
            'name',
            'rating',
            'review_count'
        )
        model = BobaStores