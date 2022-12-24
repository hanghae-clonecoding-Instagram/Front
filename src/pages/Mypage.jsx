import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MypageCard from "../components/mypage/MypageCard";


const Mypage = ()=>{
  const navigate = useNavigate()

  return (
    <Box>
      <UserBox>
        <div className="profileImg"
          onClick={()=>{navigate('/userEdit')}}
        >
          <img src='/img/user.jpg'/>
        </div>
        <div className="userInfoBox">
          <div className="infoName">
            <div> instagram-clone </div>
            <button onClick={()=>{navigate('/userEdit')}}>
              프로필편집
            </button>
          </div>
          <div className="infoCard"> 
            <p>게시물 10</p>
            <div>항해99 클론코딩 주차, instagram clone coding입니다.<br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis vero quas exercitationem quae obcaecati itaque, 
            </div>
          </div>
        </div>
      </UserBox>
      <PostBox>
        <MypageCard/>
        <MypageCard/>
        <MypageCard/>
        <MypageCard/>
        <MypageCard/>
        <MypageCard/>
        <MypageCard/>
        <MypageCard/>
      </PostBox>
    </Box>
  )
}

const Box = styled.div`
  width: 1000px;
  margin: 0 auto;
`
const UserBox = styled.div`
  height: 280px;
  padding-top: 15px ;
  box-sizing: border-box;
  margin: 0 15px;
  border-bottom: 1px solid #ced4da;
  display: flex;
  .profileImg{
    width: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
      width:180px;
      height:180px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .userInfoBox{
    width: 66%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid red; */
    .infoName{
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      div{
        font-size : 50px;
        margin-right: 20px;
      }
      button{
        padding: 5px 10px;
        box-sizing: border-box;
        cursor: pointer;
        border: none;
        font-weight: 600;
        border-radius: 5px;
        :hover{
          background-color: #dee2e6;
          
        }
      }
    }
    .infoCard{
      margin: 10px 0; 
      div{
        /* border: 1px solid red; */
        height: 70px;
        padding-top: 15px;
        line-height: 20px;
      }
    }
  }
`
const PostBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
`


export default Mypage;