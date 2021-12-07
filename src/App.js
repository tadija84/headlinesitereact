import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeadPart from './headPage/HeadPage.js';
import Klijenti from './klijenti/Klijenti.js';
import Onama from './aboutUs/Onama.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <HeadPart />
      <Onama />
      <Klijenti />
    </div>
  );
}

export default App;
