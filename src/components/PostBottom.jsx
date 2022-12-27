import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import CommentInput from "../components/CommentInput";
import { __addComment, __getComment } from "../Redux/modules/commentSlice";

// 댓글 추가하기 전에, 댓글을 전체 포스트랑 보여줘야 함
// 댓글 get요청은 어디서? 
const PostBottom  = ({inputTagWidth, postId}) =>{

  // const comments = {
  //   commentId : 2,
  //   profileImage: "/img/user.png",
  //   username: 'dlwlrma',
  //   comment: '20자 이상인 글입니다!',
  //   likeCmtNum:0,
  //   isLikeCmt:true,
  //   createdAt: '2022-12-01T12:52:06.729608',
  //   modifiedAt: '2022-12-01T12:52:06.729608'
  // }

  const dispatch = useDispatch()
  const {comments} = useSelector((state)=> state.comment)
  const [comment, setComment] = useState('')


  return (
    <>
    {/* test용 - view */}
      {/* <div key={comments.commentsId}>
        <Username marginLeft="15px">{comments.username}</Username>
        <Comment>{comments.comment}</Comment>
      </div>
      <CommentInput inputTagWidth={inputTagWidth} /> */}
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
const Heart = styled.img.attrs((props) => ({
  src: props.heartUrl,
}))`
  width: 25px;
  margin-left: 15px;
  cursor: pointer;
`;

const CommentForm = styled.form`
  height: 50px;
  margin-top: 15px;
  border-top: 0.5px solid rgb(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const Smile = styled.img.attrs({
  src: "/img/smile.png",
})`
  width: 23px;
  margin: 0px 15px 0px 15px;
`;

const InputTag = styled.input.attrs({ placeholder: "댓글 달기..." })`
  border: none;
  width: ${(props) => props.inputTagWidth};
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: #2ca0f4;
  padding: 0px 10px 0px 10px;
  cursor: pointer;
`;


export default PostBottom;