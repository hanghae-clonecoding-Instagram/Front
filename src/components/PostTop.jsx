import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonLayout from "./ButtonsLayout";
import DetailModal from "./DetailModal";
import MoreButtonsModal from "./MoreButtonsModal";

const PostTop = () => {
  const navigate = useNavigate();
  const [moreButtonsClick, setMoreButtonsClick] = useState(false);
  const [detailBtnClick, setDetailBtnClick] = useState(false);
  const [isDisplay, setIsDisplay] = useState("inline");

  // 서버 연결 전에 테스트용으로 작성한 샘플 데이터
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

  return (
    <>
      <DetailModal
        detailBtnClick={detailBtnClick}
        setDetailBtnClick={setDetailBtnClick}
        postId={post.postId}
      />
      <MoreButtonsModal
        moreButtonsClick={moreButtonsClick}
        setMoreButtonsClick={setMoreButtonsClick}
      />

      <ContentTop>
        <User>
          <UserImage
            src={post.profileImage}
            onClick={() => {
              navigate("/mypage");
            }}
          />
          <UserName>{post.username}</UserName>
        </User>
        <More
          onClick={() => {
            setMoreButtonsClick(true);
          }}
        />
      </ContentTop>

      <PostImage src={post.image} width="470.5px" />

      <ContentMiddle>
        <ButtonLayout
          setDetailBtnClick={setDetailBtnClick}
          marginTop="0px"
          postId={post.postId}
          isLikePost={post.isLikePost}
          likePostNum={post.likePostNum}
        />
        <ContentText>
          <ContentUsername marginLeft="0px">{post.username}</ContentUsername>
          <Content>{post.content.slice(0, 20)}</Content>
          <ContentMore
            onClick={() => {
              setIsDisplay("none");
            }}
            display={isDisplay}
          >
            ... 더보기
          </ContentMore>
          <Content display={isDisplay === "none" ? "inline" : "none"}>
            {post.content.slice(20)}
          </Content>
        </ContentText>
        <CommentMore
          onClick={() => {
            console.log(detailBtnClick);
            setDetailBtnClick(true);
          }}
        >
          댓글 {post.commentNum}개 모두 보기
        </CommentMore>
      </ContentMiddle>
    </>
  );
};

const ContentTop = styled.div`
  width: 470px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;

const User = styled.div`
  height: 35px;
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
  margin: 0px 15px 0px 15px;
`;

const UserName = styled.div`
  padding-bottom: 2px;
`;

const PostImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: ${(props) => props.width};
`;

const More = styled.img.attrs({
  src: "/img/more.png",
})`
  width: 25px;
  margin-right: 14px;
`;

const ContentMiddle = styled.div`
  width: 470px;
`;

const ContentUsername = styled.span`
  margin: 0px 5px 0px ${(props) => props.marginLeft};
  font-weight: bold;
`;

const Content = styled.span`
  display: ${(props) => props.display};
  line-height: 130%;
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

export default PostTop;
