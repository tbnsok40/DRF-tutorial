from django.contrib import admin
from django.urls import path

app_name = "api_user"
from . import views

urlpatterns = [
    path('', views.UserView.as_view()),
]
