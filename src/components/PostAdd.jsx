import styled from "styled-components";
import { __addPost, __getMypage, __getPosts } from "../Redux/modules/postSlice";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// modal store
import { isModalHandler } from "../Redux/modules/modalSlice";

const PostAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 글작성 버튼 누르면 상단에 user정보 보여야함 
  // 어떤 정보로 가져올 것인지. 일단 postuser정보로 가져오기로 
  const { mypageUserInfo } = useSelector((state) => state.post);
  console.log(mypageUserInfo)

  // 이미지 미리보기 state
  const [userImage, setUserImage] = useState(null);
  const [iconView, setIconView] = useState(true);
  const [textArea, setTextArea] = useState("");
  const [images, setImages] = useState(null);
  const userImageFile = new FormData();
  const form = new FormData();
  const { mypageUserInfo } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(__getMypage());
  }, []);
  console.log(mypageUserInfo);

  // 이미지 미리보기
  const imgPreview = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      console.log(e.target.files[0].name);
      // userImageFile.append("file", e.target.files[0]);
      setImages(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
    // 읽기 동작이 끝났을 때마다 발생
    reader.onloadend = () => {
      const resultImage = reader.result;
      setIconView(false);
      setUserImage(resultImage);
    };
  };

  const handlePostCancle = () => {
    dispatch(isModalHandler(false));
  };

  const postAddButtonHandler = () => {
    if (userImage === null) return alert("사진을 선택해주세요.");
    console.log(images);
    // userImageFile.append("file", images);

    // 잘들어가는지 체크!!!
    // for (const key of userImageFile.keys()) {
    //   console.log(key);
    // }

    // for (const value of userImageFile.values()) {
    //   console.log(value);
    // }

    form.append(
      "requestDto",
      new Blob([JSON.stringify({ content: textArea })], {
        type: "application/json",
      })
    );
    form.append("file", images, images.name);
    console.log(form);

    dispatch(__addPost(form));
    dispatch(isModalHandler(false));
  };

  const handleImgClick = () => {
    if (window.confirm("사진을 바꾸시겠습니까?")) {
      setUserImage(null);
      setIconView(true);
    }
  };

  return (
    <div style={{ backgroundColor: "white", borderRadius: "15px" }}>
      <MainBar>
        <div className="main_btn" onClick={handlePostCancle}>
          취소하기
        </div>
        <div className="main_tit">새 게시물 만들기</div>
        <div className="main_btn" onClick={postAddButtonHandler}>
          공유하기
        </div>
      </MainBar>
      <Box>
        <Picture className="picture">
          <Icon>
            {iconView ? (
              <>
                <AddImage />
                <label htmlFor="file">컴퓨터에서 선택</label>
                <input type="file" id="file" onChange={imgPreview} />
              </>
            ) : null}
          </Icon>
          <Image onClick={handleImgClick}>
            {userImage ? <img src={userImage || ""} /> : null}
          </Image>
        </Picture>
        <Text>
          <div className="user_box">
            <img src={mypageUserInfo.profileImage} />
            <p>{mypageUserInfo.username}</p>
          </div>
          <textarea
            className="text_box"
            value={textArea || ""}
            placeholder="내용을 입력해주세요"
            onChange={(e) => {
              setTextArea(e.target.value);
            }}
          />
          <div className="view">위치추가</div>
          <div className="view">접근성</div>
          <div className="view">고급설정</div>
        </Text>
      </Box>
    </div>
  );
};

const MainBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-bottom: 0.5px solid rgb(0, 0, 0, 0.1);
  .main_tit {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
  .main_btn {
    border: none;
    color: #3caefa;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    cursor: pointer;
  }
`;
const Box = styled.div`
  width: 900px;
  height: 650px;
  display: flex;
`;
const Picture = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  label {
    width: 150px;
    height: 35px;
    text-align: center;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: #3caefa;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
  /* 기본 file css x -> 적용할 수 있음 */
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-right: 0.5px solid rgb(0, 0, 0, 0.1);
  /* z-index: 10; */
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    border: 0;
    /* border: 1px solid #ced4da;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px; */
  }
`;
const Text = styled.div`
  width: 35%;
  height: 650px;
  /* padding: 10px; */
  box-sizing: border-box;
  .user_box {
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px 10px 0px 10px;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 10px;
    }
    p{
      font-weight:600;
    }
  }
  textarea {
    width: 98%;
    height: 200px;
    border: none;
    resize: none;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
    line-height: 20px;
  }
  textarea:focus {
    border-color: #495057;
    outline: none;
  }
  /* 스크롤이 보이지 않게 설정함 */
  .text_box {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      /* display: none; */
    }
  }
  .view {
    border: 1px solid gray;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #dee2e6;
    padding: 15px 15px 15px 15px;
  }
`;

const AddImage = styled.img.attrs({
  src: "/img/add image.png",
})`
  width: 100px;
  margin-bottom: 20px;
`;
export default PostAdd;
