## 1. Setting

```bash
# Install package
yarn install

# Run dev server
yarn dev

# Build project
yarn build
```

## 2. Branch Convention

ex) feat/login-ui

- feat: 기능 개발
- refactor: 코드 리팩토링
- hotfix: 배포 버전 버그 수정

## 3. 폴더구조

```
src/
├── apis // api 호출 함수 관리
├── assets // 각종 이미지 파일 관리
├── components // 컴포넌트 관리
│   ├── common // 기본 컴포넌트
│   └── performance
│       ...
├── constant // 상수 관리
├── hooks // custom hook 관리
├── pages
│   └── main
│       ...
├── styles // module css 스타일링
│   └── Bar.module.css
├── types // 공유되는 타입 관리
├── utils // 각종 유틸 함수 관리
├── App.tsx // routing 처리
├── index.css // 전역 css 관리
└── index.tsx
```

## 4. Commit Convention

- feat: 새로운 기능 추가
- fix: 버그 수정
- style: css 파일 위주의 ui 작업
- docs: 문서 수정
- refactor: 코드 리팩토링
- chore: 빌드 업무 수정, 패키지 매니저 수정
