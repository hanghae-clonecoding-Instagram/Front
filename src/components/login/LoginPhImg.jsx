import styled from "styled-components";

const LoginPhImg = ()=>{
  return (
      <>
        <ImgBox>
          <img src ='/img/ph.png' />
          <div className="ph_img_list">
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