import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __commentLike, __delComment } from "../Redux/modules/commentSlice";

const DetailModalComment = ({ postId }) => {
  // console.log(postId)
  const dispatch = useDispatch();
  // const comments = useSelector((state)=>state.comment.comment)
  const [isLikeCmt, setCommentLike] = useState(false);

  // useEffect(() => {
  //   dispatch(__getComment(postId));
  // }, [dispatch]);
  // console.log();

  const comments = [
    {
      commentId: 2,
      profileImage: "/img/user.png",
      username: "dlwlrma",
      comment: "20dd자 이상인 글입니다!",
      likeCmtNum: 0,
      isLikeCmt: false,
      createdAt: "2022-12-01T12:52:06.729608",
      modifiedAt: "2022-12-01T12:52:06.729608",
    },
  ];
  const commentDel = (id) => {
    window.confirm("댓글을 삭제하시겠습니까?", id)
      ? dispatch(__delComment(id))
      : console.log("t삭제취소");
  };

  return (
    <>
      {comments.map((c) => {
        return (
          <>
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
                <CommentLike
                  onClick={() => {
                    setCommentLike(!isLikeCmt);
                    dispatch(__commentLike(c.commentId));
                  }}
                  src={isLikeCmt ? "/img/red heart.png" : "/img/heart.png"}
                />
              </UserText>
            </ModalContentText>
          </>
        );
      })}

      {/* <ModalContentText>
      <UserImage marginLeft="0px" src="/img/user.png" />
      <UserText>
        <Username>dlwlrma</Username>
        <UserContent>
          아이유최고 아이유너무예뻐 아이유 이미 대박이지만 더 대박나자
          아이유최고 아이유너무예뻐 아이유 이미 대박이지만 더 대박나자
        </UserContent>
      </UserText>
    </ModalContentText> */}
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
  margin: 0px 15px 0px ${(props) => props.marginLeft};
`;

const Username = styled.span`
  font-weight: bold;
  margin-right: 10px;
  flex: 1.5;
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
  display: flex;
  justify-content: space-between;
`;
const UserContent = styled.span`
  flex: 4;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;
const CommentLike = styled.img`
  width: 18px;
  height: 15px;
  cursor: pointer;
`;
export default DetailModalComment;
