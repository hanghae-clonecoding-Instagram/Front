import { useState } from "react";
import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";
import LoginPhImg from "../components/login/LoginPhImg";
import SignUpForm from "../components/login/SignupForm";

const Login = ()=>{
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <Body>
      <div>
        {!isSignUp? 
          <div style={{display:'flex', alignItems:'center'}}>
            <LoginPhImg/>
            <LoginForm isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
          </div>
            : 
          <SignUpForm isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
          }  
        </div>
    </Body>
  )
}

const Body = styled.div`
  /* border: 1px solid red; */
  margin: 0 auto;
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Login;