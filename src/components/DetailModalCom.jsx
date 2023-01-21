import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __commentLike,
  __delComment,
  __getComment,
} from "../Redux/modules/commentSlice";

import DetailModalComLike from "./DetailModalComLike";

const DetailModalCom = ({ postId }) => {
  console.log(postId);
  const dispatch = useDispatch();
  const { commentList } = useSelector((state) => state.comment);
  // console.log(commentList)

  useEffect(() => {
    dispatch(__getComment(postId));
  }, [dispatch]);

  const commentDel = (id) => {
    if (window.confirm("댓글을 삭제하시겠습니까?", id)) {
      return dispatch(__delComment(id));
    }
  };

  return (
    <>
      {commentList.map((c) => {
        return (
          <ModalContentText key={c.commentId}>
            <Div>
              <UserImage marginLeft="0px" src={c.profileImage} />
            </Div>
            <UserText>
              <Username>{c.username}</Username>
              <UserContent
                onClick={() => {
                  commentDel(c.commentId);
                }}
              >
                {c.comment}
              </UserContent>
              <DetailModalComLike comment={c} />
            </UserText>
          </ModalContentText>
        );
      })}
    </>
  );
};
const Div = styled.div`
  width: 50px;
`
const UserImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0px 0px 0px ${(props) => props.marginLeft};
`;

const Username = styled.span`
  font-weight: bold;
  width: 60px;
`;

const ModalContentText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 15px 5px 15px;
  box-sizing: border-box;
`;
const UserText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserContent = styled.span`
  width:230px;  
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export default DetailModalCom;
