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

function ColorTestPage1() {
  type Step = 0 | 100 | 200 | 300 | 400;

  const [colorStep, setColorStep] = useState<Step>(400);

  const handleSliderChange = (_: any, newStep: any) => {
    setColorStep(newStep);
  };

  const handleClickNextButton = () => {
    window.location.assign(CustomPath.BRIGHTNESSTEST_2);
  };

  return (
    <StyledColumn crossAxisAlignment="center" mainAxisAlignment="center">
      <StyledEmptyDiv height="30px" />
      아래 바에서 글자 색을 조절하세요.
      <Warning>주의: 화면 밝기를 조절하지 마세요.</Warning>
      <Content color={materialColors.gray[colorStep]}>
        어린이였을 때의 레옹 베르뜨에게 여섯 살 적에 나는 "체험한 이야기"라는
        제목의, 원시림에 관한 책에서 기막힌 그림 하나를 본 적이 있다. <br />{" "}
        맹수를 집어삼키고 있는 보아 구렁이 그림이었다. 위의 그림은 그것을 옮겨
        그린 것이다. 그 책에는 이렇게 씌어 있었다. <br />
        "보아 구렁이는 먹이를 씹지도 않고 통째로 집어삼킨다. 그리고는 꼼짝도
        하지 못하고 여섯 달 동안 잠을 자면서 그것을 소화시킨다."
        <br /> 나는 그래서 밀림 속에서의 모험에 대해 한참 생각해 보고 난 끝에
        색연필을 가지고 내 나름대로 내 생애 첫 번째 그림을 그려보았다.
        <br /> 나의 그림 제 1호였다. 나는 그 걸작품을 어른들에게 보여 주면서 내
        그림이 무섭지 않느냐고 물었다. <br />
        그들은 "모자가 뭐가 무섭다는 거니?"하고 대답했다. <br />내 그림은 모자를
        그린 게 아니었다. 그것은 코끼리를 소화시키고 있는 보아 구렁이었다.
        <br />
        그래서 나는 어른들이 알아볼 수 있도록 보아 구렁이의 속을 그렸다.
        <br />
        어른들은 언제나 설명을 해주어야만 한다.
        <br />
        나의 그림 제 2호는 이러했다. 어른들은 속이 보이거나 보이지 않거나 하는
        보아 구렁이의 그림들은 집어치우고 차라리 지리, 역사, 계산, 그리고 문법
        쪽에 관심을 가져보는 게 좋을 것이라고 충고해 주었다.
        <br />
        그래서 나는 여섯 살 적에 화가라는 멋진 직업을 포기해 버렸다.
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

export default ColorTestPage1;
