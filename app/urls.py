from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path("search/", views.SearchGithubView.as_view()),
    path("clear-cache/", views.ClearCacheView.as_view())
]
