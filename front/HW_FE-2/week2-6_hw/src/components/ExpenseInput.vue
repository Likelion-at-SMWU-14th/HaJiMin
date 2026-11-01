<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-expense"]);
const newExpense = ref({ item: "", price: 0 });

function submit() {
  if (!newExpense.value.item.trim() || newExpense.value.price <= 0) return;
  emit("add-expense", newExpense);
  newExpense.value = { item: "", price: 0 };
}
</script>

<template>
  <input
    type="text"
    v-model="newExpense.item"
    placeholder="소비 항목을 입력하세요"
  />
  <input
    type="number"
    v-model="newExpense.price"
    placeholder="소비 금액을 입력하세요"
  />
  <button @click="submit">추가</button>
</template>
