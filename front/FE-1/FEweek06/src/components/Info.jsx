import { useState, useEffect } from "react";

function Info() {
  // 컴포넌트 최상단에 state 선언
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //   // 모든 렌더링마다 호출
  //   useEffect(() => {
  //     console.log("렌더링이 되었어요!!🌀");
  //     console.log({ name, nickname });
  //   });

  //   // 최초 렌더링 시에만 호출
  //   useEffect(() => {
  //     console.log("최초 렌더링시 출력 되어요!🌀");
  //   }, []);

  // nickname state 변경 시 호출
  useEffect(() => {
    console.log("nickname이 변경될 때마다 렌더링!🎸");
    console.log({ nickname });
  }, [nickname]);

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <input
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임 입력"
      />

      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
    </>
  );
}

export default Info;
