import ellipseBlank from "../assets/ellipse_blank.svg";
import ellipseChecked from "../assets/ellipse_checked.svg";

function TodoPage() {
  return (
    <>
      <div>
        <p>TODO</p>
        <div>
          <input placeholder="할 일을 입력하세요"></input>
          <button>추가</button>
        </div>
        <div>
          <button>전체</button>
          <button>완료</button>
          <button>미완료</button>
        </div>
        <div>
          <div>
            <img src={ellipseBlank} alt="미완료" />
            <span>리액트 공부하기</span>
          </div>
          <div>
            <img src={ellipseChecked} alt="완료" />
            <span>리액트 공부하기</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoPage;
