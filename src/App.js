import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <img src="./mepic.png" alt="chaya-greisman"/>
      
      <h1 style={{fontFamily: 'Raleway'}}>Hey! I'm Chaya.</h1>
    </div>
  );
}

export default App;
