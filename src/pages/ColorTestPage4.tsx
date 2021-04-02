import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledColumn,
  StyledEmptyDiv,
  StyledRow,
} from "../components/layouts/StyledSimpleLayout";
import customColors, { materialColors } from "../styles/colors";
import customFonts, { Warning } from "../styles/fonts";
import { BsBrightnessAltLowFill, BsBrightnessAltHigh } from "react-icons/bs";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import { PrettoSlider } from "../styles/customMaterialUi";

function ColorTestPage4() {
  type Step = 0 | 100 | 200 | 300 | 400;

  const [colorStep, setColorStep] = useState<Step>(100);

  const handleSliderChange = (_: any, newStep: any) => {
    setColorStep(newStep);
  };

  const handleClickNextButton = () => {
    window.location.assign(CustomPath.SPEED_TEST_START);
  };

  return (
    <StyledColumn crossAxisAlignment="center" mainAxisAlignment="center">
      <StyledEmptyDiv height="30px" />
      아래 바에서 글자 색을 조절하세요.
      <Warning>주의: 화면 밝기를 조절하지 마세요.</Warning>
      <Content color={materialColors.gray[colorStep]}>
        어쨌든 나는 그의 느닷없는 출현에 너무도 놀라서 눈을 휘둥그렇게 뜨고 그를
        바라보았다.
        <br />
        내가 사람 사는 고장에서 수천 마일 떨어진 곳에 있었다는 사실을 여러분은
        잊지 말아 주길 바란다. <br />
        그런데 그 어린아이는 길을 잃은 것 같지도 않아 보였고 피곤과 배고픔과
        목마름과 두려움에 시달리는 것 같아 보이지도 않았다.
        <br /> 사람 사는 고장에서 수천 마일 떨어진 사막 한가운데에서 길을 잃은
        어린아이 같은 구석이라고는 없었다. <br />
        가까스로 정신을 차리고 내가 말을 걸었다. "그런데... 왜 그러지?"
        <br />
        그러자 그는 아주 심각한 이야기나 되는 듯이 소곤소곤 다시 되풀이해
        말했다.
        <br />
        "부탁이야... 양을 한 마리 그려 줘..."
        <br />
        너무도 인상깊은 신비스러운 일을 당하게 되면 누구나 거기에 순순히 따르게
        마련이다. <br />
        사람 사는 고장에서 수천 마일 떨어진 곳에서 죽음의 위험을 마주하고 있는
        중에 참 엉뚱한 짓이라고 느껴지기는 했지만 나는 포켓에서 종이 한 장과
        만년필을 꺼냈다. <br />
        그러나 내가 공부한 것은 지리, 역사, 계산, 문법이라는 생각이 나서 그 어린
        소년에게, <br /> 나는 그림을 그릴 줄 모른다고(조금 기분이 나빠져서)
        말했다.
        <br />
        그는 대답했다. "괜찮아. 양을 한 마리 그려 줘."
      </Content>
      <StyledEmptyDiv height="8px" />
      <StyledRow width="100%">
        <BsBrightnessAltHigh size="40px" />
        <StyledEmptyDiv width="16px" />
        <PrettoSlider
          value={colorStep}
          aria-labelledby="discrete-slider"
          onChange={handleSliderChange}
          step={100}
          marks
          min={0}
          max={400}
        />
        <StyledEmptyDiv width="16px" />
        <BsBrightnessAltLowFill size="40px" />
      </StyledRow>
      <StyledEmptyDiv height="8px" />
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

const Content = styled.div<{ color: string }>`
  ${customFonts.body}
  text-align: start;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 50px 20px 10px 20px;
  color: ${(props) => props.color};
  border-radius: 4px;
  background-color: ${customColors.black};
`;

export default ColorTestPage4;
