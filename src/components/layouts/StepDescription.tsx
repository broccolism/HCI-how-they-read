import styled from "styled-components";
import CustomPath from "../../constants/path";
import { getColorTestKeyword } from "../../constants/testContents";
import { ColorPageNo } from "../../constants/types";
import customFonts from "../../constants/styles/fonts";
import { StyledColumn, StyledEmptyDiv } from "./StyledSimpleLayout";

type Props = {
  colorPageNo: ColorPageNo;
};

function StepDescription({ colorPageNo }: Props) {
  const curUrlPath = window.location.pathname.split("#")[0] as CustomPath;
  const renderIcon = () => {
    switch (curUrlPath) {
      case CustomPath.COLOR_TEST:
        return <Emoji size="40px">🌈</Emoji>;
      case CustomPath.SPEED_TEST_START:
      case CustomPath.SPEED_TEST:
        return <Emoji size="40px">🙈</Emoji>;
      case CustomPath.COLOR_TEST_RESULT:
      case CustomPath.QUESTION:
        return <Emoji size="40px">🧐</Emoji>;
      case CustomPath.RESULT:
        return <Emoji size="40px">🎉</Emoji>;
      case CustomPath.HOME:
        return <Emoji size="40px">👀</Emoji>;
      case CustomPath.SECRET:
        return "";
    }
  };

  const getTitle = () => {
    switch (curUrlPath) {
      case CustomPath.COLOR_TEST:
        return `'${getColorTestKeyword(
          colorPageNo
        )}' (이)라는 단어가 총 몇 번 나오나요?`;
      case CustomPath.COLOR_TEST_RESULT:
        return "중간 점검 (거의 다 왔습니다!)";
      case CustomPath.SPEED_TEST_START:
        return "얼마나 정확하게 볼 수 있나요?";
      case CustomPath.SPEED_TEST:
        return "무엇이 보였나요?";
      case CustomPath.QUESTION:
        return "정말로 거의 다 왔습니다!";
      case CustomPath.RESULT:
        return "감사합니다!";
      case CustomPath.HOME:
        return "내 눈은 몇 살일까요?";
      case CustomPath.SECRET:
        return "";
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
