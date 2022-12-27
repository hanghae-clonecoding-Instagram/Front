import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MypageCard from "../components/MypageCard";
import { useDispatch } from "react-redux";
import { __getMypage } from "../Redux/modules/postSlice";

const Mypage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { mypage } = useSelector((state) => state.post);

  // 호출 시 사용!!!
  // useEffect(() => {
  //   dispatch(__getMypage());
  // }, [dispatch]);
  // console.log(mypage);

  const mypage = {
    profileImage: "/img/user.png",
    username: "dlwlrma",
    postingNum: 2,
    introduction:
      "마이페이지에서 소개란!마이페이지에서 소개란!마이페이지에서 소개란!마이페이지에서 소개란!마이페이지에서 소개란!마이페이지에서 소개란!마이페이지에서 소개란!",
    postList: [
      {
        postId: 5,
        image: "/img/image sample.png",
        likePostNum: 10,
        commentNum: 3,
      },
      {
        postId: 6,
        image: "/img/image sample.png",
        likePostNum: 12,
        commentNum: 4,
      },
    ],
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
          <img src={mypage.profileImage} />
        </div>
        <div className="userInfoBox">
          <div className="infoName">
            <div> {mypage.username} </div>
            <button
              onClick={() => {
                navigate("/userEdit");
              }}
            >
              프로필편집
            </button>
          </div>
          <div className="infoCard">
            <span>게시물 </span>
            <span className="infoCardPostNum">{mypage.postingNum}</span>
            <div>{mypage.introduction}</div>
          </div>
        </div>
      </UserBox>
      <PostBox>
        {mypage.postList.map((post) => {
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
  margin: 0 auto;
`;
const UserBox = styled.div`
  height: 280px;
  padding-top: 15px;
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

export default Mypage;
