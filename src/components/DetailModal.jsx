import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  cleanupDetail,
  __getPost,
  __getPosts,
} from "../Redux/modules/postSlice";
import ButtonLayout from "./ButtonsLayout";
import CommentInput from "./CommentInput";

import MoreButtonsModal from "./MoreButtonsModal";
import DetailModalCom from "./DetailModalCom";

const DetailModal = ({ detailBtnClick, setDetailBtnClick, postId }) => {
  const dispatch = useDispatch();
  const outSection = useRef();
  const [moreButtonsClick, setMoreButtonsClick] = useState(false);
  const { post } = useSelector((state) => state.post);
  // console.log(postId);
  // useEffect(() => {
  //   return () => {
  //     dispatch(cleanupDetail());
  //   };
  // }, [dispatch]);
  // console.log(post)
  useEffect(() => {
    dispatch(__getPost(postId));
  }, [dispatch]);
  console.log(post.likePostNum);


  const ModalWrapperHandler = (e) => {
    if (outSection.current === e.target) {
      setDetailBtnClick(false);
    }
    dispatch(__getPosts());
  };

  return (
    <div>
      {moreButtonsClick === true ? (
        <MoreButtonsModal
          moreButtonsClick={moreButtonsClick}
          setMoreButtonsClick={setMoreButtonsClick}
          detailBtnClick={detailBtnClick}
          setDetailBtnClick={setDetailBtnClick}
          postId={post.postId}
        />
      ) : null}
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
                <Username>{post.username}</Username>
              </User>
              <More
                onClick={() => {
                  setMoreButtonsClick(true);
                }}
              />
            </ModalContentTop>

            <ModalContentMidle>
              <DetailModalCom postId={postId} />
            </ModalContentMidle>

            <ModalContentBottom>
              <ButtonLayout
                borderTop="0.5px solid rgb(0, 0, 0, 0.1)"
                marginTop="15px"
                width="400px"
              />
              <CommentInput postId={postId} 
                inputTagWidth="280px" marginTop="0px" 
              />
            </ModalContentBottom>
          </ModalContent>
        </Modal>
      </ModalWrapper>
    </div>
  );
};

const ModalWrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  z-index: 100;
  position: fixed;
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

const PostImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
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
const ModalContentMidle = styled.div`
  height: 490px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
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
