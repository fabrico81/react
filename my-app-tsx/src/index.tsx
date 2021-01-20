import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const user = {
  name: "Giuseppe",
  surname: "Verdi"
}


function formatUser() {
  return user.name +" "+ user.surname;
}
const element = <h1>Hello, {formatUser()}</h1>
ReactDOM.render(
  
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
