from django.shortcuts import render
from rest_framework import generics
from ..models import Contact
from ..serializers import ContactSerializer


class ContactDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()