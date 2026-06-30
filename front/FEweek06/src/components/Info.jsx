import { useState } from "react";

function Info() {
  // 컴포넌트 최상단에 state 선언
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

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
