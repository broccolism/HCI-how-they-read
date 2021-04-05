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
        사라지는 글자를 잘 보고,
        <br />
        무엇을 봤는지 알려주세요.
        <br />
        아래 버튼을 누르면 바로 시작됩니다.
      </div>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default SpeedTestPageStart;
