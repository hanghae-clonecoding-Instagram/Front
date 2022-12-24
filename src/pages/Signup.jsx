import { useState } from "react";
import styled from "styled-components";
import SignUpForm from "../components/login/SignupForm";

const Signup = ()=>{

  return (
    <Body>
      <SignUpForm/>
    </Body>
  )
}

const Body = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Signup;