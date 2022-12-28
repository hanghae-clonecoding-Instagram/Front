import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __editMypage, __getMypage } from "../Redux/modules/postSlice";

const UserEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 유저 수정정보
  const [username, serUsername] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState(null);
  const { mypageUserInfo } = useSelector((state) => state.post);
  const form = new FormData();

  // 이미지 미리보기 state
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    dispatch(__getMypage());
  }, []);
  console.log(mypageUserInfo);
  // 이미지 미리보기
  const imgPreview = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setUserImage(resultImage);
    };
  };
  const handleUserEdit = () => {
    if (image === null) return alert("사진을 선택해주세요.");
    form.append(
      "requestDto",
      new Blob([JSON.stringify({ username: username, introduction: intro })], {
        type: "application/json",
      })
    );
    form.append("file", image, image.name);

    dispatch(__editMypage(form));
    // navigate("/mypage");
  };

  return (
    <div style={{ display: "flex", alignAtems: "center", height: "900px" }}>
      <Box>
        <BasicProfile>
          {/* <img src='/img/user.jpg' /> */}
          <img src={userImage || mypageUserInfo.profileImage} />
          <div>
            <p>{mypageUserInfo.username}</p>
            <label htmlFor="file">프로필 사진 바꾸기</label>
            <input type="file" id="file" onChange={imgPreview} />
          </div>
        </BasicProfile>

        <FormBox>
          <div className="userEdit">
            <p>username </p>
            <input
              type="text"
              name="username"
              value={username || ""}
              placeholder="이름을 입력해주세요"
              onChange={(e) => {
                serUsername(e.target.value);
              }}
            />
          </div>
          <div className="userEdit">
            <p>소개</p>
            <textarea
              onChange={(e) => {
                setIntro(e.target.value);
              }}
            />
          </div>
          <div className="btnBox">
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </button>
            <button onClick={handleUserEdit}>내 정보 변경</button>
          </div>
        </FormBox>
      </Box>
    </div>
  );
};
const Box = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
  background-color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const BasicProfile = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    border: 0;
    background-size: cover;
    margin-right: 15px;
  }
  p {
    font-family: "Assistant", sans-serif;
    font-size: 35px;
    margin-bottom: 10px;
  }
  label {
    color: #3caefa;
    font-size: 16px;
    font-weight: 600;
    display: block;
    text-align: center;
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
const FormBox = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  .userEdit {
    width: 100%;
    margin-bottom: 20px;
    p {
      padding-right: 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-size: 20px;
    }
    input {
      width: 100%;
      height: 40px;
      padding-left: 15px;
      box-sizing: border-box;
    }
    textarea {
      width: 100%;
      height: 80px;
      resize: none;
      padding: 15px;
      box-sizing: border-box;
    }
  }
  button {
    background-color: #77c6fa;
    color: white;
    font-weight: 600;
    padding: 5px 15px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    :hover {
      outline: none;
      background-color: #3caefa;
    }
  }
`;
export default UserEdit;
