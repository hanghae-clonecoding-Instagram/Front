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
  width: 800px;
  height: 100%;
  margin: 50px auto;
`;

export default NotFound;
