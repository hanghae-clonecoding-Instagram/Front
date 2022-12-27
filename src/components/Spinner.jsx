import styled from "styled-components";
// Lottie style
import Lottie from "lottie-react";
import PickLottie from '../assets/lottie/pick_lottie.json';

const Spinner = () => {
  return(
    <Box>
      <PickLottie/>
      <PickLottie/>
      <PickLottie/>
    </Box>
  )
}

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
`
export default Spinner;