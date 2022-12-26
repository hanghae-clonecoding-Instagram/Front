
import styled from "styled-components";

const MypageCard = ()=>{

  return (
    <>
    <div style={{marginLeft:'2px'}}>
      <Card>
        <img src='https://hips.hearstapps.com/hmg-prod/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=1200:*'/>
      </Card>
    </div>
    </>
  )
}

const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 15px;
  cursor: pointer;
  background: black;
  img{
    width: 100%;
    height: 100%;
  	opacity: 1;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}
  :hover img {
    opacity: .5;
  }
`

export default MypageCard;