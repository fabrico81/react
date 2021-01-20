import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = 'Giuseppe Verdi'
const element = <h1>Hello, {name}</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>element</div>
    </div>
   
  );
}

export default App;
