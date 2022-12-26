import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";


const CommentInput = ({ inputTagWidth, postId }) => {
  console.log(inputTagWidth, postId)
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  const commentSubmit = (e) => {
    console.log(comment)
    if( comment === "" ){
      alert("댓글을 입력해주세요")
      return
    }
    e.preventDefault();
    dispatch()
  }

  return (
    <PostBottom onSubmit={commentSubmit}>
      <Smile />
      <CommentInputTag 
        inputTagWidth={inputTagWidth}
        onChange={(e)=>{setComment(e.target.value)}}
      />
      <CommentPostBtn>게시</CommentPostBtn>
    </PostBottom>
  );
};

const PostBottom = styled.form`
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

const CommentInputTag = styled.input.attrs({ placeholder: "댓글 달기..." })`
  border: none;
  width: ${(props) => props.inputTagWidth};
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const CommentPostBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: #2ca0f4;
  padding: 0px 10px 0px 10px;
  cursor: pointer;
`;

export default CommentInput;
