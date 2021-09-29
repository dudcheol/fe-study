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

<br/>


### 출처
https://jcon.tistory.com/124
https://github.com/vercel/next-learn-demo
