import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getPost, __postLike } from "../Redux/modules/postSlice";

const ButtonLayout = ({
  setDetailBtnClick,
  borderTop,
  marginTop,
  width,
  postId,
  likePost,
  likePostNum,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setLikeNum(likePostNum);
    setIsLike(likePost);
  }, [likePostNum]);

  // const { post } = useSelector((state) => state.post);
  const [isLike, setIsLike] = useState(likePost);
  const [likeNum, setLikeNum] = useState(likePostNum);
  // console.log(likePost);
  // console.log(likePostNum);

  console.log(postId);

  // true가 누른 것!!!
  const HeartButtonHandler = () => {
    if (isLike === true) {
      setLikeNum(likeNum - 1);
    } else {
      setLikeNum(likeNum + 1);
    }
    setIsLike(!isLike);
    console.log(postId);
    dispatch(__postLike(postId));
  };

  return (
    <>
      <Buttons borderTop={borderTop} marginTop={marginTop} width={width}>
        <LeftButtons>
          <Heart
            onClick={() => {
              HeartButtonHandler();
            }}
            heartUrl={isLike === true ? "/img/red heart.png" : "/img/heart.png"}
          />
          <Comment
            onClick={() => {
              setDetailBtnClick(true);
            }}
          />
          <Share />
        </LeftButtons>
        <Save />
      </Buttons>
      <LikeNumber>좋아요 {likeNum}개</LikeNumber>
    </>
  );
};

const Buttons = styled.div`
  height: 45px;
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: ${(props) => props.borderTop};
  margin-top: ${(props) => props.marginTop};
`;

const LeftButtons = styled.div`
  display: flex;
  align-items: center;
`;

const Heart = styled.img.attrs((props) => ({
  src: props.heartUrl,
}))`
  width: 25px;
  margin-left: 15px;
  cursor: pointer;
`;

const Comment = styled.img.attrs({
  src: "/img/comment.png",
})`
  width: 25px;
  margin-left: 15px;
  cursor: pointer;
`;

const Share = styled.img.attrs({
  src: "/img/share.png",
})`
  width: 25px;
  margin-left: 15px;
  cursor: pointer;
`;

const Save = styled.img.attrs({
  src: "/img/save.png",
})`
  width: 21px;
  margin-right: 15px;
  cursor: pointer;
`;

const LikeNumber = styled.div`
  margin: 9px 0px 12px 15px;
  font-weight: bold;
`;
export default ButtonLayout;
