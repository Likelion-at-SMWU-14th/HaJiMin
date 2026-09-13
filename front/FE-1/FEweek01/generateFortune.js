const names = ["서현", "영서", "연재", "다인", "지우", "지민"];

const fortunes = [
    "오래 미뤄둔 일이 오늘은 의외로 쉽게 해결될 수 있답니다.",
    "실수해도 괜찮아요, 그 안에서 더 좋은 배움이 기다리고 있어요.",
    "지나간 일은 내려놓고, 지금 눈앞의 일에 집중해보세요",
    "작지만 확실한 행복이 숨어 있는 하루예요. 천천히 둘러보세요",
    "오늘 하루는 마음 가는 대로 행동해보는 것도 괜찮아요.",
    "물 흐르듯 자연스럽게 흘러가는 하루가 될 거예요.",
    "무언가 새롭게 시작하지 좋은 타이밍이예요. 주저하지 마세요!",
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getResultComment(score) {
    if (score == 100) return "왕큰운수의 주인공 !! 오늘은 아기사자의 왕이에요!";
    else if (score >= 90)
        return "무야호! 당신에겐 오늘 기적이 펼쳐질지도 몰라요!";
    else if (score >= 70)
        return "뭐든 술술 풀리는 날! 자신감 있는 아기사자가 되어보세요!!!";
    else if (score >= 50)
        return "평범하지만 무탈한 하루! 원래 평범함이 진짜 행복함이라는거 아시죠????";
    else if (score >= 30) return "뚝딱거리는 하루더라도 나름 괜찮은 하루.";
    else return "오늘은 아무것도 안 해도 괜찮은 날~!!"; 
}

function generateFortuneForAll() {
    let highestScore = 0;
    let presenter = "";
    console.log("⭐ 오늘의 운세 결과 ⭐\n");

    names.forEach((name) => {
        const fortune = getRandom(fortunes);
        const score = Math.floor(Math.random() * 100) + 1;

        console.log(`이름: ${name}`);
        console.log(`오늘의 운세: ${fortune}`);
        console.log(`행운 점수: ${score}점`);
        console.log(`코멘트: ${getResultComment(score)}`);
        console.log("-------------------------------------------------------");

        // 가장 높은 점수 가진 사람 찾기
        if (score > highestScore) {
            highestScore = score;
            presenter = name;
        }
    });

    // 발표자 선정 결과 출력
    console.log(
        `오늘의 발표자는 ...🏆 ${presenter} 님입니다! (행운 점수 : ${highestScore}점)`
    );
}

// 호출
generateFortuneForAll();

