// 노래방 리스트 가져오기
async function fetchKaraoke(keyword) {
    try {
        const response = await fetch("https://api.manana.kr/karaoke/singer/${keyword}.json");
        const songList = await response.json();

        const container = document.getElementById("songContainer");
        
        songList.forEach((song) => {
            const card = document.createElement("div");
            card.className = "card";

            // 노래 카드 만들기
            card.innerHTML = `
                <h2 class="song-title">${song.title}</h2>
                <p class="singer">${song.singer}</p>
                <div class="song-detail-area">
                    <p class="song-detail">번호 ${song.no}</p>
                    <p class="song-detail">작사 ${song.lyricist}</p>
                </div>
                <div class="song-detail-area">
                    <p class="song-detail">작곡 ${song.composer}</p>
                    <p class="song-detail">발매일 ${song.release}</p>
                </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.log("에러 발생: ", error);
    }
}