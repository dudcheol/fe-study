import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState } from 'react';
import loadable from '@loadable/component';

// React.lazy - 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해주는 유틸 함수
// loadable - 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리. 서버 사이드 렌더링을 지원함
const SplitMe = loadable(()=>import('./SplitMe'));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
