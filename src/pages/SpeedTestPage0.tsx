import React from "react";
import {
  StyledColumn,
  StyledEmptyDiv,
} from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";

function SpeedTestPage0() {
  const handleClickNextButton = () => {
    window.location.assign(CustomPath.SPEED_TEST_1);
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="40px" />
      <div>
        이제부터 본격적으로 테스트를 시작하겠습니다.
        <br />
        빠르게 지나가는 글자나 아이콘을 잘 보고,
        <br />
        무엇을 봤는지 알려주세요.
      </div>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default SpeedTestPage0;
