import styled from "styled-components";

const LoginPhImg = ()=>{
  return (
      <>
        <ImgBox>
          <img src ='/img/ph.png' />
          <div className="ph_img_list">
            {/* intro img 4장있음 자동으로 리스트를 바꿔줄 수는 없을까? */}
            <img src='/img/intro.png'/>
          </div>
        </ImgBox>
      </>
  )
}

const ImgBox = styled.div`
  width: 330px;
  height: 600px;
  position: relative;

  img{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
  };
  .ph_img_list{
    z-index: 5;
    width: 270px;
    height: 530px;
    position: absolute;
    top: 20px;
    left: 30px;
  }

`
export default LoginPhImg;