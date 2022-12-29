// 카카오 redirect 화면
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";


const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // redirect 화면에서 인가코드를 받아옴
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)
  
  useEffect(() => {
    console.log('thdud22')
    if(code){
      console.log('thdud33')
      kakaoLogin(code);
    }
  }, [code]);


  const kakaoLogin = async (code) => {
    console.log(code)
    console.log('thdud')

    // return function () {
    //   axios({
    //   method: "GET",
    //   url: `https://woooo.shop/api/user/kakao/callback?code=${code}`,
    // })
      try{
        const data = await axios.get(`https://woooo.shop/api/user/kakao/callback?code=${code}`)
        console.log(data)
        // console.log(data.d여기 토큰값 찾아서)
      } catch(e){
        console.log(e)
      } 
    // 카카오 인증받을 api
      // .then((res) => {
      //   console.log(res); // 토큰이 넘어올 것임
      //   const ACCESS_TOKEN = res.data.accessToken;
      //   localStorage.setItem("token", ACCESS_TOKEN);    
      //   // 예시로 로컬에 저장함    
      //   navigate("/main")
      //   console.log('로그인성공')
      //   // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        
      //   }).catch((err) => {
      //   console.log("소셜로그인 에러", err);
      //   window.alert("로그인에 실패하였습니다.");
      //   navigate("/"); 
      //   // 로그인 실패하면 로그인화면으로 돌려보냄
      //   })
      // }
  };


return (
  <>
    <h1>뜬다?</h1>
  </>
)
};

export default KakaoRedirect;