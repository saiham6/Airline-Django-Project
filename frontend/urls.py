from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name = "frontend"
urlpatterns = [
    path("", views.index, name = "index"),
    path("counter", views.counter, name="counter"),
    path("colors",views.colors, name="colors"),
    path("tasks",views.tasks, name="tasks"),
    path("currency",views.currency, name="currency"),
    path("animate",views.animate, name="animate"),
    path("react",views.react,name="react")
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)