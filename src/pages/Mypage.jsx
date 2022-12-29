import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MypageCard from "../components/MypageCard";
import { useDispatch, useSelector } from "react-redux";
import { __getMypage, __getPost, __getPosts } from "../Redux/modules/postSlice";
import { useEffect } from "react";

const Mypage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mypageUserInfo, mypagePostList } = useSelector((state) => state.post);
<<<<<<< HEAD
  console.log("mypageUserInfo: ", mypageUserInfo);
  console.log("mypagePostList: ", mypagePostList);
  // console.log(userinfo)
=======
  // console.log('mypageUserInfo: ', mypageUserInfo)
  console.log('mypagePostList: ', mypagePostList)
>>>>>>> 009ea5cf06c639c508174abf46eeab32810da2bc

  // 호출 시 사용!!!
  useEffect(() => {
    dispatch(__getMypage());
  }, [dispatch ]);

<<<<<<< HEAD
=======

>>>>>>> 009ea5cf06c639c508174abf46eeab32810da2bc
  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      window.localStorage.removeItem("is_login");
      window.location.href = "/";
    }
  };

  return (
    <Box>
      <UserBox>
        <div
          className="profileImg"
          onClick={() => {
            navigate("/userEdit");
          }}
        >
          <img src={mypageUserInfo.profileImage} />
        </div>
        <div className="userInfoBox">
          <div className="infoName">
            <div> {mypageUserInfo.username} </div>
            <button
              onClick={() => {
                navigate("/userEdit");
              }}
            >
              프로필편집
            </button>
            <Logout src="/img/logout.png" onClick={logout} />
          </div>
          <div className="infoCard">
            <span>게시물 </span>
            <span className="infoCardPostNum">{mypageUserInfo.postingNum}</span>
            <div>{mypageUserInfo.introduction}</div>
          </div>
        </div>
      </UserBox>
      <PostBox>
        {mypagePostList?.map((post) => {
          return (
            <MypageCard
              postId={post.postId}
              image={post.image}
              likePostNum={post.likePostNum}
              commentNum={post.commentNum}
            />
          );
        })}
      </PostBox>
    </Box>
  );
};

const Box = styled.div`
  width: 1000px;
  margin: 60px auto;
`;
const UserBox = styled.div`
  height: 280px;
  box-sizing: border-box;
  margin: 0 15px;
  border-bottom: 1px solid #ced4da;
  display: flex;
  .profileImg {
    width: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 160px;
      height: 160px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .userInfoBox {
    width: 66%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid red; */
    .infoName {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      div {
        font-family: "Assistant", sans-serif;
        font-size: 45px;
        margin-right: 20px;
      }
      button {
        width: 100px;
        height: 35px;
        padding: 5px 10px;
        box-sizing: border-box;
        cursor: pointer;
        border: none;
        font-size: 14px;
        font-weight: 600;
        border-radius: 5px;
        :hover {
          background-color: #dee2e6;
        }
      }
    }
    .infoCard {
      margin: 10px 0;
      padding-right: 10px;
      div {
        /* border: 1px solid red; */
        height: 40px;
        margin-top: 10px;
        padding-top: 15px;
        line-height: 20px;
      }
      .infoCardPostNum {
        font-weight: bold;
      }
    }
  }
`;
const PostBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 40px;
`;
const Logout = styled.img`
  width: 40px;
  height: 35px;
  cursor: pointer;
  margin-left: 15px;
`;

export default Mypage;
