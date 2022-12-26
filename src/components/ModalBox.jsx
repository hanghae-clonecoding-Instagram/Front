import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// style
import styled from "styled-components";
import { isModalHandler } from "../Redux/modules/modalSlice";
import PostAdd from "./PostAdd";


const ModalBox = (props)=>{
  const dispatch = useDispatch()
  const isModal = useSelector((state)=> state.modal.modal)


  const closeModal = ()=>{
    dispatch(isModalHandler(false))
  }
  
  const onModal = (e) =>{
    if(modalWrapRef.current === e.target){
      dispatch(isModalHandler(false))
    }
  }

  const modalWrapRef = useRef()
  return (
    <ModalWrap ref={modalWrapRef} onClick={onModal}>
      <Button onClick={closeModal}>X</Button>
      <CustomStyles>
        {props.children}
      </CustomStyles>
    </ModalWrap>
  )
}

const ModalWrap = styled.div`
  z-index: 5;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`
const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 30px;
  width: 30px;
  height: 30px;
  font-size: 25px;
  color: white;
  background-color: rgba(0, 0, 0, 0.0);
  border: none;
  cursor: pointer;
`
const CustomStyles = styled.div` 
  position: absolute;
  top: 50%;
  left: 50%; 
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`
export default ModalBox;   