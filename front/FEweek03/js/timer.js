function showToast(message) {
    const toast = document.createElement("div");

    toast.classList.add("toast");
    toast.textContent = message;

    document.body.appendChild(toast);

    // 1초 후 팝업 띄우기
    setTimeout(() => {
        toast.classList.add("show");
    }, 1000);

    // 3초 후 없애기 
    setTimeout(() => { 
        toast.classList.remove("show");
    }, 3000);
}

showToast("환영합니다!");