import { useState } from "react";

// style
import styled from "styled-components";


const ModalBox = (props)=>{
console.log(props)


  return (
    <>
      <ModalWrap>
        <customStyles>
          <div style={{width:'300px', height:'300px', backgroundColor:'white'}}>
            소영
          </div>
        </customStyles>
      </ModalWrap>
    </>
  )
}

const ModalWrap = styled.div`
  z-index: 1;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`
const customStyles = styled.div` 
  .content{
    /* top: 50%,
    left: 50%, 
    right: auto,
    bottom: auto,
    marginRight: -50%,
    transform: translate(-50%, -50%), */
  }
`

export default ModalBox;   