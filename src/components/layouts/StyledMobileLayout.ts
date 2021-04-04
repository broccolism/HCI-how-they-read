import styled from "styled-components";
import customColors from "../../constants/styles/colors";
import { mobileHorizPadding2x } from "../../constants/styles/size";

export const StyledMobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: calc(100vw - ${mobileHorizPadding2x});
  height: 100vh;
  max-width: 480px;
  max-height: 926px;
  background-color: ${customColors.white};
`;

export const StyledWebBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: ${customColors.white};
`;
