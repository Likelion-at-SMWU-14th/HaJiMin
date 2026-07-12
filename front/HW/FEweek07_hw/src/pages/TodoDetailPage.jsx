import ellipseBlank from "../assets/ellipse_blank.svg";
import back from "../assets/back.svg";

function TodoDetailPage() {
  return (
    <>
      <div className="layout">
        <img className="btn-back" src={back} alt="뒤로가기" />
        <div className="todo-item">
          <img className="todo-status" src={ellipseBlank} alt="미완료" />
          <span className="todo-detail">리액트 공부하기</span>
        </div>
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
