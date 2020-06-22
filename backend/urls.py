from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict_view),
    path('test/', views.scoring_url_predict_view),
    path('upload/', views.file_predict_view),
]
