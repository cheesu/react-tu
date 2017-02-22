import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//App 컴포넌트를 불러와서 root element에 렌더링하는 부분입니다.

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);