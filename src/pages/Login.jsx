import { useState } from "react";
import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";
import LoginPhImg from "../components/login/LoginPhImg";
import SignUpForm from "../components/login/SignupForm";

const Login = ()=>{
  const [isSignUp, setIsSignUp] = useState(false)
  
  return (
    <Body>
      <LoginPhImg/>
      <LoginForm/>
    </Body>
  )
  
  // return (
  //   <Body>
  //     <div>
  //       {!isSignUp? 
  //         <Contain>
  //           <LoginPhImg/>
  //           <LoginForm/>
  //         </Contain>
  //           : 
  //         <SignUpForm/>
  //         }  
  //       </div>
  //   </Body>
  // )
}

const Body = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Login;