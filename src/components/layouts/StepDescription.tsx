import styled from "styled-components";
import CustomPath from "../../constants/path";
import customFonts from "../../styles/fonts";
import { StyledColumn, StyledEmptyDiv } from "./StyledSimpleLayout";

function StepDescription() {
  const curUrlPath = window.location.pathname as CustomPath;

  const renderIcon = () => {
    switch (curUrlPath) {
      case CustomPath.BRIGHTNESSTEST_1:
      case CustomPath.BRIGHTNESSTEST_2:
      case CustomPath.BRIGHTNESSTEST_3:
      case CustomPath.BRIGHTNESSTEST_4:
        return <Emoji size="40px">🌈</Emoji>;
      case CustomPath.SPEED_TEST_START:
      case CustomPath.SPEED_TEST_1:
      case CustomPath.SPEED_TEST_2:
      case CustomPath.SPEED_TEST_3:
      case CustomPath.SPEED_TEST_4:
      case CustomPath.SPEED_TEST_5:
      case CustomPath.SPEED_TEST_6:
      case CustomPath.SPEED_TEST_7:
      case CustomPath.SPEED_TEST_8:
        return <Emoji size="40px">🙈</Emoji>;
      case CustomPath.QUESTION:
        return <Emoji size="40px">🧐</Emoji>;
      case CustomPath.RESULT:
        return <Emoji size="40px">💡</Emoji>;
      case CustomPath.HOME:
        return <Emoji size="40px">👀</Emoji>;
    }
  };

  const getTitle = () => {
    switch (curUrlPath) {
      case CustomPath.BRIGHTNESSTEST_1:
      case CustomPath.BRIGHTNESSTEST_2:
      case CustomPath.BRIGHTNESSTEST_3:
      case CustomPath.BRIGHTNESSTEST_4:
        return "보기 편한 상태로 맞춰주세요.";
      case CustomPath.SPEED_TEST_START:
      case CustomPath.SPEED_TEST_1:
      case CustomPath.SPEED_TEST_2:
      case CustomPath.SPEED_TEST_3:
      case CustomPath.SPEED_TEST_4:
      case CustomPath.SPEED_TEST_5:
      case CustomPath.SPEED_TEST_6:
      case CustomPath.SPEED_TEST_7:
      case CustomPath.SPEED_TEST_8:
        return "얼마나 정확히 볼 수 있나요?";
      case CustomPath.QUESTION:
        return "잉";
      case CustomPath.RESULT:
        return "잉";
      case CustomPath.HOME:
        return "얼마나 잘 볼 수 있나요?";
    }
  };

  return (
    <StyledColumn crossAxisAlignment="center">
      <StyledEmptyDiv height="48px" />
      {renderIcon()}
      <StyledEmptyDiv height="16px" />
      <Head>{getTitle()}</Head>
    </StyledColumn>
  );
}

export default StepDescription;

const Emoji = styled.div<{ size: string }>`
  font-size: ${(props) => props.size};
`;

const Head = styled.div`
  ${customFonts.head}
`;
