import { useState } from "react";
import styled from "styled-components";

import KAKAO_AUTH_URL from "./KakaoTalkLogin";
import { RiKakaoTalkFill } from "react-icons/ri";
import { instance } from "../../core/api/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const { isSignUp, setIsSignUp } = props;

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleLoginState = (e) => {
    // console.log(e.target.name, e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (state === "") {
      alert("빈칸 없이 입력해주세요");
      return;
    }
    e.preventDefault();
    console.log(state);
    instance.post("/api/user/login", state)
    .then((res)=>{
      console.log(res)    
      // 토큰 저장 
      localStorage.setItem("is_login", res.headers.authorization);
      window.location.href = "/main";
    })
    .catch((err)=>{
      const msg = err.response.data.errorMessage;
      alert(msg);
      setState("");
      console.log("로그인 실패");
      setIsSignUp(false)
    })
  };

  const socialLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    axios({
      method: "GET",
      // url: `http://3.35.208.142/oauth/callback/kakao?code=${code}` 여기에 뭘 넣지??.
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
        window.location.href("/main"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        // window.alert("로그인에 실패하였습니다.");
        navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
  // 로그인 링크로 보낸 결과값을 어떻게 받을 것인가?
  // 비동기 처리 axios로? 뭔가를 보내서 결과값을 받아야 하는데?
  // -------------------------------------------------------------
  // 1 인가코드를 카카오에서 받아서 axios get요청 => 서버로 전달->
  // 2 서버는 인증코드를 받고 카카오에 토큰 요청, 받아서 프론트 전달 ->
  // 3 프론트에서 토큰 받음 -> 로그인 성공
  // url로 페이지를 이동시키고, 그에 해당하는 인가코드를 받아와야 한다
  // window.location.href 현재 화면의 주소창 => ?code뒷부분
  // code뒷부분도 백엔드에서 처리하고. 토큰과 결과값만 준다고함.

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <Logo />
        <InputBox onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={state.email || ""}
            placeholder="이메일을 입력해주세요"
            onChange={handleLoginState}
          />
          <input
            type="password"
            name="password"
            value={state.password || ""}
            placeholder="비밀번호를 입력해주세요"
            onChange={handleLoginState}
          />
          <button>로그인</button>
          <div className="line">
            <hr className="hr_solid" />
            <p>또는</p>
            <hr className="hr_solid" />
          </div>
        </InputBox>
        {/* 소셜로그인 컴포넌트 */}
        {/* <KakaoTalkLogin/> */}
        <Kakao onClick={socialLogin}>
          <RiKakaoTalkFill style={{ fontSize: "16px", marginRight: "5px" }} />
          <span>카카오 로그인</span>
        </Kakao>
      </Box>
      <Div
        onClick={() => {
          setIsSignUp(true);
        }}
      >
        <p>회원이 아니신가요?</p>
        <p>회원 가입하기</p>
      </Div>
    </div>
  );
};

const Box = styled.div`
  border: 1px solid #dee2e6;
  background-color: white;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0 0 25px;
  max-width: 350px;
  padding: 0 40px 30px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  background-image: url("/img/logo2.png");
  background-size: cover;
  width: 180px;
  height: 70px;
  margin: 50px 0;
`;
const InputBox = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid gray;
    margin-bottom: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    border: 1px solid #adb5bd;
  }
  input:focus {
    border-color: #495057;
    outline: none;
  }
  button {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #3caefa;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  .line {
    display: flex;
    margin: 30px 0 30px;
    font-size: 13px;
    .hr_solid {
      width: 100px;
      opacity: 0.4;
    }
    p {
      margin: 0 15px;
    }
  }
`;
const Kakao = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffe500;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  cursor: pointer;
`;
const Div = styled(Box)`
  font-size: 14px;
  cursor: pointer;
  padding: 25px;
  font-weight: 600;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p:last-child {
    margin-left: 7px;
    color: #3caefa;
  }
`;

export default LoginForm;
