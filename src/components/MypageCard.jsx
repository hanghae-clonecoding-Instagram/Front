import { useState } from "react";
import styled from "styled-components";
import DetailModal from "./DetailModal";

const MypageCard = ({ postId, image, likePostNum, commentNum }) => {
  const [detailBtnClick, setDetailBtnClick] = useState(false);

  return (
    <>
      {detailBtnClick === true ? (
      <DetailModal
        detailBtnClick={detailBtnClick}
        setDetailBtnClick={setDetailBtnClick}
        postId={postId}
      />
      ) : null}
      {/* <DetailModal
        detailBtnClick={detailBtnClick}
        setDetailBtnClick={setDetailBtnClick}
        postId={postId}
      /> */}
      <div
        key={postId}
        style={{ marginLeft: "2px" }}
        onClick={() => {
          setDetailBtnClick(true);
        }}
      >
        <Card>
          <Image src={image} />
          <div>
            <span>🤍 {likePostNum} </span>
            <span>🗨️ {commentNum}</span>
          </div>
        </Card>
      </div>
    </>
  );
};

const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 15px;
  cursor: pointer;
  background: black;
  position: relative;

  /* img {
    width: 100%;
    height: 100%;
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  } */

  div {
    width: 110px;
    height: 20px;
    position: absolute;
    top: 140px;
    left: 95px;
    color: white;
    display: none;
    font-size: 18px;
  }

  :hover img {
    opacity: 0.5;
  }

  :hover div {
    display: block;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
`;

export default MypageCard;
