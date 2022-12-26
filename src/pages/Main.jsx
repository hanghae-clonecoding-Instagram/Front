import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { useRef, useState } from "react";
import styled from "styled-components";
import ButtonLayout from "../components/ButtonsLayout";
import DetailModal from "../components/DetailModal";
import CommentInput from "../components/CommentInput";
import MoreButtonsModal from "../components/MoreButtonsModal";

const Main = () => {
  // const [isLike, setIsLike] = useState(false);
  const [isDisplay, setIsDisplay] = useState("inline");
  const [detailBtnClick, setDetailBtnClick] = useState(false);
  const [moreButtonsClick, setMoreButtonsClick] = useState(false);

  return (
    <Total>
      <DetailModal
        detailBtnClick={detailBtnClick}
        setDetailBtnClick={setDetailBtnClick}
        moreButtonsClick={moreButtonsClick}
        setMoreButtonsClick={setMoreButtonsClick}
      />
      <MoreButtonsModal
        moreButtonsClick={moreButtonsClick}
        setMoreButtonsClick={setMoreButtonsClick}
      />
      <Post>
        <PostTop>
          <User>
            <UserImage />
            <UserName>nickname</UserName>
          </User>
          <More
            onClick={() => {
              setMoreButtonsClick(true);
            }}
          />
        </PostTop>
        <PostImage width="470.5px" />
        <PostMiddle>
          <ButtonLayout setDetailBtnClick={setDetailBtnClick} marginTop="0px" />
          <LikeNumber>좋아요 102개</LikeNumber>
          <ContentText>
            <ContentUsername marginLeft="0px">nickname</ContentUsername>
            <Content>20자만 나오게20자만 나오게20자만</Content>
            <ContentMore
              onClick={() => {
                setIsDisplay("none");
              }}
              display={isDisplay}
            >
              ... 더보기
            </ContentMore>
            <Content display={isDisplay === "none" ? "inline" : "none"}>
              20자 이상인 글자20자 이상인 글자20자 이상인 글자20자 이상인
              글자20자 이상인 글자20자 이상인 글자20자 이상인 글자
            </Content>
          </ContentText>
          <CommentMore
            onClick={() => {
              setDetailBtnClick(true);
            }}
          >
            댓글 12개 모두 보기
          </CommentMore>
          <ContentUsername marginLeft="15px">nickname</ContentUsername>
          <Content>댓글 댓글 댓글</Content>
        </PostMiddle>
        <CommentInput inputTagWidth="355px" />
      </Post>
    </Total>
  );
};
const Total = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  font-size: 14px;
`;

const Post = styled.div`
  z-index: 0;
  width: 470px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

const PostTop = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
`;
const UserImage = styled.img.attrs({
  src: "/img/user.png",
})`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0px 15px 0px 15px;
`;

const UserName = styled.div`
  padding-bottom: 2px;
`;

const PostImage = styled.img.attrs({
  src: "/img/image sample.png",
})`
  width: ${(props) => props.width};
`;

const More = styled.img.attrs({
  src: "/img/more.png",
})`
  width: 25px;
  margin-right: 14px;
`;

const PostMiddle = styled.div``;

const LikeNumber = styled.div`
  margin: 9px 0px 12px 15px;
  font-weight: bold;
`;

const ContentUsername = styled.span`
  margin: 0px 5px 0px ${(props) => props.marginLeft};
  font-weight: bold;
`;

const Content = styled.span`
  display: ${(props) => props.display};
`;

const ContentMore = styled.span`
  display: ${(props) => props.display};
  color: #808080d5;
`;

const CommentMore = styled.div`
  margin: 13px 0px 13px 15px;
  color: #808080d5;
`;

const ContentText = styled.div`
  padding: 0px 15px 0px 15px;
`;
export default Main;
