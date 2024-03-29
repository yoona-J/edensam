# 이든샘
선물 추천 및 편지 보내기 서버스
<br><br>

## 👀 일정 관리
|     날짜      |                          설명                                |
| ------------- | ------------------------------------------------------------ |
| 09.12 ~ 09.19 | 프론트엔드 디자인 파트 구현 진행 (main, mailbox 등 메인 카테고리) |
| 09.20 ~ 09.26 | 백엔드 및 서버, DB 구현 진행 (기본 part)                        |
| 09.27 ~ 10.07 | 기본 part code develope + 어려운 코드 구현 진행                 |
| 10.08 ~ 10.26 | 남은 수정사항 수정 및 final 코드 구현 진행                       |
| 10.27 ~ 10.30 | 최종 구현 확인 및 수정 진행                                     |
| 11월 초 ~ 중순 | 졸작 confirm                                                  |
| 11월 초 ~ 중순 | 컨펌 수정사항 수정 및 AWS 배포                                  |

⚙️ github-flow

| 브랜치 종류  | 설명                                                          |
| ------------ | ------------------------------------------------------------ |
| Master(main) | 테스트 서버에서 테스트가 끝나고 운영서버로 배포 할 수 있는 브랜치   |

#### 참고 자료
1. [Git 브랜칭 전략 : Git-flow와 Github-flow](https://hellowoori.tistory.com/56)
2. [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)

---

### 브랜치 네이밍
⚙️ 네이밍 패턴

제작자 이름/간단한 설명

Ex) '로그인 기능' 이슈를 구현하는 브랜치를 생성하는 경우, 브랜치 이름을

*yoona-j/loginPage* 로 작성한다.

### 커밋 메시지

commit message는 무조건 자신이 구현한 부분에 대해 정확하게 서술!

| 커밋 메세지 종류  | 설명                                                     |
| ------------ | ------------------------------------------------------------ |
| Feature(Feat) | 새로운 기능 구현 시 앞에 작성   |
| Fix | 원래 있던 기능 수정했을 때 앞에 작성   |
| HotFix | 긴급하게 수정해야 할 사항이 있는 경우 앞에 작성   |

Ex) '회원가입' 기능을 새로 구현한 경우, 커밋 메세지를

*[feature] make join page and create member DB* 로 작성한다.

Ex) '로그인' 기능을 수정한 경우, 커밋 메세지를

*[fix] fix login props method* 로 작성한다.

