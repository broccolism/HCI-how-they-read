import React from "react";
import { StyledColumn } from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";

function SpeedTestPage7() {
  const handleClickNextButton = () => {
    window.location.assign(CustomPath.SPEED_TEST_8);
  };

  return (
    <StyledColumn>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default SpeedTestPage7;
