import back from "../assets/back.svg";
import TodoItem from "../components/TodoItem";

function TodoDetailPage() {
  return (
    <>
      <div className="layout">
        <img className="btn-back" src={back} alt="뒤로가기" />
        <TodoItem status={"blank"} detail={"리액트 공부하기"} />
        <textarea className="todo-memo" placeholder="메모를 입력하세요" />
        <div className="btn-group">
          <button className="btn-save">저장하기</button>
          <button className="btn-delete">삭제하기</button>
        </div>
      </div>
    </>
  );
}

export default TodoDetailPage;
