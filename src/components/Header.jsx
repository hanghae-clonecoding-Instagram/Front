import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const locationNow = useLocation();
  const navigate = useNavigate();
  if (locationNow.pathname === "/login") return null;
  return (
    <Bar>
      <Buttons>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        />
        <div>
          <Home
            onClick={() => {
              navigate("/");
            }}
          />
          <Plus
            onClick={() => {
              navigate("/postPage");
            }}
          />
          <User
            onClick={() => {
              navigate("/mypage");
            }}
          />
        </div>
      </Buttons>
    </Bar>
  );
};

const Bar = styled.div`
  background-color: white;
  z-index: 0;
  height: 60px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Buttons = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img.attrs({
  src: "/img/logo.png",
})`
  width: 120px;
`;

const Home = styled.img.attrs({
  src: "/img/home.png",
})`
  width: 25px;
  margin-right: 20px;
`;

const Plus = styled.img.attrs({
  src: "/img/plus.png",
})`
  width: 25px;
  margin-right: 21px;
`;

const User = styled.img.attrs({
  src: "/img/user.png",
})`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 50%;
`;

export default Header;
