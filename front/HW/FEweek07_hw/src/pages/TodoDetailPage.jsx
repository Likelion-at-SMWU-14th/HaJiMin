import ellipseBlank from "../assets/ellipse_blank.svg";
import back from "../assets/back.svg";

function TodoDetailPage() {
  return (
    <>
      <div>
        <img src={back} alt="뒤로가기" />
        <div>
          <img src={ellipseBlank} alt="미완료" />
          <span>리액트 공부하기</span>
        </div>
        <textarea placeholder="메모를 입력하세요" />
        <div>
          <button>저장하기</button>
          <button>삭제하기</button>
        </div>
      </div>
    </>
  );
}

export default TodoDetailPage;
