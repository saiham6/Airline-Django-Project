from django.contrib import admin

from .models import Flight,Airport, Person

# Listing style
class FlightAdmin(admin.ModelAdmin):
    list_display = ("id","origin","destination","duration")

class PersonsAdmin(admin.ModelAdmin):
    list_display = ("first", "last")
    filter_horizontal = ("flights",)

# Register your models here.
admin.site.register(Airport)
admin.site.register(Flight, FlightAdmin)
admin.site.register(Person, PersonsAdmin)