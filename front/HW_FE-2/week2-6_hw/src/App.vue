<script setup>
import { ref, computed } from "vue";
import ExpenseInput from "./components/ExpenseInput.vue";
import ExpenseItem from "./components/ExpenseItem.vue";

const expenseList = ref([
  { id: 1, item: "커피", price: 4500 },
  { id: 2, item: "점심", price: 12000 },
  { id: 3, item: "간식", price: 3000 },
]);

const totalPrice = computed(() => {
  return expenseList.value.reduce((total, expense) => total + expense.price, 0);
});

function addExpense(newExpense) {
  if (!newExpense.value.item.trim() || newExpense.value.price <= 0) return;
  expenseList.value.push({
    id: Date.now(),
    item: newExpense.value.item,
    price: newExpense.value.price,
  });
  newExpense.value = { item: "", price: 0 };
}

function deleteExpense(id) {
  expenseList.value = expenseList.value.filter((expense) => expense.id !== id);
}
</script>

<template>
  <h1>오늘의 소비 기록🛍️</h1>
  <p>오늘의 총 소비 금액: {{ totalPrice }}원</p>
  <br />
  <ExpenseInput @add-expense="addExpense" />
  <hr />

  <h3>소비 목록</h3>
  <ul>
    <ExpenseItem
      v-for="expense in expenseList"
      :key="expense.id"
      :expense="expense"
      @delete-expense="deleteExpense"
    />
  </ul>
</template>

<style scoped></style>
