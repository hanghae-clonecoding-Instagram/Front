import { useState } from "react";
import styled from "styled-components";
import { FcPicture } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../../Redux/modules/postSlice";

const PostAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 이미지 미리보기 state
  const [userImage, setUserImage] = useState(null);
  const [iconView, setIconView] = useState(true);
  const [textArea, setTextArea] = useState("");
  const userImageFile = new FormData();

  // 이미지 미리보기
  const imgPreview = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      userImageFile.append("file", e.target.files[0]);

      console.log(userImageFile);

      // 여기서 하는 것은 또 잘된다...뭘까...
      // for (const key of userImageFile.keys()) {
      //   console.log(key);
      // }

      // for (const value of userImageFile.values()) {
      //   console.log(value);
      // }

      reader.readAsDataURL(e.target.files[0]);
    }
    // 읽기 동작이 끝났을 때마다 발생
    reader.onloadend = () => {
      const resultImage = reader.result;
      setIconView(false);
      setUserImage(resultImage);
    };
  };

  const postAddButtonHandler = () => {
    if (userImage === null) return alert("사진을 선택해주세요.");
    console.log(userImageFile);

    // 잘들어가는지 체크하고 싶은데 확인이 안된다...
    // for (const key of userImageFile.keys()) {
    //   console.log(key);
    // }

    // for (const value of userImageFile.values()) {
    //   console.log(value);
    // }
    // 이미지를 어떻게 보낼 것인가

    const newPost = {
      image: userImageFile,
      content: textArea,
    };
    console.log(newPost);

    dispatch(__addPost(newPost));
    // navigate("/");
  };

  return (
    <div style={{ backgroundColor: "white", borderRadius: "15px" }}>
      <MainBar>
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
                {/* 아이콘 다시 찾아보기 */}
                <AddImage />
                {/* <FcPicture style={{ fontSize: "100px" }} /> */}
                <label htmlFor="file">컴퓨터에서 선택</label>
                <input type="file" id="file" onChange={imgPreview} />
              </>
            ) : null}
          </Icon>
          <Image>
            {userImage ? (
              <img
                src={userImage || ""}
                onClick={() => {
                  if (window.confirm("업로드를 취소하시겠습니까?")) {
                    navigate("/");
                  } else {
                    setUserImage(null);
                    setIconView(true);
                  }
                }}
              />
            ) : null}
          </Image>
        </Picture>
        <Text>
          <div className="user_box">
            <img src="/img/test.jpg" />
            <p>username</p>
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
  height: 35px;
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
      border-radius: 50%;
      width: 45px;
      height: 40px;
      margin-right: 10px;
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
