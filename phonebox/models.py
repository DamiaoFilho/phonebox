from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(verbose_name="Nome", max_length=100)
    email = models.EmailField(verbose_name="Email")
    telephone = models.CharField(verbose_name="Telefone", max_length=100)