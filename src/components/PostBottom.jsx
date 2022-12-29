import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import CommentInput from "../components/CommentInput";
import { __getComment } from "../Redux/modules/commentSlice";

const PostBottom  = ({inputTagWidth, post}) =>{
  const dispatch = useDispatch()
  const {commentList} = useSelector((state)=> state.comment)

  // console.log('코멘트유저: ',post.cmtUsername)
  // console.log('코멘트: ', post.latestCmt)
  
  useEffect(() => {
    // dispatch(__getComment(postId));
    }, [dispatch]);

  return (
    <>
      <div key={post.postId}>
        <Username marginLeft="15px">{post.cmtUsername}</Username>
        <Comment>{post.latestCmt}</Comment>
      </div>      
      <CommentInput inputTagWidth={inputTagWidth} postId={post.postId} />
    </>

  );
};
const Username = styled.span`
  margin: 0px 5px 0px ${(props) => props.marginLeft};
  font-weight: bold;
`;
const Comment = styled.span`
  display: ${(props) => props.display};
  line-height: 18px;
`;
export default PostBottom;
