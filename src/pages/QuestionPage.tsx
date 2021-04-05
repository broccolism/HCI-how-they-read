import { FormControlLabel, Input, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { createUserHistory, UserInfo } from "../apis/firebase";
import {
  StyledColumn,
  StyledEmptyDiv,
  StyledRow,
} from "../components/layouts/StyledSimpleLayout";
import NextButton from "../components/NextButton";
import CustomPath from "../constants/path";
import customFonts from "../constants/styles/fonts";

type QuestionNo = 0 | 1 | 2 | 3 | 4 | 5;

function QuestionPage() {
  const [answers, setAnswers] = useState<Record<QuestionNo, string>>({
    0: "예",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "하루에 30분 미만",
  });

  const onChangeAnswer = (e: any) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setAnswers({ ...answers, [+name]: value });
  };

  const onClickWrong = () => {
    window.alert("정확한 결과를 위해 처음부터 다시 진행해주세요.");
    window.location.assign("/");
  };

  const onChangeAge = (e: any) => {
    setAnswers({ ...answers, 4: e.target.value });
  };

  const goNextPage = () => {
    const userInfo: UserInfo = {
      age: answers[4],
      gender: answers[3],
      answers: {
        darkVsLight: answers[1],
        usingDarkmode: answers[2],
        readingTime: answers[5],
      },
    };

    createUserHistory(userInfo);
  };

  return (
    <StyledColumn crossAxisAlignment="start">
      <StyledEmptyDiv height="8px" />
      <SubTitle>
        보다 정확한 결과를 위해
        <br />
        아래 질문에 답해주세요.
      </SubTitle>
      <StyledEmptyDiv height="30px" />
      <Question>테스트동안 화면 밝기를 바꾸지 않았나요?</Question>
      <RadioGroup
        row
        aria-label="position"
        name="0"
        defaultValue="예"
        onChange={onChangeAnswer}
      >
        <FormControlLabel
          value="예"
          control={<Radio color="primary" />}
          label="예"
          labelPlacement="end"
        />
        <FormControlLabel
          value="아니오"
          control={<Radio color="primary" />}
          label="아니오"
          labelPlacement="end"
          onClick={onClickWrong}
        />
      </RadioGroup>
      <StyledEmptyDiv height="30px" />
      <Question>
        움직이는 글자를 볼 때, 배경색이 어떨 때 더 알아보기 쉬웠나요?
      </Question>
      <RadioGroup
        row
        aria-label="position"
        name="1"
        defaultValue=""
        onChange={onChangeAnswer}
      >
        <FormControlLabel
          value="흰색"
          control={<Radio color="primary" />}
          label="흰색"
          labelPlacement="end"
        />
        <FormControlLabel
          value="검은색"
          control={<Radio color="primary" />}
          label="검은색"
          labelPlacement="end"
        />
      </RadioGroup>
      <StyledEmptyDiv height="30px" />
      <Question>평소 스마트폰에서 '다크모드'를 사용하시나요?</Question>
      <RadioGroup
        row
        aria-label="position"
        name="2"
        defaultValue=""
        onChange={onChangeAnswer}
      >
        <FormControlLabel
          value="예"
          control={<Radio color="primary" />}
          label="예"
          labelPlacement="end"
        />
        <FormControlLabel
          value="아니오"
          control={<Radio color="primary" />}
          label="아니오"
          labelPlacement="end"
        />
        <FormControlLabel
          value="그게 뭐죠?"
          control={<Radio color="primary" />}
          label="그게 뭐죠?"
          labelPlacement="end"
        />
      </RadioGroup>
      <StyledEmptyDiv height="30px" />
      <Question>성별과 나이를 알려주세요.</Question>
      <RadioGroup
        row
        aria-label="position"
        name="3"
        defaultValue=""
        onChange={onChangeAnswer}
      >
        <FormControlLabel
          value="남자"
          control={<Radio color="primary" />}
          label="남자"
          labelPlacement="end"
        />
        <FormControlLabel
          value="여자"
          control={<Radio color="primary" />}
          label="여자"
          labelPlacement="end"
        />
      </RadioGroup>
      <StyledRow>
        <Input
          style={{ width: "140px" }}
          placeholder="숫자만 입력. 예) 23"
          inputProps={{ "aria-label": "description" }}
          onChange={onChangeAge}
        />
        <div>살</div>
      </StyledRow>
      <StyledEmptyDiv height="30px" />
      <Question>
        (최근 5일간) 스마트폰으로 글(뉴스, 메신저, sns 등)을 얼마나 읽었나요?
      </Question>
      <RadioGroup
        aria-label="position"
        name="5"
        defaultValue="하루에 30분 미만"
        onChange={onChangeAnswer}
      >
        <FormControlLabel
          value="하루에 30분 미만"
          control={<Radio color="primary" />}
          label="하루에 30분 미만"
          labelPlacement="end"
        />
        <FormControlLabel
          value="하루에 30분 이상 1시간 미만"
          control={<Radio color="primary" />}
          label="하루에 30분 이상 1시간 미만"
          labelPlacement="end"
        />
        <FormControlLabel
          value="하루에 1시간 이상 2시간 미만"
          control={<Radio color="primary" />}
          label="하루에 1시간 이상 2시간 미만"
          labelPlacement="end"
        />
        <FormControlLabel
          value="하루에 2시간 이상 3시간 미만"
          control={<Radio color="primary" />}
          label="하루에 2시간 이상 3시간 미만"
          labelPlacement="end"
        />
        <FormControlLabel
          value="하루에 3시간 이상"
          control={<Radio color="primary" />}
          label="하루에 3시간 이상"
          labelPlacement="end"
        />
      </RadioGroup>
      <StyledRow
        width="100%"
        mainAxisAlignment="flex-end"
        crossAxisAlignment="center"
      >
        <Done>결과 보기</Done>
        <NextButton onClick={goNextPage} />
      </StyledRow>
    </StyledColumn>
  );
}

const SubTitle = styled.div`
  ${customFonts.headSmall}
  width: 100%;
  text-align: center;
`;

const Question = styled.div`
  ${customFonts.body}
  font-weight: 700;
  text-align: start;
`;

const Done = styled.div`
  ${customFonts.headSmall}
  font-weight: 700;
`;
export default QuestionPage;
