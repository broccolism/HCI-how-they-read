import { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  StyledColumn,
  StyledEmptyDiv,
} from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import customFonts from "../styles/fonts";

type HomeStep = 0 | 1 | 2;

function HomePage() {
  const [step, setStep] = useState<HomeStep>(0);

  const pressNextButton = () => {
    switch (step) {
      case 0:
        setStep(1);
        return;
      case 1:
        setStep(2);
        return;
      case 2:
        window.location.assign(CustomPath.BRIGHTNESSTEST_1);
        return;
    }
  };

  const renderContents = () => {
    switch (step) {
      case 0:
        return (
          <Root key={step}>
            <div>
              본 사이트는 HCI 분야 논문
              <br />
              <br />
              "Kandel E. R. and Mary W. C. (2014)&nbsp;
              <span className="italic">
                현대인의 심리 상태와 시각적 지각 능력 간 의존도 연구
              </span>
              , ACM Inroads Volume 7, Issue 4, CHI, 113-128"
              <br />
              <br />을 바탕으로 만들어졌습니다.
            </div>
          </Root>
        );
      case 1:
        return (
          <Root key={step}>
            10분 내외의 테스트를 통해 자신의 심리 상태와 그에 따른 시각적 인지
            능력을 알아볼 수 있습니다.
          </Root>
        );
      case 2:
        return (
          <Root key={step}>
            정확한 결과를 위해 테스트를 하는 동안 휴대폰의 밝기를 변경하지
            마세요.
          </Root>
        );
    }
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="48px" />
      {renderContents()}
      <StyledEmptyDiv height="48px" />
      <NextButton onClick={pressNextButton} />
    </StyledColumn>
  );
}

const fade = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

const Root = styled.div`
  ${customFonts.body}
  display: flex;
  align-items: center;
  height: 20vh;
  text-align: start;
  animation: ${fade} 1s;

  .italic {
    font-style: italic;
  }
`;

export default HomePage;
