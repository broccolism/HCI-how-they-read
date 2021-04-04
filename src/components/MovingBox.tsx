import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type MovingBoxProps = {
  time: number;
  color: string;
  backgroundColor: string;
  children: ReactNode;
};

function MovingBox({ time, color, backgroundColor, children }: MovingBoxProps) {
  return (
    <Background backgroundColor={backgroundColor}>
      <Content color={color} time={time}>
        <ContentWrapper time={time}>{children}</ContentWrapper>
      </Content>
    </Background>
  );
}

const move = keyframes`
    0% {
        transform: translate(-100vw, 0px);
    }
    100% {
      transform: translate(200vw, 0px);
    }
`;

const hide = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
`;

const Content = styled.div<{
  color: string;
  time: number;
}>`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
  animation: ${move} ${(props) => props.time.toString() + "ms"} linear;
  animation-fill-mode: forwards;
`;

const ContentWrapper = styled.div<{
  time: number;
}>`
  animation: ${hide} ${(props) => props.time.toString() + "ms"} step-end;
`;

const Background = styled.div<{
  backgroundColor: string;
}>`
  z-index: 5;
  width: 100vw;
  height: 20vh;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
`;

export default MovingBox;
