from django.shortcuts import render

def page1(request):
    return render(request, "page1.html")

def page2(request):
    return render(request, "page2.html")
    
def loading(request):
    return render(request, "loading.html")

def page3(request):
    return render(request, "page3.html")