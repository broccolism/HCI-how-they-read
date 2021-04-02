import styled from "styled-components";
import customColors from "../../styles/colors";

type AxisType = "start" | "center" | "end";

type AxisProps = {
  mainAxisAlignment?: AxisType;
  crossAxisAlignment?: AxisType;
};

type SizeProps = {
  width?: string;
  height?: string;
};

export const StyledColumn = styled.div<AxisProps & SizeProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.mainAxisAlignment};
  align-items: ${(props) => props.crossAxisAlignment};
`;

export const StyledRow = styled.div<AxisProps & SizeProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.mainAxisAlignment};
  align-items: ${(props) => props.crossAxisAlignment};
`;
export const StyledEmptyDiv = styled.div<SizeProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  alpha: 0;
`;
