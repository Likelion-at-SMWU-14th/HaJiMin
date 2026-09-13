import { useMyPage } from "../hooks/useMyPage";

function MyPage() {
  const { data, isPending, isError } = useMyPage(1);

  if (isPending) return <p>로딩중...</p>;
  if (isError) return <p>오류가 발생했습니다</p>;

  return (
    <div>
      <h2>마이페이지</h2>
      <p>이름: {data?.username}</p>
      <p>비밀번호: {data?.password}</p>
    </div>
  );
}

export default MyPage;
