import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();

  // useNavigate를 사용한 페이지 이동 함수들
  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToQuiz = () => {
    navigate(`/quiz/${id}`);
  };

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로
  };

  return (
    <div className="quiz-container">
      <h1>퀴즈 결과</h1>
      <div className="result-section">
        <p>수고하셨습니다!</p>
        <div className="button-group">
          <button onClick={handleGoHome} className="home-btn">
            홈으로
          </button>
          <button onClick={() => handleGoToQuiz(1)} className="link-btn">
            퀴즈 1 풀기
          </button>
          <button onClick={() => handleGoToQuiz(2)} className="link-btn">
            퀴즈 2 풀기
          </button>
          <button onClick={() => handleGoToQuiz(3)} className="link-btn">
            퀴즈 3 풀기
          </button>
          <button onClick={handleGoBack} className="reset-btn">
            이전 페이지
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
