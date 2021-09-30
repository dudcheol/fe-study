# Next.js 학습을 위한 정~말 간단한 토이 프로젝트
<br/>

## 학습 기록

### <b>pages/index.js</b>

여기서 주목해야 할 점은 <b>[ 데이터를 서버에서 가지고 오는지 클라이언트에서 가지고 오는지 ]</b>임!<br/>
새로 고침을 했을 때 `getInitialProps` 안에 있는 <i>console.log</i>의 내용이 어디에 찍히는지 보면 확인을 할 수 있음

- 새로 고침할 경우 : 서버(vscode terminal)에 로그 찍힘
- 브라우저 내부에서 페이지 이동 : 브라우저 개발자 콘솔에 로그 찍힘 => "`<Link />` 컴포넌트 덕분에~!"

서버에서 이미 데이터를 가지고 왔기 때문에 클라이언트에서는 다시 데이터를 가지고 올 필요 없이 서버에서 가져온 데이터를 기반으로 페이지를 렌더링함.
초기 url로 접속 시, SSR이 되는데, "../p/975" 와 같은 형태를 url 입력해서 들어가면 초기 진입이기 때문에 서버에 로그가 찍히게 됨.


### <b>components/MyLayout.js</b>

본문 외 Layout 컴포넌트를 만드는 방법 참고
- Method 1 - Layout as a Higher Order Component
- Method 2 - Page content as a prop
자세한 내용은 [블로그 내용](https://jcon.tistory.com/126) 참고하면 좋을 것 같다


### <b>Styling Components</b>
1. 전통적인 css 파일 기반 스타일링(SASS, PostCSS 등)
2. CSS in Js 스타일링(Styled Components 등)
전통적인 css 파일에는 고려해야 하는 문제들이 많이 있으므로(특히 SSR에서) Next.js에서는 이 방법을 사용하지 않는 편임.
css 파일을 import하는 것보다 각각의 컴포넌트의 스타일을 지정할 수 있는 CSS in Js를 권장함.
> Next.js에는 [styled-jsx](https://github.com/vercel/styled-jsx)라는 css 프레임워크가 있음. 컴포넌트에 css 규칙을 사용할 수 있으며 다른 컴포넌트에 영향을 주지 않음.
#### styled-jsx
- css가 template string 안에 들어가므로 동적인 변수 또한 지원함
- 하위 컴포넌트에 영향을 주지 않음 -> 컴포넌트가 분리되어 있다면 해당 컴포넌트에도 스타일을 지정해주어야 함
- Global Styles : 자식 컴포넌트의 안에서 스타일을 변경해야 할 때 사용함. 하지만 scoped 스타일을 사용하는 것을 권장함


<br/>


### 출처
- https://jcon.tistory.com/124
- https://github.com/vercel/next-learn-demo
