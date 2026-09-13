// 회원가입
export const signUp = async ({ username, password }) => {
  console.log("POST api/users");
  return true;
};

// 프로필 수정
export const updateProfile = async ({ userId, ...updatedFields }) => {
  console.log(`PUT api/users/${userId}`, updatedFields);
};

// 마이페이지 조회
export const fetchMyPage = async (userId) => {
  console.log(`GET api/users/${userId}`);
};

// 회원 정보 삭제
export const deleteUser = async (userId) => {
  console.log(`DELETE api/users/${userId}`);
};
