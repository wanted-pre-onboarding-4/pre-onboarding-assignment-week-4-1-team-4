# Assginment #6

## 🎯 프로젝트 목표

#### 투자 관리 서비스의 관리자 기능 구현

## ⏰ 프로젝트 기간

#### 2022-09-20 ~ 2022-09-25

## 🎬 프로젝트 데모


![preface](/Users/seoljaehyeok/Downloads/ezgif.com-gif-maker.gif)



## :nut_and_bolt: 과제 요구 사항

1. 화면 구성

   - 로그인
   - Header
   - Footer
   - Sider
   - Content
     - 계좌 목록
     - 계좌 상세
     - 사용자 목록
     - 사용자 상세

2. 레이아웃 구성

   ![https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png](https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png)

   | 이름   | 설명                                                         |
   | ------ | ------------------------------------------------------------ |
   | Header | 현재 보여지고 있는 페이지명과 로그인 사용자명을 보여줍니다.  |
   | Sider  | 페이지 메뉴가 표시됩니다.                                    |
   | Footer | Copyright © December and Company Inc. 가 가운데 정렬로 들어가면 됩니다. |

3. 메뉴 구성

   | 이름      | 설명                                                         |
   | --------- | ------------------------------------------------------------ |
   | 계좌 목록 | 계좌 목록이 보여집니다.                                      |
   |           | 계좌 목록에서 특정 계좌를 누르면 계좌의 상세 정보가 보여집니다. 이 화면에서는 계좌명 수정 등의 작업이 가능해야 합니다. 계좌의 사용자명을 누르면 사용자 상세로 이동합니다. |
   | 사용자    | 사용자 목록이 보여집니다.                                    |
   |           | 사용자 목록에서 사용자를 누르면 사용자의 상세 정보가 보여집니다. |
   | 로그아웃  | 로그아웃 처리되고 로그인 화면으로 이동합니다.                |

4. 사용자 목록

   - 표기되어야 하는 정보
     - 고객명(name) : 가운데 글자 마스킹 필요, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기
       - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
     - 보유중인 계좌수(account_count) : (해당 API 호출 후 데이터를 정제하여 표기)
     - 이메일 주소 (email)
     - 주민등록상 성별코드 (gender_origin)
     - 생년월일 (yyyy-mm-dd) (birth_date)
     - 휴대폰 번호 (가운데 4자리 `***` 로 마스킹 필요) (phone_number)
     - 최근로그인 (last_login)
     - 혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)
     - 활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)
     - 가입일 (created_at)
   - 구현되어야 하는 기능
     - 목록에서는 활성화 여부, 임직원 계좌 여부를 필터링 할 수 있어야 합니다.
     - 리스트 페이지에서는 검색이 가능해야 합니다.
       - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
       - 예시 : GET http://localhost:3000/users?q=South
     - 페이지네이션이 되어야 합니다.
       - `json-server` 의 Paginate API 를 사용하여 구현합니다.
       - 예시 : GET http://localhost:3000/users?\\\\_page=1&\\\\_limit=20
     - 임의로 신규 사용자를 추가할 수 있어야 합니다.
     - 잘못 생성한 사용자를 삭제할 수 있어야 합니다.
     - 개명을 한 사용자를 위해 사용자명을 변경할 수 있어야 합니다.

5. 계좌 목록

   - 표기되어야 하는 정보
     - 고객명(user_name) : 고객ID 를 참조하여 실제 이름으로 보여져야 합니다.
       - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
     - 브로커명(broker_name) : 예시) OO증권, `brokers.json` 를 참조하여 실제 이름으로 보여져야 합니다.
     - 계좌번호(number) : 앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 `*` 글자로 마스킹 처리가 필요합니다.
     - 계좌상태(status) : 예시) 운용중, `accountStatus.json` 를 참조하여 실제 이름으로 보여져야 합니다.
     - 계좌명(name) : 계좌명입니다.
     - 평가금액(assets) : 예시) 123,123,123
     - 입금금액(payments) : 예시) 123,123,123
     - 계좌활성화여부(is_active) : 계좌 활성화 여부
     - 계좌개설일(created_at) :
   - 구현되어야 하는 기능
     - 목록에서는 브로커명, 계좌 활성화 여부, 계좌 상태를 필터링 할 수 있어야 합니다.
     - 리스트 페이지에서는 검색이 가능해야 합니다.
       - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
       - 예시 : GET http://localhost:3000/accounts?q=South
     - 페이지네이션이 되어야 합니다.
       - `json-server` 의 Paginate API 를 사용하여 구현합니다.
       - 예시 : GET http://localhost:3000/accounts?_page=2&_limit=20

