import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MyCanvas from './components/MyCanvas';

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
        <Link
          to="/getting-started"
          className="App-link"
          
        >
          Getting Started
        </Link>
      </header>
    </div>
  );
}

export default App;
