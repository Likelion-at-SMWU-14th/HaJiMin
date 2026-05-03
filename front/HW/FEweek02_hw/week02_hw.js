// DOM 요소 선택
const likeBtn = document.querySelector("like-btn");
const likeText = document.querySelector("like-text");
const bookmarkBtn = document.querySelector("bookmark-btn");
const moreBtn = document.querySelector("more-btn");
const lessBtn = document.querySelector("less-btn");

// 좋아요 버튼 클릭
likeBtn.addEventListener("click", function() {
    likeBtn.classList.toggle("clicked");

    // 현재 좋아요 수 
    const currentLikeNum = parseInt(likeText.textContent);

    if (likeBtn.classList.contains("clicked")) {
        likeBtn.src = "./images/like_fill.svg"
        likeText.textContent = currentLikeNum + 1;
    } else {
        likeBtn.src = "./images/like_empty.svg"
        likeText.textContent = currentLikeNum - 1;
    }
});

// 북마크 버튼 클릭
bookmarkBtn.addEventListener("click", function() {
    bookmarkBtn.classList.toggle("clicked");

    if (bookmarkBtn.classList.contains("clicked")) {
        bookmarkBtn.src = "./images/bookmark_fill.svg"
    } else {
        bookmarkBtn.src = "./images/bookmark_empty.svg"
    }
});