6. 상세

   - 각 사용자, 계좌의 상세 페이지는 획득 가능한 대부분의 정보를 표시해주시면 됩니다.

7. 조건

   - Sider 메뉴에서는 현재 보고 있는 화면에 해당하는 메뉴가 하이라이트 되어야 합니다.
   - 새로고침을 해도 로그인 상태가 유지되어야 하며, 상태에 따라 기존에 머무르던 화면이 그대로 보여야 합니다.
   - 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.
   - 계좌 리스트에서 사용자 이름을 누르면 사용자 상세로 이동합니다.
   - 사용자 상세에서 사용자의 계좌목록이 보여야 합니다.
   - 계좌 목록에서 각 계좌 상태별로 필터링이 가능해야 합니다.
   - 수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색으로 보여줘야 합니다.
   - 계좌 목록에서 broker_id 에 해당하는 실제 브로커명 (OO투자증권) 이 보여야 합니다.

8. 예시

   > 이 화면은 임의로 생성한 테스트 데이터로 보여지는 단순 예시 화면으로, 실제와는 무관합니다. 예시로 만든 화면이며, 디자인 가이드가 아닙니다. 형식만 참고하여 개발을 진행해주세요.

   - 로그인 화면

     ![https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png](https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png)

   - 리스트 화면

     ![https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png](https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png)

   - 상세 화면

     ![https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png](https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png)

9. 추가 구현 사항

   - `brokerFormat.json` 의 형식에 맞춘 계좌번호가 표기 (예: 123-123-123123-10)
   - 상황별 예외처리

## :hammer: 사용 스택

- React
- Tailwind CSS
- React Query
- Axios
- zustand



## 🛠 프로젝트 구조

<details> 
  <summary>펼치기</summary> 
<div style="background-color: #f7f6f2">
 📦src <br />
 ┣ 📂components <br />
 ┃ ┣ 📜Footer.jsx <br />
 ┃ ┣ 📜Header.jsx <br />
 ┃ ┣ 📜Layout.jsx<br />
 ┃ ┣ 📜Pagenation.jsx<br />
 ┃ ┣ 📜Portal.jsx<br />
 ┃ ┣ 📜Search.jsx<br />
 ┃ ┣ 📜Select.jsx<br />
 ┃ ┗ 📜Sider.jsx<br />
 ┣ 📂data<br />
 ┃ ┣ 📜accountStatus.json<br />
 ┃ ┣ 📜brokerFormat.json<br />
 ┃ ┗ 📜brokers.json<br />
 ┣ 📂pages<br />
 ┃ ┣ 📂account_detail<br />
 ┃ ┃ ┗ 📜AccountDetail.jsx<br />
 ┃ ┣ 📂account_list<br />
 ┃ ┃ ┣ 📂components<br />
 ┃ ┃ ┃ ┗ 📜Account.jsx<br />
 ┃ ┃ ┗ 📜AccountList.jsx<br />
 ┃ ┣ 📂login<br />
 ┃ ┃ ┗ 📜Login.jsx<br />
 ┃ ┣ 📂user<br />
 ┃ ┃ ┣ 📂components<br />
 ┃ ┃ ┃ ┣ 📜Modal.jsx<br />
 ┃ ┃ ┃ ┣ 📜UpdateUser.jsx<br />
 ┃ ┃ ┃ ┣ 📜UserAccountItem.jsx<br />
 ┃ ┃ ┃ ┣ 📜UserAccountList.jsx<br />
 ┃ ┃ ┃ ┗ 📜UserInfo.jsx<br />
 ┃ ┃ ┗ 📜User.jsx<br />
 ┃ ┗ 📂user_list<br />
 ┃ ┃ ┣ 📂components<br />
 ┃ ┃ ┃ ┗ 📜User.js<br />
 ┃ ┃ ┗ 📜UserList.js<br />
 ┣ 📂services<br />
 ┃ ┣ 📜account.js<br />
 ┃ ┗ 📜auth.js<br />
 ┣ 📂store<br />
 ┃ ┗ 📜AuthStore.jsx<br />
 ┣ 📂utils<br />
 ┃ ┣ 📜cls.js<br />
 ┃ ┣ 📜dataInfo.js<br />
 ┃ ┣ 📜FilterKey.js<br />
 ┃ ┣ 📜funcs.js<br />
 ┃ ┣ 📜getUserSettingDetail.js<br />
 ┃ ┣ 📜http-common.js<br />
 ┃ ┣ 📜makeLink.js<br />
 ┃ ┣ 📜PrivateRoute.jsx<br />
 ┃ ┗ 📜PublicRoute.jsx<br />
 ┣ 📜App.js<br />
 ┣ 📜index.css<br />
 ┗ 📜index.js<br /><br />    
  </div>
