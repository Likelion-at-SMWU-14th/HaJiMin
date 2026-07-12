import TodoItem from "../components/TodoItem";
import { useState, useMemo } from "react";

function TodoPage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, status: "blank", detail: "리액트 공부하기" },
    { id: 2, status: "checked", detail: "장보기" },
    { id: 3, status: "blank", detail: "멋사 FE 7주차 과제" },
    { id: 4, status: "blank", detail: "방 청소" },
  ]);
  const [filter, setFilter] = useState("all");

  const filteredTodos = useMemo(() => {
    if (filter === "complete") {
      return todos.filter((todo) => todo.status === "checked");
    }
    if (filter === "incomplete") {
      return todos.filter((todo) => todo.status === "blank");
    }
    return todos;
  }, [todos, filter]);

  function addNewTodo() {
    if (text.trim() === "") return;

    const newTodoItem = {
      id: Date.now(),
      status: "blank",
      detail: text,
    };

    setTodos([...todos, newTodoItem]);
    setText("");
  }

  function toggleStatus(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === "blank" ? "checked" : "blank" }
          : todo,
      ),
    );
  }

  return (
    <>
      <div className="layout">
        <p className="title">TODO</p>
        <div className="add-section">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="add-input"
            placeholder="할 일을 입력하세요"
          ></input>
          <button onClick={() => addNewTodo()} className="btn-add">
            추가
          </button>
        </div>
        <div className="sort-section">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "btn active" : "btn"}
          >
            전체
          </button>
          <button
            onClick={() => setFilter("complete")}
            className={filter === "complete" ? "btn active" : "btn"}
          >
            완료
          </button>
          <button
            onClick={() => setFilter("incomplete")}
            className={filter === "incomplete" ? "btn active" : "btn"}
          >
            미완료
          </button>
        </div>
        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              status={todo.status}
              detail={todo.detail}
              onToggle={() => toggleStatus(todo.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoPage;
