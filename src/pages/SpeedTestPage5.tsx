import React from "react";
import { StyledColumn } from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";

function SpeedTestPage5() {
  const handleClickNextButton = () => {
    window.location.assign(CustomPath.SPEED_TEST_6);
  };

  return (
    <StyledColumn>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default SpeedTestPage5;
