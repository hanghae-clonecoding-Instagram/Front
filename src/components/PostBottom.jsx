import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import CommentInput from "../components/CommentInput";
import { __getComment } from "../Redux/modules/commentSlice";

const PostBottom  = ({inputTagWidth, postId}) =>{
  const dispatch = useDispatch()
  const {commentList} = useSelector((state)=> state.comment)
  // console.log(`post: ${postId}`,  commentList)
  
  useEffect(() => {
    dispatch(__getComment(postId));
    }, [dispatch]);

  return (
    <>
      {/* 상위컴포넌트에서 map을 돌렸는데, 
      왜 모든 post에 같은내용의 댓글이 들어가는가? */}
      <div key={commentList[0]?.commentsId}>
        <Username marginLeft="15px">{commentList[0]?.username}</Username>
        <Comment>{commentList[0]?.comment}</Comment>
      </div>      
      <CommentInput inputTagWidth={inputTagWidth} postId={postId} />
    </>
  )
}
const Username = styled.span`
  margin: 0px 5px 0px ${(props) => props.marginLeft};
  font-weight: bold;
`;
const Comment = styled.span`
  display: ${(props) => props.display};
  line-height: 18px;
`;
export default PostBottom;