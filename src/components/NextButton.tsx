import { MdNavigateNext } from "react-icons/md";
import styled from "styled-components";
import customColors from "../constants/styles/colors";

type NextButtonProps = {
  onClick: () => void;
};

function NextButton({ onClick }: NextButtonProps) {
  return (
    <Root onClick={onClick}>
      <MdNavigateNext color={customColors.white} size="30px" />
    </Root>
  );
}

const Root = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  margin: 20px;
  background-color: ${customColors.black};
`;

export default NextButton;
