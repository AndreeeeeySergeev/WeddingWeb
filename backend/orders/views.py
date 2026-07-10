from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.shortcuts import render
import json

def home(request):
    return render(request, "main.html")

def about(request):
    return render(request, "about.html")

def contacts(request):
    return render(request, "contacts.html")


@require_POST
def order(request):

    data = json.loads(request.body)

    print("Новая заявка")
    print("-----------------------")
    print(f"Имя: {data['first_name']}")
    print(f"Фамилия: {data['last_name']}")
    print(f"Телефон: {data['phone']}")
    print(f"Email: {data['email']}")
    print("-----------------------")

    return JsonResponse({
        "success": True,
        "message": "Заявка успешно отправлена!"
    })