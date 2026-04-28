// 템플릿 리터럴
let first = "jimin";
let last = "ha";
console.log(`My name is ${first} ${last}.
    I'm ${20+6} years old`);

// undefined, null
let likelion;
likelion = "null";
console.log(likelion);

// array 배열
const daysOfWeek = ['월', '화', '수', '목', '금', '토'];
console.log(daysOfWeek);

daysOfWeek.push('일');
console.log(daysOfWeek);

const firstDay = daysOfWeek[0]
console.log(firstDay);

// object 객체
const myInfo = {
    name: "하지민",
    age: 26,
    major: "computer science",
    tired: true
};
console.log(myInfo);

myInfo.tired = false; // 속성 업데이트
myInfo.hungry = true; // 속성 추가
console.log(myInfo);

// 삼항 조건 연산자
let x = 10;
let result = x % 2 ? "홀수입니다." : "짝수입니다.";
console.log(result);

// 조건문 if else
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

