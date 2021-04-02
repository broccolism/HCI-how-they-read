import React from "react";
import { StyledColumn } from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";

function speedtestpage4() {
  const handleClickNextButton = () => {
    window.location.assign(CustomPath.SPEED_TEST_5);
  };

  return (
    <StyledColumn>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default speedtestpage4;
