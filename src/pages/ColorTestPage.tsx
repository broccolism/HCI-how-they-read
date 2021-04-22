import { useState } from "react";
import styled from "styled-components";
import {
  StyledColumn,
  StyledEmptyDiv,
  StyledRow,
} from "../components/layouts/StyledSimpleLayout";
import customColors, { materialColors } from "../constants/styles/colors";
import customFonts, { Warning } from "../constants/styles/fonts";
import { BsBrightnessAltLowFill, BsBrightnessAltHigh } from "react-icons/bs";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import { PrettoSlider } from "../constants/styles/customMaterialUi";
import { colors, Input } from "@material-ui/core";
import { getColorTestContent } from "../constants/testContents";
import {
  ColorPageNo,
  ColorTestResultType,
  ColorTestStep,
  colorPages,
} from "../constants/types";
import { setColorTestCookie } from "../utils/cookie";

type Props = {
  onChangePage: Function;
};

function ColorTestPage({ onChangePage }: Props) {
  const [pageNo, setPageNo] = useState<ColorPageNo>(0);
  const [colorStep, setColorStep] = useState<ColorTestStep>(700);
  const [input, setInput] = useState<string>("");

  const [history, setHistory] = useState<
    Record<ColorPageNo, ColorTestResultType>
  >({
    0: {
      color_step: 700,
      user_input: "",
    },
    1: {
      color_step: 0,
      user_input: "",
    },
    2: {
      color_step: 700,
      user_input: "",
    },
    3: {
      color_step: 0,
      user_input: "",
    },
    4: {
      color_step: -1,
      user_input: "",
    },
    5: {
      color_step: -1,
      user_input: "",
    },
    6: {
      color_step: -1,
      user_input: "",
    },
    7: {
      color_step: -1,
      user_input: "",
    },
  });

  const handleClickNextButton = () => {
    changeHistory();

    switch (pageNo) {
      case 0:
      case 2:
        setColorStep(0);
        break;
      case 1:
        setColorStep(700);
        break;
      case 7:
        goColorResultPage();
        return;
      default:
        setColorStep(-1);
        break;
    }

    setInput("");
    setPageNo((pageNo + 1) as ColorPageNo);
    onChangePage((pageNo + 1) as ColorPageNo);
    window.scrollTo(0, 0);
  };

  const goColorResultPage = () => {
    setColorTestCookie(history);
    window.location.assign(CustomPath.COLOR_TEST_RESULT);
  };

  const makeBrighter = () => {
    const newStep = colorStep === 0 ? 0 : ((colorStep - 100) as ColorTestStep);
    setColorStep(newStep);
  };

  const makeDarker = () => {
    const newStep =
      colorStep === 700 ? 700 : ((colorStep + 100) as ColorTestStep);
    setColorStep(newStep);
  };

  const changeHistory = () => {
    let newHistory = history;
    newHistory[pageNo] = {
      color_step: colorStep,
      user_input: input,
    };
    setHistory(newHistory);
  };

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <StyledColumn crossAxisAlignment="center" mainAxisAlignment="center">
      <DarkmodeSection isDark={colorStep > -1}>
        <StyledColumn
          crossAxisAlignment="center"
          mainAxisAlignment="center"
          width="100%"
        >
          <StyledEmptyDiv height="30px" />
          버튼을 눌러 글자 색을 조절하세요.
          <Warning>주의: 스마트폰 밝기를 조절하지 마세요.</Warning>
          <StyledRow width="100%">
            <Button style={{ width: "100px" }} onClick={makeBrighter}>
              밝게
            </Button>
            <StyledEmptyDiv width="16px" />
            <PrettoSlider
              value={colorStep}
              aria-labelledby="discrete-slider"
              step={100}
              marks
              min={0}
              max={700}
            />
            <StyledEmptyDiv width="24px" />
            <Button style={{ width: "100px" }} onClick={makeDarker}>
              어둡게
            </Button>
          </StyledRow>
        </StyledColumn>
      </DarkmodeSection>
      <Content
        color={
          colorStep === -1 ? customColors.black : materialColors.gray[colorStep]
        }
        isDark={colorStep > -1}
      >
        {getColorTestContent(pageNo)}
      </Content>
      <StyledEmptyDiv height="8px" />
      <Input
        placeholder="숫자만 입력하세요."
        inputProps={{ "aria-label": "description" }}
        value={input}
        onChange={handleInput}
      />
      <StyledEmptyDiv height="8px" />
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

const DarkmodeSection = styled.div<{ isDark: boolean }>`
  display: ${(props) => (props.isDark ? "auto" : "none")};
  width: 100%;
`;

const Content = styled.div<{ color: string; isDark: boolean }>`
  ${customFonts.body}
  text-align: start;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  color: ${(props) => props.color};
  border-radius: 4px;
  background-color: ${(props) =>
    props.isDark ? customColors.black : customColors.white};
  white-space: pre-wrap;
`;

const Button = styled.div`
  ${customFonts.body}
  display: flex;
  padding: 8px;
  justify-content: center;
  color: ${customColors.black};
  border-radius: 4px;
  background-color: ${customColors.grayLight};
`;

export default ColorTestPage;
