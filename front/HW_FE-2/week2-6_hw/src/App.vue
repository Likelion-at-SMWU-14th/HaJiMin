<script setup>
import { re, computed } from "vue";

const expenseList = ref([
  { id: 1, item: "커피", price: 4500 },
  { id: 2, item: "점심", price: 12000 },
  { id: 3, item: "간식", price: 3000 },
]);

totalPrice.value = computed(() => {
  return expenseList.value.reduce((total, expense) => total + expense.price, 0);
});
</script>

<template>
  <h1>오늘의 소비 기록🛍️</h1>
  <p>오늘의 총 소비 금액: {{ totalPrice }}원</p>
  <br />
  <div>
    <input type="text" placeholder="소비 항목을 입력하세요" />
    <input type="number" placeholder="소비 금액을 입력하세요" />
    <button>추가</button>
  </div>
  <hr />

  <h3>소비 목록</h3>
  <ul>
    <li v-for="expense in expenseList" :key="expense.id">
      <span>{{ expense.item }} - {{ expense.price }}원</span>
      <button>삭제</button>
    </li>
  </ul>
</template>

<style scoped></style>
