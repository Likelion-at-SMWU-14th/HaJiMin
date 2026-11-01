<script setup>
defineProps({ expense: Object });
const emit = defineEmits(["delete-expense"]);
</script>

<template>
  <li>
    <span>{{ expense.item }} - {{ expense.price }}원</span>
    <button @click="emit('delete-expense', expense.id)">삭제</button>
  </li>
</template>
