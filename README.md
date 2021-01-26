## 실행 방법

1. Visual Studio Code 프로그램을 실행하여 hotseller 디렉토리의 터미널을 연다.
2. " npm install "을 입력하여 실행에 필요한 모듈을 설치해준다.
3. 설치가 완료 되었으면 " npm run start"를 입력해 실행해준다.
4. 웹 브라우저에 아래같은 화면이 뜨면 성공

<img src="https://user-images.githubusercontent.com/68889162/105795138-a7062980-5fcf-11eb-8954-3fea4e0f91e6.png" ></img>

## 버전

- npm 버전 : 6.14.8

## 코드 구조

- component : page에서 사용하는 버튼, 카테고리 박스 기능들이 들어가 있습니다.

  - categoryBox.js : 카테고리의 펼쳐지고 닫히는 기능이 들어가 있는 파일 입니다. (주로 categoryData의 container로 사용)
  - categoryBtn.js : 카테고리에서 분류를 정할 수 있는 버튼기능 입니다. ( 최근 1일 , 최근 7일, 오래 유지된 순위 등등.. )
  - categoryData.js : page에서 가져오는 데이터 정보를 가져와 카테고리에 맞게 데이터를 분류 해주고 categoryItem에 넣어주는 부분 입니다.
  - categoryItem.js : categoryData에서 가져온 데이터를 버튼 태그로 만들어 넣어주고 정보를 띄어주는 부분

- lib : 라이브러리, api, 데이터등을 연결하는 파일들을 모아놓았습니다.

  - api : api 따로 폴더를 구분 해놓아서 api를 변경 할때는 여기서 한정해서 수정 해주면 쉽게 변경 가능합니다.

- pages : 최종 클라이언트에게 보여지는 페이지 파일을 모아 놓았습니다.

- utility : 라이브러리 까지는 아니지만 단순 계산 혹은 숫자,단어들을 변환 시켜주는 기능을 넣어 두었습니다.
  이 프로젝트에서는 숫자를 천단위로 나눠주는 기능이 들어가있습니다(addComma)

## 화면 기획 의도

```
이 프로젝트를 진행하면서 화면을 보는 사용자가 편리하게 데이터를 볼 수 있고 이해하기 쉽게 분류를 하자에

큰 중점을 두었습니다.

그래서 데이터를 그냥 보여주는 것이 아니라 펼치고 닫을 수 있는 카테고리를 만들어 사용자가 좀 더 편리하게

볼 수 있도록 제작 하였고 카테고리가 늘어나 복잡함이 생기는 부분 때문에 카테고리 버튼을 만들어

카테고리 내에서도 분류를 해 최대한

내가 찾고자 하는 데이터를 편하게 볼 수 있게 제작 하였습니다.
```

## 화면 구현 내용 상세

```
 첫 메인 화면(main.js)에서 카테고리 밑에 화살표 모양 바를 누르면 그 카테고리의 박스가

펼쳐지면서 데이터들이 버튼 형식으로 보여집니다.

박스안 가장위 카테고리 버튼은 클릭 시 카테고리정보가 클릭한 버튼 분류에 맞게 분류되어 보여줍니다.
(카테고리에 안에서만 적용되는 기능 다른 카테고리에는 영향x)

이 버튼에 처음에 보이는 숫자는 순위 입니다.
(순위의 카테고리가 아닌 일반 목록을 보여주는 카테고리에는 없습니다.)

버튼에 마우스를 갖다 대면 그 데이터의 상세내용이 간략하게 나옵니다.

버튼을 클릭하면 그 태그명에 맞는 상세페이지(hashtagInfo.js)로 넘어갑니다.

왼쪽 상단에 info 밑 to main을 클릭시 뒤로가기가 아닌 main화면으로 이동합니다.

데이터가 없는 태그의 이름으로 상세페이지에 진입시 데이터가 존재하지 않는다는 글을 보여주고 돌아가기 버튼을 누를 시

main페이지만이 아닌 뒤로가기 기능 (history.goBack())으로 전 페이지로 돌아갑니다.

태그 상세페이지에서 게시물, 아이디,포스팅 수 추이 관련 카테고리 버튼들은 클릭해도 아무 효과가 없습니다.


```

## 개발 고려 사항

1. 컴포넌트는 최대한 재사용할 수 있게 제작 한다.
2. 컴포넌트 파일 작명은 카멜표기법을 사용한다.
