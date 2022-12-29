import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ButtonLayout from "../components/ButtonsLayout";
import DetailModal from "../components/DetailModal";
import CommentInput from "../components/CommentInput";
import MoreButtonsModal from "../components/MoreButtonsModal";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../Redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import PostTop from "../components/PostTop";
import PostBottom from "../components/PostBottom";
import { __getComment } from "../Redux/modules/commentSlice";

const Main = (post) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.post);
  console.log(posts);

  // 호출 시 사용!!!
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <Total>
      {posts.map((post) => {
        return (
          <Post key={`main-post-${post.postId}`}>
            <PostTop post={post} />
            <PostBottom inputTagWidth="355px" post={post} />
          </Post>
        );
      })}
    </Total>
  );
};
const Total = styled.div`
  z-index: 0;
  position: absolute;
  top: 80px;
  left: 36%;
  height: 100vh;
  align-items: center;
  font-size: 14px;
`;

const Post = styled.div`
  width: 470px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
  margin-bottom: 15px;
`;

export default Main;
