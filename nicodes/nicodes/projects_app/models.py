from django.db import models

# Create your models here.

class Projects(models.Model):
    name = models.CharField(max_length=240)
    description = models.CharField(max_length=240)
    project_url = models.URLField(blank=True)
