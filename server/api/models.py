from django.db import models

# Create your models here.

class BobaStores(models.Model):

    id = models.CharField(max_length=200, primary_key=True)
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=10)
    address1 = models.CharField(max_length=200)
    address2 = models.CharField(max_length=200)
    address3 = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    latitude = models.DecimalField(max_digits=15, decimal_places=6)
    longitude = models.DecimalField(max_digits=15, decimal_places=6)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    review_count = models.DecimalField(max_digits=6, decimal_places=0)

    class Meta:
        db_table = 'bubble_tea'

