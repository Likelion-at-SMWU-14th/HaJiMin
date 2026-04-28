// DOM 요소 선택
const wishForm = document.getElementById("wish-form");
const wishInput = document.getElementById("wish-input");
const wishList = document.getElementById("wish-list");

// 위시리스트 추가 함수
function addWish(event) {
    event.preventDefault(); // 폼 제출 방지

    const wishText = wishInput.value.trim();

    if (wishText !== ""){ // 입력값이 있을 경우
        // 새 아이템 생성
        const wishItem = document.createElement("li");
        wishItem.className = "wish-item";
        // 텍스트 생성
        const wishTextSpan = document.createElement("span");
        wishTextSpan.textContent = wishText;
        // 삭제 버튼 생성
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "삭제";
        // 요소 추가
        wishItem.appendChild(wishTextSpan);
        wishItem.appendChild(deleteBtn);
        wishList.appendChild(wishItem);

        // 입력창 초기화
        wishInput.value = "";
    }
}

// 구매 완료 / 삭제 처리 함수
function handleWishClick(event) {
    const target = event.target;

    // 삭제 버튼 클릭
    if (target.classList.contains("delete-btn")) {
        target.parentElement.remove(); // 해당 버튼이 있는 <li> 삭제
    }
}

// 이벤트 등록
wishForm.addEventListener("submit", addWish);
wishList.addEventListener("click", handleWishClick);

