from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view),
    path('predict/', views.predict_view)
    # path('test/', views.test_view)
]
