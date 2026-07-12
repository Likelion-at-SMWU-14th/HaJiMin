import TodoItem from "../components/TodoItem";
import { useState } from "react";

function TodoPage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, status: "blank", detail: "리액트 공부하기" },
    { id: 2, status: "checked", detail: "장보기" },
    { id: 3, status: "blank", detail: "멋사 FE 7주차 과제" },
    { id: 4, status: "blank", detail: "방 청소" },
  ]);

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
          <button className="btn btn-sort-all active">전체</button>
          <button className="btn btn-sort-complete">완료</button>
          <button className="btn btn-sort-incomplete">미완료</button>
        </div>
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} status={todo.status} detail={todo.detail} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoPage;
