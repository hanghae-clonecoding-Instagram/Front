import { useRef } from "react";
import styled from "styled-components";
import ButtonLayout from "./ButtonsLayout";
import CommentInput from "./CommentInput";

const DetailModal = ({
  detailBtnClick,
  setDetailBtnClick,
  moreButtonsClick,
  setMoreButtonsClick,
}) => {
  const outSection = useRef();
  return (
    <div>
      {detailBtnClick === true ? (
        <ModalWrapper
          className="modalOutside"
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              setDetailBtnClick(false);
            }
          }}
        >
          <Modal>
            <PostImage width="700px" />
            <ModalContent>
              <ModalContentTop>
                <User>
                  <UserImage marginLeft="15px" src="/img/user.png" />
                  <Username>dlwlrma</Username>
                </User>
                <More
                  onClick={() => {
                    setMoreButtonsClick(true);
                  }}
                />
              </ModalContentTop>

              <ModalContentText>
                <UserImage marginLeft="0px" src="/img/user.png" />
                <UserText>
                  <Username>dlwlrma</Username>
                  <UserContent>
                    아이유최고 아이유너무예뻐 아이유 이미 대박이지만 더 대박나자
                    아이유최고 아이유너무예뻐 아이유 이미 대박이지만 더 대박나자
                  </UserContent>
                </UserText>
              </ModalContentText>

              <ModalContentText>
                <UserImage marginLeft="0px" src="/img/comment user image.jpg" />
                <UserText>
                  <Username>dlwlrma</Username>
                  <UserContent>아이유 사진 감사합니다 개꿀</UserContent>
                </UserText>
              </ModalContentText>

              <ModalContentBottom>
                <ButtonLayout
                  borderTop="0.5px solid rgb(0, 0, 0, 0.1)"
                  marginTop="15px"
                  width="400px"
                />
                <LikeNumber>좋아요 102개</LikeNumber>
                <CommentInput
                  inputTagWidth="280px"
                  marginTop="0px"
                  width="400px"
                />
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

const LikeNumber = styled.div`
  margin: 9px 0px 12px 15px;
  font-weight: bold;
`;

const ModalContentBottom = styled.div`
  position: absolute;
  bottom: 0px;
`;

export default DetailModal;
