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

function ColorTestPage2() {
  type Step = 0 | 100 | 200 | 300 | 400;

  const [colorStep, setColorStep] = useState<Step>(0);

  const handleSliderChange = (_: any, newStep: any) => {
    setColorStep(newStep);
  };

  const handleClickNextButton = () => {
    window.location.assign(CustomPath.BRIGHTNESSTEST_3);
  };

  return (
    <StyledColumn crossAxisAlignment="center" mainAxisAlignment="center">
      <StyledEmptyDiv height="30px" />
      아래 바에서 글자 색을 조절하세요.
      <Warning>주의: 화면 밝기를 조절하지 마세요.</Warning>
      <Content color={materialColors.gray[colorStep]}>
        내 그림 제 1호와 제 2호가 성공을 거두지 못한 데 낙심해 버렸던 것이다.
        <br />
        어른들은 언제나 스스로는 아무것도 이해하지 못한다. <br />
        자꾸자꾸 설명을 해주어야 하니 맥빠지는 노릇이 아닐 수 없다.
        <br />
        그래서 다른 직업을 선택하지 않을 수 없게 된 나는 비행기 조종하는 법을
        배웠다. <br />
        세계의 여기저기 거의 안가본 데 없이 나는 날아다녔다.
        <br />
        그러니 지리는 정말로 많은 도움을 준 셈이었다. <br />
        한번 슬쩍 보고도 중국과 애리조나를 나는 구별할 수 있었던 것이다. <br />
        그것은 밤에 길을 잃었을 때 아주 유용한 일이다.
        <br />
        나는 그리하여 일생 동안 수없이 많은 점잖은 사람들과 수많은 접촉을
        가져왔다. 어른들 틈에서 많이 살아온 것이다. <br />
        나는 가까이서 그들을 볼 수 있었다.
        <br /> 그렇다고 해서 그들에 대한 내 생각이 나아진 건 없었다.
        <br />
        조금 총명해 보이는 사람을 만날 때면 나는 늘 간직해 오고 있던 예의 나의
        그림 제 1호를 가지고 그 사람을 시험해 보고는 했다.
        <br />
        그 사람이 정말로 뭘 이해할 줄 아는 사람인가 알고 싶었던 것이다.
        <br />
        그러나 으레 그 사람은 "모자군"하고 대답하는 것이었다.
        <br /> 그러면 나는 보아 구렁이도 원시림도 별들도 그에게 이야기하지
        않았다.
        <br /> 그가 이해할 수 있는 이야기를 했다. <br />
        브리지니 골프니 정치니 넥타이니 하는 것들에 대해 이야기하는 것이다.{" "}
        <br />
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

export default ColorTestPage2;
