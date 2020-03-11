import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

var nom = "Guillaume";
var personnage = {nom : "Son Goku", type : "Saiyan",origine : "孫悟空"};

class App extends Component {
  render(){
    return (
      <div class="App">
        <b>Description de {personnage.nom}</b>
        <ul>
          <li><b>Nom : </b> {personnage.nom}</li>
          <li><b>Type : </b> {personnage.type}</li>
          <li><b>Nom origine : </b>{personnage.origine}</li>
        </ul>
      </div>
    );
  }
}

export default App;
