import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Point from './Points';

var p = new Point(50,50,0);
var p2 = new Point(75,50,0);


class App extends Component {
  render(){

    var stylep = {marginLeft:p.x+"px",
                  marginTop:p.y+"px"};
    
    var stylep2 = {marginLeft:p2.x+"px",
                  marginTop:p2.y+"px"};

    return (
      <div className="App">
        <div style={stylep} className='point'></div>
        <div style={stylep2} className='point'></div>
      </div>
    );
  }
}

export default App;
