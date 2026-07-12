// hooks/useTodos.js
import { useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, status: "blank", detail: "리액트 공부하기", memo: "" },
    { id: 2, status: "checked", detail: "장보기", memo: "" },
    { id: 3, status: "blank", detail: "멋사 FE 7주차 과제", memo: "" },
    { id: 4, status: "blank", detail: "방 청소", memo: "" },
  ]);

  function toggleStatus(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === "blank" ? "checked" : "blank" }
          : todo,
      ),
    );
  }

  return { todos, setTodos, toggleStatus };
}
