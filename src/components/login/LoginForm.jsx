import { useState } from "react";
import styled from "styled-components";

import KakaoTalkLogin from "./KakaoTalkLogin";
import { RiKakaoTalkFill } from "react-icons/ri";
import useInput from "../../hooks/useInput";

const LoginForm = (props) => {
  const { isSignUp, setIsSignUp } = props;

  const [state, setState] = useState({
    userEmail: "",
    Password: "",
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
    }
    e.preventDefault();
    console.log(state);
    setState("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <Logo />
        <InputBox onSubmit={onSubmit}>
          <input
            type="email"
            name="userEmail"
            value={state.userEmail || ""}
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
        <Kakao>
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
  background-image: url("/img/logo.png");
  background-size: cover;
  width: 180px;
  height: 60px;
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
