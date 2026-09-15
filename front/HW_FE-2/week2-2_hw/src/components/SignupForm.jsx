import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

function PostForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("userId", String(data.id));
          setUsername("");
          setPassword("");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="사용자명 입력"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호 입력"
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default PostForm;
