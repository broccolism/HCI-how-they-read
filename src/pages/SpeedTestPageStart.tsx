import {
  StyledColumn,
  StyledEmptyDiv,
} from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import { Warning } from "../constants/styles/fonts";

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
      </div>
      <StyledEmptyDiv height="10px" />
      <Warning>아래 버튼을 누르면 바로 시작됩니다.</Warning>
      <NextButton onClick={handleClickNextButton} />
    </StyledColumn>
  );
}

export default SpeedTestPageStart;
