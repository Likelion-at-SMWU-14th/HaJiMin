import { useState } from "react";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

function UpdateProfileForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useUpdateProfile();
  const userId = 1; // 예시 아이디 값

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    mutate({ userId, username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="변경할 이름 입력"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="변경할 비밀번호 입력"
        type="password"
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default UpdateProfileForm;
