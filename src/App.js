import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header_main from './component/Header_main'
function App() {
  return (
    
      
    
    <div className="App">
      <Header_main></Header_main>
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
    </div>
  );
}

export default App;
