import { create } from "zustand";
import { devTools } from "zustand/middleware";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (rawTitle) => {
    const title = rawTitle.trim();
    if (!title) return;
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    }));
  },
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  todoToggle: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
}));

export default useTodoStore;
