// 카카오 redirect 화면
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { actionCreators as userActions } from "../redux/modules/user";

import Spinner from "../components/Spinner";
import KakaoLogin from "../Redux/modules/user";

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // 인가코드 
  // redirect 화면에서 인가코드를 받아옴
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)

  React.useEffect(async () => {
    await dispatch(KakaoLogin(code));
  }, []);

  // axios({
  //   method: "GET",
  //   url: `백엔드서버/api/user/kakao/callback?code=${code}`,
  // })
  //   .then((res) => {
  //     console.log(res); // 토큰이 넘어올 것임
  //     const ACCESS_TOKEN = res.data.accessToken;
  //     localStorage.setItem("token", ACCESS_TOKEN);    
  //     // 예시로 로컬에 저장함    
  //     navigate("/main") 
  //     // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)

  //     }).catch((err) => {
  //     console.log("소셜로그인 에러", err);
  //     window.alert("로그인에 실패하였습니다.");
  //     navigate("/login"); 
  //     // 로그인 실패하면 로그인화면으로 돌려보냄
  //     })

  return <Spinner />;
};

export default KakaoRedirect;