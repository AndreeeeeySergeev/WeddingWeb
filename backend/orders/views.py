from django.contrib.messages.api import success
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
import json

def home(request):
    return render(request, "main.html")

def about(request):
    return render(request, "about.html")

def contacts(request):
    return render(request, "contacts.html")


@require_POST
def order(request):
    try:
        data = json.loads(request.body)

        message = f"""
            Новая заявка!
            
            Имя: {data['first_name']}
            Фамилия: {data['last_name']}
            Телефон: {data['phone']}
            Email: {data['email']}
            """
        send_mail(
            subject="Новая заявка на свадьбу",
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
        )

        return JsonResponse({
            "success": True,
            "message": "Заявка успешно отправлена!"
        })

    except Exception as e:
        print(e)

        return JsonResponse({
            "success": False,
            "message": str(e) #"Ошибка отправки"
        }, status=500)