import { useState } from "react";
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
import { Input } from "@material-ui/core";
import { getColorTestContent } from "../constants/testContents";
import { ColorPageNo } from "../constants/types";

type Step = 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700;
type Props = {
  onChangePage: Function;
};

function ColorTestPage({ onChangePage }: Props) {
  const [pageNo, setPageNo] = useState<ColorPageNo>(0);
  const [colorStep, setColorStep] = useState<Step>(700);

  const handleClickNextButton = () => {
    changeHistory();

    switch (pageNo) {
      case 0:
        setColorStep(0);
        break;
      case 1:
        setColorStep(700);
        break;
      case 2:
        setColorStep(0);
        break;
      case 3:
        window.location.assign(CustomPath.SPEED_TEST_START);
        return;
    }

    setPageNo((pageNo + 1) as ColorPageNo);
    onChangePage((pageNo + 1) as ColorPageNo);
  };

  const makeBrighter = () => {
    const newStep = colorStep === 0 ? 0 : ((colorStep - 100) as Step);
    setColorStep(newStep);
  };

  const makeDarker = () => {
    const newStep = colorStep === 700 ? 700 : ((colorStep + 100) as Step);
    setColorStep(newStep);
  };

  const [history, setHistory] = useState<Record<ColorPageNo, Step>>({
    0: 700,
    1: 0,
    2: 700,
    3: 0,
  });

  const changeHistory = () => {
    let newHistory = history;
    newHistory[pageNo] = colorStep;
    setHistory(newHistory);
  };

  return (
    <StyledColumn crossAxisAlignment="center" mainAxisAlignment="center">
      <StyledEmptyDiv height="30px" />
      아이콘을 눌러 글자 색을 조절하세요.
      <Warning>주의: 스마트폰 밝기를 조절하지 마세요.</Warning>
      <StyledRow width="100%">
        <BsBrightnessAltHigh size="40px" onClick={makeBrighter} />
        <StyledEmptyDiv width="16px" />
        <PrettoSlider
          value={colorStep}
          aria-labelledby="discrete-slider"
          step={100}
          marks
          min={0}
          max={700}
        />
        <StyledEmptyDiv width="16px" />
        <BsBrightnessAltLowFill size="40px" onClick={makeDarker} />
      </StyledRow>
      <Content color={materialColors.gray[colorStep]}>
        {getColorTestContent(pageNo)}
      </Content>
      <StyledEmptyDiv height="8px" />
      <Input
        placeholder="숫자만 입력하세요."
        inputProps={{ "aria-label": "description" }}
      />
      <StyledEmptyDiv height="8px" />
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

const Content = styled.div<{ color: string }>`
  ${customFonts.body}
  text-align: start;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  color: ${(props) => props.color};
  border-radius: 4px;
  background-color: ${customColors.black};
`;

export default ColorTestPage;
