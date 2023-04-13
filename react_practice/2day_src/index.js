import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //css from 없음
import App from './App'; //export default해서 중괄호 x
import Count from './Count';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));// root 넣으면 알아서 메모리에 올려줄게
root.render(
  <React.StrictMode> 
    {/* <App /> */}
    <Count />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
