import {
  StyledColumn,
  StyledEmptyDiv,
  StyledRow,
} from "../components/layouts/StyledSimpleLayout";
import MovingBox from "../components/MovingBox";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import customColors, { materialColors } from "../styles/colors";
import Input from "@material-ui/core/Input";
import React from "react";

function SpeedTestPage1() {
  const handleClickNextButton = () => {
    window.location.assign(CustomPath.SPEED_TEST_2);
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="20px" />
      <MovingBox
        color={materialColors.gray[300]}
        backgroundColor={customColors.black}
        time={5000}
      >
        {<div>haha</div>}
      </MovingBox>
      <StyledEmptyDiv height="20px" />
      <StyledRow crossAxisAlignment="center">
        <Input
          placeholder="무엇을 봤나요?"
          inputProps={{ "aria-label": "description" }}
        />
        <NextButton onClick={handleClickNextButton} />
      </StyledRow>
    </StyledColumn>
  );
}

export default SpeedTestPage1;
