import React from "react";
import {
  StyledColumn,
  StyledEmptyDiv,
} from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";

function SpeedTestPageStart() {
  const handleClickNextButton = () => {
    window.location.assign(CustomPath.SPEED_TEST);
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="40px" />
      <div>
        빠르게 지나가는 글자나 아이콘을 잘 보고,
        <br />
        무엇을 봤는지 알려주세요.
      </div>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default SpeedTestPageStart;
