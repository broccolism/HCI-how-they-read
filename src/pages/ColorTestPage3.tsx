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

function ColorTestPage3() {
  type Step = 0 | 100 | 200 | 300 | 400;

  const [colorStep, setColorStep] = useState<Step>(300);

  const handleSliderChange = (_: any, newStep: any) => {
    setColorStep(newStep);
  };

  const handleClickNextButton = () => {
    window.location.assign(CustomPath.BRIGHTNESSTEST_4);
  };

  return (
    <StyledColumn crossAxisAlignment="center" mainAxisAlignment="center">
      <StyledEmptyDiv height="30px" />
      아래 바에서 글자 색을 조절하세요.
      <Warning>주의: 화면 밝기를 조절하지 마세요.</Warning>
      <Content color={materialColors.gray[colorStep]}>
        그래서 여섯 해 전에 사하라 사막에서 비행기가 고장을 일으킬 때까지 나는
        마음을 털어놓고 진정어린 이야기를 할 수 있는 상대를 갖지 못한 채 홀로
        살아왔다. <br />내 비행기의 모터가 한 군데 부서져 버린 것이다. <br />
        기사도 승객도 없었으므로 나는 혼자서 어려운 수선을 시도해 보려는 채비를
        갖추었다. <br />
        그것은 나에게는 죽느냐 사느냐의 문제였다. <br />
        이렛날 동안 마실 수 있는 물밖에 남아 있지 않았다.
        <br />
        첫 날밤 나는 사람 사는 고장에서 수천 마일 떨어진 사막에서 잠이 들었다.
        <br /> 대양 한가운데에 떠 있는 뗏목 위의 표류자보다 나는 더 고립되어
        있었다. <br />
        그러니 해가 뜰 무렵, 야릇한 목소리가 나를 깨웠을 때 내가 얼마나 놀랐을지
        여러분은 상상할 수 있을 것이다. <br />그 목소리는 말했다. "양 한 마리를
        그려 줘!"
        <br />
        "뭐라고?" "양 한 마리를 그려 줘." 나는 기겁을 해서 후다닥 일어섰다.
        <br />
        눈을 막 비벼 보았다. 사방을 잘 살펴보았다. <br />
        그랬더니 정말로 이상하게 생긴 조그만 사내 아이가 나를 심각한 얼굴로
        바라보고 있는 것이었다.
        <br /> 훗날 내가 그를 그린 그림 중에서 가장 잘된 것이 여기 있다. <br />
        그러나 물론 나의 그림은 모델보다는 훨씬 덜 매력적이다. <br />
        그것은 내 잘못이 아니다. <br />
        여섯 살 적에 어른들이 화가로 출세할 수 없다고 나를 낙심시켰기 때문에
        나는 속이 보이지 않거나 보이거나 하는 보아 구렁이 이외에는 아무것도
        그리는 연습을 하지 않았으니까 말이다.
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

export default ColorTestPage3;
