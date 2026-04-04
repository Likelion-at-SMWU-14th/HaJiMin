from django.shortcuts import render, redirect
from .forms import SignupForm

def signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        print("POST 요청 옴")
        print(form.errors)
        if form.is_valid():
            form.save()
            return redirect("login")
    else:
        form = SignupForm()

    return render(request, "signup.html", {"form":form})
