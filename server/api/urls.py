from django.urls import path

from . import views

urlpatterns = [
    path('', views.GetBobaStores.as_view()),
    path('/reviewrating', views.GetBobaReviewAndRating.as_view()),
]