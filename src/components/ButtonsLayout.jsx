import { useState } from "react";
import styled from "styled-components";

const ButtonLayout = ({ setDetailBtnClick, borderTop, marginTop, width }) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <Buttons borderTop={borderTop} marginTop={marginTop} width={width}>
      <LeftButtons>
        <Heart
          onClick={() => {
            setIsLike(!isLike);
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
`;

const Comment = styled.img.attrs({
  src: "/img/comment.png",
})`
  width: 25px;
  margin-left: 15px;
`;

const Share = styled.img.attrs({
  src: "/img/share.png",
})`
  width: 25px;
  margin-left: 15px;
`;

const Save = styled.img.attrs({
  src: "/img/save.png",
})`
  width: 21px;
  margin-right: 15px;
`;
export default ButtonLayout;
