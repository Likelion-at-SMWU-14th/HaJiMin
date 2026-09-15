import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

// 회원가입
export const signUp = async ({ username, password }) => {
  const { data } = await axios.post(`${BASE_URL}/users`, {
    username,
    password,
  });
  return data;
};

// 프로필 수정
export const updateProfile = async ({ userId, ...updatedFields }) => {
  const { data } = await axios.put(
    `${BASE_URL}/users/${userId}`,
    updatedFields,
  );
  return data;
};

// 마이페이지 조회
export const fetchMyPage = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
  return data;
};

// 회원 정보 삭제
export const deleteUser = async (userId) => {
  await axios.delete(`${BASE_URL}/users/${userId}`);
  return userId;
};
