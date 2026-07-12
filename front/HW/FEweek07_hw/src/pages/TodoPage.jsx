import ellipseBlank from "../assets/ellipse_blank.svg";
import ellipseChecked from "../assets/ellipse_checked.svg";

function TodoPage() {
  return (
    <>
      <div className="layout">
        <p className="title">TODO</p>
        <div className="add-section">
          <input className="add-input" placeholder="할 일을 입력하세요"></input>
          <button className="btn-add">추가</button>
        </div>
        <div className="sort-section">
          <button className="btn btn-sort-all active">전체</button>
          <button className="btn btn-sort-complete">완료</button>
          <button className="btn btn-sort-incomplete">미완료</button>
        </div>
        <div className="todo-list">
          <div className="todo-item">
            <img className="todo-status" src={ellipseBlank} alt="미완료" />
            <span className="todo-detail">리액트 공부하기</span>
          </div>
          <div className="todo-item">
            <img className="todo-status" src={ellipseChecked} alt="완료" />
            <span className="todo-detail">리액트 공부하기</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoPage;
