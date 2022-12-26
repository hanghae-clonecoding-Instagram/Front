import { useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import styled from "styled-components";
import { FcPicture } from "react-icons/fc";

const PostEdit  = ()=>{
  const navigate = useNavigate()

  // 이미지 미리보기 state
  const [userImage, setUserImage] = useState("");
  const [iconView, setIconView] = useState(true);
  
  // 이미지 미리보기 
  const imgPreview = (e)=> {
    let reader = new FileReader();
    if (e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () =>{
      const resultImage = reader.result;
      setIconView(false)
      setUserImage(resultImage)
    };
  }

  const [textArea, setTextArea] = useState('')
  
  const handlePostCancle = () => [
    navigate(-1)
  ]
  
  const handlePostEdit = () => {
    // 이미지를 어떻게 보낼 것인가
    console.log(userImage)
    console.log(textArea)
    // 페이지이동
    navigate(-1)
  }

return (
  <Contain>
    <div style={{backgroundColor:'white', borderRadius:'15px'}}>
      <MainBar>
        <div className="main_btn" onClick={handlePostCancle}>취소</div>
        <div className="main_tit">게시물 수정하기</div>
        <div className="main_btn" onClick={handlePostEdit}>완료</div>
      </MainBar>
      <Box>
        <Picture className="picture">
          <Icon>
            {iconView?
            <>
              <FcPicture style={{ fontSize:'100px'}}/>
              <label htmlFor="file">컴퓨터에서 선택</label>
              <input 
                type='file' id='file'
                onChange={imgPreview}
              />
            </>
            :
            null
            }
          </Icon>
          <Image>
            <img src={userImage ||""} 
              onClick={()=>{
                if(window.confirm('사진을 삭제하시겠습니까?')){
                  setIconView(true)                 
                  setUserImage(null)
                }else{
                  setIconView(false)
                }
              }}
            />
          </Image> 
        </Picture>
        <Text>
          <div className="user_box">
            <img src='/img/test.jpg'/>
            <p>username입니다</p>
          </div>
          <textarea 
            className="text_box"
            defaultValue={textArea || "defaultValue 넣으면 이전text값 들어올거에요"}
            onChange={(e)=>{setTextArea(e.target.value)}}
          />
          <div className="view">위치추가 - view</div>
          <div className="view">접근성 - view</div>
          <div className="view">고급설정 - view</div>
        </Text>
      </Box>
    </div>
  </Contain>
  )
}


const Contain = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f3f5;
`
const MainBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  .main_tit{
    width: 100%;
    text-align: center;
  }
  .main_btn{
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
`
const Box = styled.div`
  width: 900px;
  height: 650px;
  display: flex;
`
const Picture = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  label{ 
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
    clip:rect(0,0,0,0);
    border: 0;
  }
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border: 0;
    /* z-index: 10; */
    img{
      width: 100%;
      height: 100%;
      background-size : cover;
      border: 0;
      /* border: 1px solid #ced4da;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px; */
  }
`
const Text = styled.div`
  width: 35%;
  height: 650px;
  padding: 10px;
  box-sizing: border-box;
  .user_box{
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
    img{
      border-radius: 50%;
      width: 45px;
      height: 40px;
      margin-right: 10px;
    }
  }
  textarea{
    width: 98%;
    height: 200px;
    border: none;
    resize: none;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 20px;  
  }
  textarea:focus{
    border-color: #495057;
    outline: none;
  }
  /* 스크롤이 보이지 않게 설정함 */
  .text_box{
    overflow-y: scroll;
    &::-webkit-scrollbar {
    /* display: none; */
    }
  }
  .view{
    border: 1px solid gray;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #dee2e6;
  }
  
`
export default PostEdit;   