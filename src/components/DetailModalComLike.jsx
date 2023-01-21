import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __commentLike } from "../Redux/modules/commentSlice";
import styled from "styled-components";

const DetailModalComLike = ({ comment }) => {
  const {commentId, likeCmt} = comment
  // console.log(commentId, likeCmt)
  // const heart = useSelector((state)=> state.comment.commentList)
  // console.log(heart)
  const dispatch = useDispatch();
  const [isLikeCmt, setCommentLike] = useState(likeCmt);

  return (
    <>
      <CommentLike
        onClick={() => {
          setCommentLike(!isLikeCmt);
          console.log(isLikeCmt);
          dispatch(__commentLike({ commentId, isLikeCmt }));
        }}
      >
        <img src={isLikeCmt ? "/img/red heart.png" : "/img/heart.png"} />
      </CommentLike>
    </>
  );
};
const CommentLike = styled.div`
  width: 30px;
  height: 100%;
  text-align: center;
  cursor: pointer;
  img {
    width: 18px;
    height: 15px;
  }
`;
export default DetailModalComLike;
