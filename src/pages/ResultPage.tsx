import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  StyledColumn,
  StyledEmptyDiv,
  StyledRow,
} from "../components/layouts/StyledSimpleLayout";
import customColors from "../constants/styles/colors";
import customFonts from "../constants/styles/fonts";
import {
  getColorTestKeyword,
  getColorTestResult,
  getSpeedTestContent,
} from "../constants/testContents";
import { ColorPages, SpeedPages } from "../constants/types";
import { getColorTestCountCookie, getSpeedTestCookie } from "../utils/cookie";
import { MdEmail } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";

function ResultPage() {
  return (
    <StyledColumn crossAxisAlignment="start">
      <StyledEmptyDiv height="30px" />
      <Content>
        사실 이 사이트는 모 대학 4학년이 '인간 컴퓨터 상호작용' 과목을 수강하며
        user study를 하기 위해 만든 프로젝트 페이지입니다.
        <br />
        앞서 말했던 논문 관련 내용은 모두 허구이며, 이번 프로젝트의 실제 목표는
        "다크 모드에서의 가독성 연구" 였습니다.
        <br />
        사용자가 이를 의식하지 않게 하기 위해 실제 연구 주제를 숨긴 점
        사과드립니다. 더불어 끝까지 참여해주셔서 감사하다는 말씀을 드리고
        싶습니다. 😇
        <br />
        유저 스터디 최종 결과가 궁금하다면 이메일을 보내주세요. 결과를
        보내드리겠습니다.
        <br />
        참여자 수에 따라 크게 유의미하지 않은 결과가 나올수도 있습니다.
        <span className="bold">
          (하지만 주변인에게 널리 퍼뜨려주신다면 의미 있는 결과가 나올지도..🧐)
        </span>
        <br />
        <br />
        <BlueWrapper href="mailto:mile3880@gmail.com">
          <StyledColumn crossAxisAlignment="flex-end">
            <MdEmail size="40px" />
            mile3880@gmail.com
          </StyledColumn>
        </BlueWrapper>
        <br />
        p.s) 따라서 저도 여러분이 찾았던 "그림"이나 "마을" 등의 단어가 몇 번
        나왔는지 정확히 모릅니다. 적당히 눈대중으로 센 수치가 궁금하다면
        아래에서 확인하세요. 잘못 센 단어에 대한 수정 요청 메일도 환영합니다.
      </Content>
      <StyledEmptyDiv height="20px" />
      <StyledColumn width="100%">
        <StyledRow width="100%">
          <Cell bold>단어</Cell>
          <Cell bold>당신이 센 갯수</Cell>
          <Cell bold>결과</Cell>
        </StyledRow>
        <StyledEmptyDiv height="8px" />
        {ColorPages.map((val: number, idx: number) => {
          const keyword = getColorTestKeyword(val);
          const userInput = getColorTestCountCookie()[val].toString();
          const result = getColorTestResult(val).toString();

          return (
            <OneRow key={idx}>
              <StyledRow>
                <Cell>{keyword}</Cell>
                {userInput !== result ? (
                  <Cell red>{userInput}</Cell>
                ) : (
                  <Cell>{userInput}</Cell>
                )}
                <Cell>{result}</Cell>
              </StyledRow>
            </OneRow>
          );
        })}
      </StyledColumn>
      <StyledEmptyDiv height="20px" />
      <Content>
        추가로 검은 배경, 흰 배경을 지나갔던 단어도 알려드리겠습니다. 참고로 이
        단어는 정확한 것입니다. 알고 계셨나요?
      </Content>
      <StyledEmptyDiv height="16px" />
      <StyledColumn width="100%">
        <StyledRow width="100%">
          <Cell bold>배경</Cell>
          <Cell bold>당신이 입력한 단어</Cell>
          <Cell bold>지나간 단어</Cell>
        </StyledRow>
        <StyledEmptyDiv height="8px" />
        {SpeedPages.map((val: number, idx: number) => {
          const keyword = getSpeedTestContent(val);
          const userInput = getSpeedTestCookie()[val];

          return (
            <OneRow>
              <StyledRow key={idx}>
                <Cell>{val > 3 ? "하양" : "검정"}</Cell>
                {userInput !== keyword ? (
                  <Cell red>{userInput}</Cell>
                ) : (
                  <Cell>{userInput}</Cell>
                )}
                <Cell>{keyword}</Cell>
              </StyledRow>
            </OneRow>
          );
        })}
      </StyledColumn>
      <StyledEmptyDiv height="40px" />
      감사합니다!
      <StyledEmptyDiv height="80px" />
      <BlueWrapper href="https://github.com/broccolism">
        <StyledColumn crossAxisAlignment="flex-end">
          <AiOutlineGithub size="40px" />
          <StyledEmptyDiv height="8px" />
          만든 이에게 따지러 가기
        </StyledColumn>
      </BlueWrapper>
      <StyledEmptyDiv height="80px" />
    </StyledColumn>
  );
}

const Content = styled.div`
  ${customFonts.body}
  text-align: start;

  .bold {
    font-weight: 800;
    text-decoration: underline;
  }
`;

const Cell = styled.div<{ bold?: boolean; red?: boolean }>`
  width: 30%;
  margin: 0px 3%;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => (props.red ? customColors.red : customColors.black)};
`;

const OneRow = styled.div`
  margin: 4px 0px;
`;

const BlueWrapper = styled.a`
  text-decoration: none;
  color: ${customColors.blue};
  width: 100%;
`;

export default ResultPage;
