import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { useRef, useState } from "react";
import styled from "styled-components";
import ButtonLayout from "../components/ButtonsLayout";
import DetailModal from "../components/DetailModal";
import CommentInput from "../components/CommentInput";
import MoreButtonsModal from "../components/MoreButtonsModal";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../Redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import PostTop from "../components/PostTop";

const Main = () => {
  // const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isDisplay, setIsDisplay] = useState("inline");
  // const [detailBtnClick, setDetailBtnClick] = useState(false);
  // const [postNum, setPostNum] = useState(0);
  // const [moreButtonsClick, setMoreButtonsClick] = useState(false);
  const { posts } = useSelector((state) => state.post);

  // 호출 시 사용!!!
  // useEffect(() => {
  //   dispatch(__getPosts());
  // }, [dispatch]);
  // console.log(posts);

  return (
    <Total>
      {/* 서버연결 전에 해본 샘플입니다! */}
      <Post>
        <PostTop />
      </Post>

      {posts.map((post) => {
        return (
          <>
            <Post key={post.postId}>
              <PostTop />
              <ContentUsername marginLeft="15px">nickname</ContentUsername>
              <Content>댓글 댓글 댓글</Content>
              {/* </PostMiddle> */}
              <CommentInput inputTagWidth="355px" />
            </Post>
          </>
        );
      })}
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

const ContentUsername = styled.span`
  margin: 0px 5px 0px ${(props) => props.marginLeft};
  font-weight: bold;
`;

const Content = styled.span`
  display: ${(props) => props.display};
`;

export default Main;
