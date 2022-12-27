import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getPost, __getPosts } from "../Redux/modules/postSlice";
import ButtonLayout from "./ButtonsLayout";
import CommentInput from "./CommentInput";
<<<<<<< HEAD
import MoreButtonsModal from "./MoreButtonsModal";

const DetailModal = ({ detailBtnClick, setDetailBtnClick, postId }) => {
=======
import DetailModalComment from "./DetailModalComment";

const DetailModal = ({
  detailBtnClick,
  setDetailBtnClick,
  moreButtonsClick,
  setMoreButtonsClick,
  postId,
  }) => {
>>>>>>> a1487e2517fd9c4c19a8d75eeb15c1a9cde089ec
  const dispatch = useDispatch();
  const outSection = useRef();
  const [moreButtonsClick, setMoreButtonsClick] = useState(false);
  console.log(postId);

  // 댓글 리스트는 state로 관리해야하고
  // 댓글 인풋은 관리할 필요 없다. ㅇㅇ 

  // useEffect(() => {
  //   dispatch(__getPost(postId));
  // }, [dispatch]);
  // console.log(post);

  const post = {
    postId: 2,
    profileImage: "/img/user.png",
    username: "dlwlrma",
    content:
      "20자 이상인 글입니다!20자 이상인 글입니다!20자 이상인 글입니다!20자 이상인 글입니다!20자 이상인 글입니다!20자 이상인 글입니다!20자 이상인 글입니다!",
    image: "img/image sample.png",
    likePostNum: 5,
    isLikePost: true,
    commentNum: 17,
    createdAt: "2022-12-01T12:52:06.729608",
    modifiedAt: "2022-12-01T12:52:06.729608",
  };

  const ModalWrapperHandler = (e) => {
    if (outSection.current === e.target) {
      setDetailBtnClick(false);
    }
    dispatch(__getPosts());
  };

  return (
    <div>
      <MoreButtonsModal
        moreButtonsClick={moreButtonsClick}
        setMoreButtonsClick={setMoreButtonsClick}
      />
      {detailBtnClick === true ? (
        <ModalWrapper
          className="modalOutside"
          ref={outSection}
          onClick={(e) => {
            ModalWrapperHandler(e);
          }}
        >
          <Modal>
            <PostImage width="700px" />
            <ModalContent>
              <ModalContentTop>
                <User>
                  <UserImage marginLeft="15px" src={post.profileImage} />
                  <Username>postId : {postId}</Username>
                </User>
                <More
                  onClick={() => {
                    setMoreButtonsClick(true);
                  }}
                />
              </ModalContentTop>
<<<<<<< HEAD

              <ModalContentText>
                <UserImage marginLeft="0px" src="/img/user.png" />
                <UserText>
                  <Username>{post.username}</Username>
                  <UserContent>{post.content}</UserContent>
                </UserText>
              </ModalContentText>

              <ModalContentText>
                <UserImage marginLeft="0px" src="/img/comment user image.jpg" />
                <UserText>
                  <Username>dlwlrma</Username>
                  <UserContent>아이유 사진 감사합니다 개꿀</UserContent>
                </UserText>
              </ModalContentText>

=======
              <DetailModalComment postId={postId}/>  
>>>>>>> a1487e2517fd9c4c19a8d75eeb15c1a9cde089ec
              <ModalContentBottom>
                <ButtonLayout
                  borderTop="0.5px solid rgb(0, 0, 0, 0.1)"
                  marginTop="15px"
                  width="400px"
                />
                <CommentInput inputTagWidth="280px" marginTop="0px"/>
              </ModalContentBottom>
            </ModalContent>
          </Modal>
        </ModalWrapper>
      ) : null}
    </div>
  );
};

const ModalWrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  z-index: 2;
  position: fixed;
  top: 7%;
  left: 22%;
  width: 1100px;
  display: flex;
  font-size: 14px;
`;

const ModalContent = styled.div`
  width: 400px;
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid rgb(0, 0, 0, 0.2);
  position: relative;
`;

const PostImage = styled.img.attrs({
  src: "/img/image sample.png",
})`
  width: ${(props) => props.width};
`;

const ModalContentTop = styled.div`
  height: 70px;
  border-bottom: 0.5px solid rgb(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

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
`;

const More = styled.img.attrs({
  src: "/img/more.png",
})`
  width: 23px;
  margin-right: 14px;
`;

const ModalContentText = styled.div`
  display: flex;
  padding: 15px 15px 5px 15px;
`;

const UserText = styled.div`
  padding-top: 4px;
`;

const UserContent = styled.span`
  line-height: 130%;
`;

const ModalContentBottom = styled.div`
  position: absolute;
  bottom: 0px;
`;

export default DetailModal;
