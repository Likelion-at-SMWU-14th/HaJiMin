// 데이터 설정
const fanta = {
    name: "환타",
    price: 2000
};
const coke = {
    name: "콜라",
    price: 1800
};
const sprite = {
    name: "사이다",
    price: 2500
};
const milkis = {
    name: "밀키스",
    price: 2800
};
const drPepper = {
    name: "닥터페퍼",
    price: 3000
};

const drinks = [fanta, coke, sprite, milkis, drPepper];
let balance = 6500;

// 음료 랜덤 선택 함수
function getRandomDrink(arr) {
    let result_index = Math.floor(Math.random() * arr.length);
    return arr[result_index];
}

// 출력 문자열 반환 함수 
function printComment(selected_drink) {
    if (selected_drink.price <= balance) {
        balance -= selected_drink.price;
        console.log(
            `${selected_drink.name} 음료가 나왔어요! (가격: ${selected_drink.price}원)\n지갑에 남은 돈: ${balance}원`
        );  
    } else {
        console.log(`돈이 부족해요! 음료를 살 수 없어요!`);
    } 
}

// 랜덤 자판기 함수
function buyDrink() {
    // 반복 조건
    for (let i = 0; i < 3; i++) {
        const selected_drink = getRandomDrink(drinks);
        printComment(selected_drink);
    }
}

// 함수 호출
buyDrink();