from rest_framework import routers
from .viewsets import ContactViewset


router = routers.DefaultRouter()
router.register('contact-list-create', ContactViewset)

