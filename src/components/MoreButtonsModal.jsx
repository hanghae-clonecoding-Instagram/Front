import { useRef } from "react";
import styled from "styled-components";

const MoreButtonsModal = ({ moreButtonsClick, setMoreButtonsClick }) => {
  const outSection = useRef();
  return (
    <div>
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
          <Modal></Modal>
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
  top: 35%;
  left: 45%;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  font-size: 14px;
`;

export default MoreButtonsModal;
