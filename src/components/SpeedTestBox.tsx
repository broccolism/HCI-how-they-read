import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type SpeedTestBox = {
  time: number;
  color: string;
  backgroundColor: string;
  children: ReactNode;
};

function SpeedTestBox({
  time,
  color,
  backgroundColor,
  children,
}: SpeedTestBox) {
  return (
    <Background backgroundColor={backgroundColor}>
      <Content color={color} time={time}>
        <ContentWrapper time={time}>{children}</ContentWrapper>
      </Content>
    </Background>
  );
}

// const move = keyframes`
//     0% {
//         transform: translate(-100vw, 0px);
//     }
//     100% {
//       transform: translate(200vw, 0px);
//     }
// `;

const hide = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const Content = styled.div<{
  color: string;
  time: number;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.color};
  animation: ${hide} ${(props) => props.time.toString() + "s"};
  // animation-fill-mode: forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const ContentWrapper = styled.div<{
  time: number;
}>`
  // animation: ${hide} ${(props) => props.time.toString() + "s"} step-end;
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

export default SpeedTestBox;
