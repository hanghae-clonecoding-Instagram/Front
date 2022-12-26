import { instance } from "../axios";

export const postLogin = async (post) => {
  // try {
  const data = await instance.post("/api/login", post);
  console.log(data);
  alert("로그인 성공");
  return data;
  // } catch (error) {
  //   const msg = error.response.data.errorMessage;
  //   alert(msg);
  // }
};

// export const postLogout = async () => {
//   try {
//     const data = await instance.post("/api/logout");
//     alert("로그아웃 성공");
//     return data;
//   } catch (error) {
//     const msg = error.response.data.errorMessage;
//     alert("로그아웃 실패ㅠㅠ");
//   }
// };

export const postSignup = async (post) => {
  const data = await instance.post("/api/signup", post);
  alert("회원가입 성공");
  return data;
};

export const deleteUser = async (password) => {
  console.log(password);
  const data = await instance.delete("/api/deleteUser", password);
  alert(data.response.data.errorMessage);
  console.log("회원 탈퇴 성공!");
  return data;
};
