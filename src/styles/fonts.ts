import styled, { css } from "styled-components";
import customColors from "./colors";

const head = css`
  font-size: 24px;
  letter-spacing: 0px;
`;

const headSmall = css`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
`;

const body = css`
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 24px;
`;

const bodySmall = css`
  font-size: 14px;
  letter-spacing: 0.25px;
`;

const customFonts = {
  head: head,
  headSmall: headSmall,
  body: body,
  bodySmall: bodySmall,
};

export default customFonts;

export const Warning = styled.div`
  ${customFonts.body};
  font-weight: 800;
  color: ${customColors.red};
`;
