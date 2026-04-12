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
