import React from 'react';
import logo from './logo.svg';
import './App.css';
import Perso,{hello as yo, tab} from './Exemple';
import Point, {centroid} from './Points';

var p1 = new Point(10,15,20);
var p2 = new Point(20,15,10);
var p3 = new Point(15,20,10);

var dist = p1.distance(p2);
console.log(dist);
var p4 = centroid([p1,p2,p3]);
console.log(p4);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit3 <code>src/App.js</code> and save to reload.
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
