import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  isEditModalHandler,
  isMoreButtonsModal,
} from "../Redux/modules/modalSlice";
import { __deletePost } from "../Redux/modules/postSlice";
import PostEdit from "./PostEdit";

const MoreButtonsModal = ({
  moreButtonsClick,
  setMoreButtonsClick,
  setDetailBtnClick,
  postId,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const outSection = useRef();
  // const [isEdit, setIsEdit] = useState(false);
  const moreButtonsModal = useSelector((state) => state.modal.moreButtonsModal);
  const isEdit = useSelector((state) => state.modal.editModal);

  console.log(postId);
  // console.log(isEdit);
  const onClickDeleteBtnHandler = () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      dispatch(isMoreButtonsModal(false));
      setMoreButtonsClick(false); // 모어버튼 모달창 끄기
      setDetailBtnClick(false); // 디테일모달창 끄기!!!
      return dispatch(__deletePost(postId));
    }
  };

  return (
    <div>
      {isEdit === true ? <PostEdit isEdit={isEdit} postId={postId} /> : null}
      {/* <PostEdit isEdit={isEdit} setIsEdit={setIsEdit} postId={postId} /> */}
      {moreButtonsClick === true ? (
        <ModalWrapper
          className="modalOutside"
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              // setMoreButtonsClick(false);
              dispatch(isMoreButtonsModal(false));
            }
          }}
        >
          <Modal>
            <ModalButton fontColor="red" fontWeight="bold">
              신고하기
            </ModalButton>
            <ModalButton
              onClick={() => {
                // dispatch(isMoreButtonsModal(false));
                // setIsEdit(true);
                console.log(isEdit);
                dispatch(isEditModalHandler(true));
                setMoreButtonsClick(false);
                // dispatch(isMoreButtonsModal(false));
                // dispatch(isHandler(true));
                // console.log(moreButtonsClick);
              }}
            >
              게시물 수정
            </ModalButton>
            <ModalButton
              onClick={() => {
                onClickDeleteBtnHandler();
              }}
            >
              게시물 삭제
            </ModalButton>
            <ModalButton
              onClick={() => {
                setMoreButtonsClick(false);
              }}
            >
              취소
            </ModalButton>
          </Modal>
        </ModalWrapper>
      ) : null}
    </div>
  );
};

const ModalWrapper = styled.div`
  z-index: 120;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  z-index: 121;
  /* position: fixed;
  top: 38%;
  left: 43.2%; */
  width: 260px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
`;

const ModalButton = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: ${(props) => props.fontWeight || "none"};
  color: ${(props) => props.fontColor || "black"};
`;

export default MoreButtonsModal;
