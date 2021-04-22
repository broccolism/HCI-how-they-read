import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import React, { useState } from "react";
import {
  StyledColumn,
  StyledEmptyDiv,
} from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import { setColorTestFeelingCookie } from "../utils/cookie";

function ColorTestQuestionPage() {
  const [userInput, setUserInput] = useState<string>("");

  const goSpeedTestPage = () => {
    if (userInput === "") {
      window.alert("둘 중 한가지를 선택해주세요.");
    } else {
      setColorTestFeelingCookie(userInput);
      window.location.assign(CustomPath.SPEED_TEST_START);
    }
  };

  const onChangeAnswer = (e: any) => {
    const value: string = e.target.value;
    setUserInput(value);
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="40px" />
      <div> 어떤 배경색에서 눈이 더 불편했나요?</div>
      <StyledEmptyDiv height="10px" />
      <RadioGroup
        row
        aria-label="position"
        defaultValue=""
        onChange={onChangeAnswer}
      >
        <FormControlLabel
          value="검은 배경"
          control={<Radio color="primary" />}
          label="검은 배경"
          labelPlacement="end"
        />
        <FormControlLabel
          value="흰 배경"
          control={<Radio color="primary" />}
          label="흰 배경"
          labelPlacement="end"
        />
      </RadioGroup>
      <StyledEmptyDiv height="20px" />
      <NextButton onClick={goSpeedTestPage} />
    </StyledColumn>
  );
}

export default ColorTestQuestionPage;
