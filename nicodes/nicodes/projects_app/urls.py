from django.contrib import admin
from django.urls import path
from projects_app import views


app_name = 'projects_app'

urlpatterns = [
    path('', views.projects, name='projects'),
]