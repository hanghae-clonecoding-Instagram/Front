import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const MoreButtonsModal = ({ moreButtonsClick, setMoreButtonsClick }) => {
  const outSection = useRef();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {/* {isEdit? 
        <ModalBox isEdit={isEdit} setIsEdit={setIsEdit}>
          <PostAdd />
        </ModalBox> 
      : null } */}

      {moreButtonsClick === true ? (
        <ModalWrapper
          className="modalOutside"
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              setMoreButtonsClick(false);
            }
          }}
        >
          <Modal>
            <ModalButton fontColor="red" fontWeight="bold">
              신고하기
            </ModalButton>
            <ModalButton
              onClick={() => {
                navigate("/postEdit");
              }}
            >
              게시물 수정
            </ModalButton>
            <ModalButton>게시물 삭제</ModalButton>
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
  z-index: 3;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  z-index: 4;
  position: fixed;
  top: 38%;
  left: 43.2%;
  width: 260px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  font-size: 14px;
  display: flex;
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
