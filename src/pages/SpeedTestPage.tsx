import {
  StyledColumn,
  StyledEmptyDiv,
  StyledRow,
} from "../components/layouts/StyledSimpleLayout";
import MovingBox from "../components/MovingBox";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import customColors, { materialColors } from "../constants/styles/colors";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import { SpeedPageNo } from "../constants/types";
import { getSpeedTestContent } from "../constants/testContents";
import { setSpeedTestCookie } from "../utils/cookie";

function SpeedTestPage0() {
  const [pageNo, setPageNo] = useState<SpeedPageNo>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [history, setHistory] = useState<Record<SpeedPageNo, string>>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });

  const handleClickNextButton = () => {
    changeHistory();

    switch (pageNo) {
      case 7:
        goQuestionPage();
        return;
      default:
        changePageNo();
        return;
    }
  };

  const goQuestionPage = () => {
    setSpeedTestCookie(history);
    window.location.assign(CustomPath.QUESTION);
  };

  const changePageNo = () => {
    setUserInput("");
    setPageNo((pageNo + 1) as SpeedPageNo);
  };

  const changeHistory = () => {
    let newHistory = history;
    newHistory[pageNo] = userInput;
    setHistory(newHistory);
  };

  const handleInput = (e: any) => {
    setUserInput(e.target.value);
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="20px" />
      <MovingBox
        key={pageNo}
        color={pageNo > 3 ? customColors.black : materialColors.gray[0]}
        backgroundColor={pageNo > 3 ? customColors.white : customColors.black}
        time={3000}
      >
        {getSpeedTestContent(pageNo)}
      </MovingBox>
      <StyledEmptyDiv height="20px" />
      <StyledRow crossAxisAlignment="center">
        <Input
          placeholder="띄어쓰기도 정확히!"
          inputProps={{ "aria-label": "description" }}
          value={userInput}
          onChange={handleInput}
        />
        <NextButton onClick={handleClickNextButton} />
      </StyledRow>
    </StyledColumn>
  );
}

export default SpeedTestPage0;
