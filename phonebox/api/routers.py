from rest_framework import routers
from .viewsets import ContactViewset


router = routers.SimpleRouter()
router.register('contact-list-create', ContactViewset)

