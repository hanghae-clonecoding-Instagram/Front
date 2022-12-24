import { useState } from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SignUpForm = ()=>{
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Box>
        <Logo/>
        <InputBox>
          <p style={{textAlign:'center', margin:'0 0 15px 0', lineHeight:'22px'}}>
            친구들의 사진과 동영상을 보려면<br/> 가입하세요
          </p>
          {/* 소셜로그인 컴포넌트 */}
          {/* <KakaoTalkLogin/> */}
          <Kakao> 
            <RiKakaoTalkFill style={{ fontSize:'16px', marginRight: '5px'}}/> 
            <span>카카오 로그인</span>
          </Kakao>
          <div className="line">
            <hr className="hr_solid"/>
            <p>또는</p>
            <hr className="hr_solid"/>
          </div>
          <input
            type ='email'
            value={ userEmail || ""} 
            placeholder = '이메일을 입력해주세요'
            onChange = {(e)=>{setUserEmail(e.target.value)}}
            />
          <input
            type ='text'
            value={ username || ""} 
            placeholder = '이름을 입력해주세요'
            onChange = {(e)=>{setUsername(e.target.value)}}
            />
          <input 
            type ='password'
            value={ password || ""} 
            placeholder="비밀번호를 입력해주세요"
            onChange = {(e)=>{setPassword(e.target.value)}}
            />
          <input 
            type ='password'
            value={ passwordCheck || ""} 
            placeholder="비밀번호를 확인해주세요"
            onChange = {(e)=>{setPasswordCheck(e.target.value)}}
            />
          <button>회원가입</button>


        </InputBox>
      </Box>
      <Div onClick={()=>{navigate('/login')}}>
        <p>계정이 있으신가요?</p>
        <p>로그인</p>
      </Div>
    </div>
  )
}

const Box = styled.div`
  border: 1px solid #dee2e6;
  background-color: white ;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0 0 25px;
  max-width: 350px;
  padding: 0 30px 30px; 
  box-sizing: border-box;
`

const Logo = styled.div`
  background-image: url('/img/logo.png');
  background-size: cover; 
  width: 180px;
  height: 60px;
  margin: 50px 0 30px;
`
const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  input{
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border:  1px solid gray;
    margin-bottom: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    border : 1px solid #adb5bd;
  }
  input:focus{
    border-color: #495057;
    outline: none;
  }
  button{
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #3caefa;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  .line{
    display: flex;
    margin: 30px 0 30px;
    font-size: 13px;
    .hr_solid{
      width: 100px;
      opacity: 0.4;
    }
    p {
      margin: 0 15px;
    }
  }
  `
const Kakao = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #FFE500;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  cursor: pointer;
`
const Div = styled(Box)`
  font-size: 14px;
  cursor: pointer;
  padding: 25px;
  font-weight: 600;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p:last-child{
    margin-left: 7px;
    color: #3caefa;
  }

`
export default SignUpForm;