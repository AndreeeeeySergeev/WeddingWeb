from django.urls import path
from . import views

urlpatterns =[
    path ("", views.home, name="home"),
    path("order/", views.order, name="order"),
    path("about/", views.about, name="about"),
    path("contacts/", views.contacts, name="contacts"),
               ]