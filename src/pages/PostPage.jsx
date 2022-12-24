import { useState } from "react";
import { useNavigate } from "react-router-dom";


// style
import styled from "styled-components";
import Modal from 'react-modal';
import PostAdd from "../components/postPage/PostAdd";
import PostEdit from "../components/postPage/PostEdit";


const PostPage  = ()=>{

  return (
    <Box>
      <PostAdd/>
      {/* <PostEdit/> */} 
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f3f5;
`

export default PostPage;   