import { Input } from "@material-ui/core";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  StyledColumn,
  StyledEmptyDiv,
} from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import customColors from "../constants/styles/colors";
import customFonts from "../constants/styles/fonts";

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
        window.location.assign(CustomPath.BRIGHTNESSTEST);
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
                전자 디스플레이에서의 시신경 활성도 연구 방법
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
            <div>
              10분 내외의 간단한 테스트를 통해 자신의
              <span className="bold"> 눈의 나이 </span>를 알아볼 수 있습니다.
            </div>
          </Root>
        );
      case 2:
        return (
          <StyledColumn>
            <Root key={step}>
              <div>
                정확한 결과를 위해 휴대폰 밝기를&nbsp;
                <span className="accent">50% 이상</span>으로 맞추고, 테스트를
                하는 동안&nbsp;
                <span className="accent">밝기를 변경하지 마세요.</span>
              </div>
            </Root>
            <div>밝기를 몇 %로 지정했나요?</div>
            <Input
              placeholder="숫자만 입력하세요."
              inputProps={{ "aria-label": "description" }}
            />
          </StyledColumn>
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

  .bold {
    font-weight: 700;
  }

  .accent {
    font-weight: 700;
    color: ${customColors.red};
  }
`;

export default HomePage;
