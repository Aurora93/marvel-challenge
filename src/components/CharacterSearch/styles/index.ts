import styled, { keyframes } from "styled-components";

const TextWrapper = styled.p`
  text-align: center;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  & svg {
    width: 50px;
    height: 50px;
    animation: ${spinAnimation} 1s linear infinite;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

export { TextWrapper, SpinnerWrapper, ButtonWrapper };
