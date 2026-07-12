import TodoItem from "../components/TodoItem";

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
          <TodoItem status={"blank"} detail={"리액트 공부하기"} />
          <TodoItem status={"checked"} detail={"장보기"} />
          <TodoItem status={"blank"} detail={"멋사 FE 7주차 과제"} />
          <TodoItem status={"blank"} detail={"방 청소"} />
        </div>
      </div>
    </>
  );
}

export default TodoPage;
