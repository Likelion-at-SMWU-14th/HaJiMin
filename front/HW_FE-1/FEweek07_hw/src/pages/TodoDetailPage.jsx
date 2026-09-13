import back from "../assets/back.svg";
import TodoItem from "../components/TodoItem";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TodoDetailPage({ todos, setTodos, toggleStatus }) {
  const { todoId } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((t) => t.id === Number(todoId));
  const [newMemo, setNewMemo] = useState(todo?.memo ?? "");

  if (!todo) {
    return null;
  }

  function updateMemo() {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, memo: newMemo } : t)),
    );
    navigate("/");
  }

  function deleteTodo() {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    navigate("/");
  }

  return (
    <>
      <div className="layout">
        <img
          onClick={() => navigate("/")}
          className="btn-back"
          src={back}
          alt="뒤로가기"
        />
        <TodoItem
          status={todo.status}
          detail={todo.detail}
          onToggle={() => toggleStatus(todo.id)}
        />
        <textarea
          value={newMemo}
          onChange={(e) => setNewMemo(e.target.value)}
          className="todo-memo"
          placeholder="메모를 입력하세요"
        />
        <div className="btn-group">
          <button onClick={updateMemo} className="btn-save">
            저장하기
          </button>
          <button onClick={deleteTodo} className="btn-delete">
            삭제하기
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoDetailPage;
