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
        return <Emoji size="40px">π</Emoji>;
      case CustomPath.SPEED_TEST_START:
      case CustomPath.SPEED_TEST:
        return <Emoji size="40px">π</Emoji>;
      case CustomPath.COLOR_TEST_RESULT:
      case CustomPath.QUESTION:
        return <Emoji size="40px">π§</Emoji>;
      case CustomPath.RESULT:
        return <Emoji size="40px">π</Emoji>;
      case CustomPath.HOME:
        return <Emoji size="40px">π</Emoji>;
      case CustomPath.SECRET:
        return "";
    }
  };

  const getTitle = () => {
    switch (curUrlPath) {
      case CustomPath.COLOR_TEST:
        return `'${getColorTestKeyword(
          colorPageNo
        )}' (μ΄)λΌλ λ¨μ΄κ° μ΄ λͺ λ² λμ€λμ?`;
      case CustomPath.COLOR_TEST_RESULT:
        return "μ€κ° μ κ² (κ±°μ λ€ μμ΅λλ€!)";
      case CustomPath.SPEED_TEST_START:
        return "μΌλ§λ μ ννκ² λ³Ό μ μλμ?";
      case CustomPath.SPEED_TEST:
        return "λ¬΄μμ΄ λ³΄μλμ?";
      case CustomPath.QUESTION:
        return "μ λ§λ‘ κ±°μ λ€ μμ΅λλ€!";
      case CustomPath.RESULT:
        return "κ°μ¬ν©λλ€!";
      case CustomPath.HOME:
        return "λ΄ λμ λͺ μ΄μΌκΉμ?";
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