</details>



## :handshake: 프로젝트 팀원

| 이름          |               역할                |
| ------------- | :-------------------------------: |
| 설재혁 / 팀장 | 요구사항 초기 버전 구현, 리팩토링 |
| 김명원        | 요구사항 초기 버전 구현, 리팩토링 |
| 박보선        | 요구사항 초기 버전 구현, 리팩토링 |
| 김지혜        | 요구사항 초기 버전 구현, 리팩토링 |
| 이시형        | 요구사항 초기 버전 구현, 리팩토링 |
| 홍주완        | 요구사항 초기 버전 구현, 리팩토링 |
| 이후경        | 요구사항 초기 버전 구현, 리팩토링 |



## 📖 WiKi

- [Git-Flow](https://github.com/wanted-pre-onboarding-4/pre-onboarding-assignment-week-4-1-team-4/wiki/Convention-&-Git-Flow#git-flow)
- [Commit-Convention](https://github.com/wanted-pre-onboarding-4/pre-onboarding-assignment-week-4-1-team-4/wiki/Convention-&-Git-Flow#commit-convention)



## 🖥 Getting Started

1. `Clone` the repository

   ```markdown
   $ git clone https://github.com/wanted-pre-onboarding-4/pre-onboarding-assignment-week-3-2-team-4.git
   ```

   

2. `Install` dependencies

   ```markdown
   $ npm install
   ```

3. `Start` server

   ```bash
   cd server
   npm install
   npm run gen
   npm start
   ```

4. `Make` Admin account

   ```bash
   // httpie, Postman, cURL 등의 도구를 활용하여 아래와 같이 요청을 보냅니다.
   # 관리자 사용자 추가
   http -v POST 'localhost:4000/users/signup' \\
     'email'='admin@admin.com' \\
     'password'='admin1234'
   
   # 응답값
   {
       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld2ZhY2VAZGNvLmNvbSIsImlhdCI6MTY2MDYxNjA2NCwiZXhwIjoxNjYwNjE5NjY0LCJzdWIiOiIxMDEifQ.j7LFrULPlp4AZTFGTatmWnne_P3xLRpyI2-8ko4_Xs8",
       "user": {
           "email": "newface@dco.com",
           "id": 101
       }
   }
   ```

5. `Start` Projects and Sign in using admin account

   ```bash
   cd client
   npm install
   npm start
   ```



## 과제 조건

- React.js 기반이어야 합니다.
  - Node.js LTS 환경
- antd 또는 tailwindcss 등의 UI 라이브러리나 프레임워크 사용을 권장
  - 사용하시는 라이브러리의 기본 디자인 시스템을 따르되, 필요시 확장하여 개발하시면 됩니다.
- 별도의 API 서버 개발은 필요하지 않습니다.
  - 과제와 함께 제공되는 json-server 를 사용하셔서 개발
  - API 응답값은 항상 정상 응답인 경우를 가정하나, 서버 에러응답, 실패응답, 타임아웃 등의 예외처리에 따른 가산점이 있습니다.
- 일반적인 사용자 PC (1280x1024 이상) 화면에서 문제없이 작동해야 합니다.
- 필요한 조건이 있다면 추가하셔도 좋습니다.
- 특정 패키지 등의 사용 조건은 없습니다.
- 기본으로 주어진 환경의 패키지 버전보다 최신 버전을 사용하셔도 무방합니다.
- 인증된 사용자만 CRUD(생성, 조회, 수정, 삭제) 가 가능해야 합니다.
  - 별도의 회원가입 기능은 필요하지 않습니다.
  - API 호출 예시 참고해서 임의 사용자 생성 후 개발