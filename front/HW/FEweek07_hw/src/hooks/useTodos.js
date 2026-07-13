// hooks/useTodos.js
import { useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      status: "blank",
      detail: "리액트 공부하기",
      memo: "멋사 세미나 내용 복습하기!",
    },
    {
      id: 2,
      status: "checked",
      detail: "장보기",
      memo: "바나나, 토마토, 빵, 치즈, 햄",
    },
    { id: 3, status: "blank", detail: "멋사 FE 7주차 과제", memo: "" },
    { id: 4, status: "blank", detail: "방 청소", memo: "" },
  ]);

  function toggleStatus(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === "blank" ? "checked" : "blank" }
          : todo,
      ),
    );
  }

  return { todos, setTodos, toggleStatus };
}
