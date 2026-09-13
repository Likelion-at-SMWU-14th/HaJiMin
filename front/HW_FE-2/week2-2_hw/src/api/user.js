let currentUser = {
  userId: 1,
  username: "하지민",
  password: "1234",
};

// 회원가입
export const signUp = async ({ username, password }) => {
  console.log("POST api/users");
  return username;
};

// 프로필 수정
export const updateProfile = async ({ userId, ...updatedFields }) => {
  console.log(`PUT api/users/${userId}`, updatedFields);
  currentUser = { ...currentUser, ...updatedFields };
  return currentUser;
};

// 마이페이지 조회
export const fetchMyPage = async (userId) => {
  console.log(`GET api/users/${userId}`);

  return currentUser;
};

// 회원 정보 삭제
export const deleteUser = async (userId) => {
  console.log(`DELETE api/users/${userId}`);
};
