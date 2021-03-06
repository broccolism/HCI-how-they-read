# HCI User Study 1
2021-1학기 HCI 과목 프로젝트 1로 제작했습니다.

## “내 눈은 몇 살일까요”로 위장한 fake 웹사이트

- [https://hci-proj-1.web.app/](https://hci-proj-1.web.app/)
- 실제 프로젝트 주제: **모바일 환경**에서 다크모드의 가독성 분석

### 프로젝트 목표

1. 다크모드와 라이트모드에서 가독성을 비교합니다.
    - 세부 비교 사항: 눈의 피로도, 글자를 정확하게 식별할 수 있는 정도
2. 다크모드에서 글을 읽을 때 텍스트의 명도가 어느정도일 때를 가장 선호하는지 알아봅니다.

### 구현 내용

간단한 웹사이트를 제작했습니다.

On time, within a budget을 위해 최대한 구현 속도가 빠른 방법을 택했습니다.

- Firebase firestore, React typescript

### 유저 스터디

기간: 약 1주일

- 총 81개의 유효한 응답이 들어왔습니다.
- Firebase에서 따로 데이터를 export해주는 기능이 없기 때문에 해당 기능을 하는 코드를 작성하여 엑셀로 데이터를 추출했습니다.

### 유저 스터디 결과
- 요약
    - 상황에 따라 ’더 효과적인’ 모드가 달랐습니다.
    - (교수님 피드백 시간에서도 보통 둘가지를 비교할 때는 무조건 한쪽이 베스트라는 결론이 나오기보단 case by case인 경우가 대부분이라고 하셔서 안심했습니다.)
- 정확도
    - 긴 글을 읽을 때 정확도가 높은 쪽: 🌞 lightmode 
    - 단어를 순간적으로 식별할 때 정확도가 높은 쪽: 🤔 이번 실험으로 비교 불가
- 눈의 피로도
    - 긴 글을 읽을 때 피로도가 덜한 쪽: 🌚 darkmode
    - 단어를 순간적으로 식별할 때 피로도가 덜한 쪽: 🌞 lightmode
- 다크모드에서 텍스트 명도에 대한 선호도 top 1, 2
 ![image](https://user-images.githubusercontent.com/45515332/116812101-e1133880-ab87-11eb-9d3e-d6aa7d0f107d.png)
 
- 자세한 결과는 [블로그](https://velog.io/@broccolism)에 포스팅 되었습니다. [✨보러가기✨](https://velog.io/@broccolism/%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C-%EC%A7%84%EC%A7%9C%EB%A1%9C-%EB%88%88%EC%97%90-%EC%A2%8B%EC%9D%84%EA%B9%8C-HCI-%EC%9C%A0%EC%A0%80-%EC%8A%A4%ED%84%B0%EB%94%94-3-%EA%B2%B0%EA%B3%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D)
