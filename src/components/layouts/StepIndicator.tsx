import styled from "styled-components";
import CustomPath from "../../constants/path";

import customColors from "../../constants/styles/colors";

function StepIndicator() {
  const curUrlPath = window.location.pathname as CustomPath;

  return (
    <ProgressBar>
      {Object.values(CustomPath).map((path, index) => {
        return path === curUrlPath ? (
          <div key={index} className="colored" />
        ) : (
          <div key={index}></div>
        );
      })}
    </ProgressBar>
  );
}
const ProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 12px;

  div {
    margin: 0px 3px;
    width: 50px;
    height: 4px;
    background-color: ${customColors.grayLight};
  }
  .colored {
    background-color: ${customColors.black};
  }
`;
export default StepIndicator;
