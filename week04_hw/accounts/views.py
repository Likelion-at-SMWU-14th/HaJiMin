from django.shortcuts import render, redirect
from .forms import SignupForm
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout

def signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        print(form.errors) # 에러 확인 
        if form.is_valid():
            form.save()
            return redirect("login") # 로그인으로 이동
    else:
        form = SignupForm()

    return render(request, "signup.html", {"form":form}) # 회원가입 화면 렌더링

def login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password) # 사용자 인증
        print(f"user: {user}") # 사용자 확인
        if user is not None: # 존재하는 사용자인 경우
            auth_login(request, user) # 장고 기본 로그인 메소드 
            return redirect("main") # main으로 이동
    
    return render(request, "login.html") # 로그인 화면 렌더링

def main(request):
    return render(request, "main.html") # 메인 화면 렌더링

def logout(request):
    if request.user.is_authenticated:
        auth_logout(request) # 로그아웃 실행
        return redirect("login") # 로그인으로 이동