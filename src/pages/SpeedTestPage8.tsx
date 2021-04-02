import React from "react";
import { StyledColumn } from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";

function SpeedTestPage8() {
  const handleClickNextButton = () => {
    window.location.assign(CustomPath.RESULT);
  };

  return (
    <StyledColumn>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default SpeedTestPage8;
