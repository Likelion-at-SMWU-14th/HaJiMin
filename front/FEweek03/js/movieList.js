// JSON 객체 배열
const movies = [
    { title: "만약에 우리", rating: 8.83, genre: "로맨스", isAdult: false },
    { title: "왕과 사는 남자", rating: 8.87, genre: "드라마", isAdult: false },
    { title: "야당", rating: 8.55, genre: "범죄", isAdult: true },
    { title: "악마는 프라다를 입는다2", rating: 9.14, genre: "드라마", isAdult: false },
    { title: "서브스턴스", rating: 8.51, genre: "스릴러", isAdult: true },
    { title: "프로젝트 헤일메리", rating: 9.21, genre: "SF", isAdult: false },
    { title: "짱구", rating: 8.08, genre: "드라마", isAdult: false },
    { title: "살목지", rating: 8.35, genre: "공포", isAdult: false },
];

const filteredList = movies.filter((movie) => {
    return movie.genre.includes('드');
});

console.log("드가 들어가는 장르의 영화 목록: ", filteredList);

async function fetchMovies() {
    try {
        const response = await fetch("movies.json");
        const movies = await response.json();
        const container = document.getElementById("movieContainer");
        const movieList = movies.filter((movie) => {
            return movie.genre === "드라마";
        });

        // 드라마 장르의 영화 리스트 순회 
        movieList.forEach((movie) => {
            const card = document.createElement("div");
            card.className = "card";

            // 드라마 장르의 영화 카드 만들기 
            card.innerHTML = `
                <img src=${movie.poster} alt=${movie.title} />
                <div class="card-body">
                    <h2 class="card-title">${movie.title}</h2>
                    <p class="card-rating">⭐${movie.rating}</p>
                    <p class="card-description">${movie.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.log("에러 발생: ", error);
    }
}

fetchMovies();