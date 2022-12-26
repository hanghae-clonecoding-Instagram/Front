//Lottie style
import Lottie from "lottie-react";
import { badpage } from "../assets/lottie";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Box>
      <Lottie animationData={badpage} />
    </Box>
  );
};

const Box = styled.div`
  width: 500px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default NotFound;
