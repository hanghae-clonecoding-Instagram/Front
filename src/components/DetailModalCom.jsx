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
            <UserImage marginLeft="0px" src={c.profileImage} />
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

const UserImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px soild red;
  margin: 0px 0px 0px ${(props) => props.marginLeft};
`;

const Username = styled.span`
  font-weight: bold;
  margin-right: 10px;
  flex: 1.2;
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
  flex: 4;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export default DetailModalCom;
