const today = new Date();

console.log(`${today.getFullYear()}년 ${today.getMonth() +1}월 ${today.getDate()}일`);
console.log(`${today.getHours()}시 ${today.getMinutes()}분 ${today.getSeconds()}초`);

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

console.log(`${year}년 ${month}월 ${date}일`);
console.log(`${hour}시 ${minute}분 ${second}초`);

