from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "frontend/index.html")

def counter(request):
    return render(request, "frontend/counter.html")

def colors(request):
    return render(request,"frontend/colors.html")

def tasks(request):
    return render(request,"frontend/tasks.html")

def currency(request):
    return render(request,"frontend/currency.html")

def animate(request):
    return render(request,"frontend/animate.html")

def react(request):
    return render(request,"frontend/react.html")