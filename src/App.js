import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Point from './Points';

class Carre{

  constructor(x,y,color,side){
    this.x = x;
    this.y = y;
    this.color = color;
    this.side = side;
  }

}

var p = new Point(50,50,0,"red");
var p2 = new Point(75,50,0);
var c = new Carre(100,100,"purple",100);


class App extends Component {
  render(){
 
    var stylep = {marginLeft:p.x+"px",
                  marginTop:p.y+"px", backgroundColor : p.color};
    
    var stylep2 = {marginLeft:p2.x+"px",
                  marginTop:p2.y+"px", backgroundColor : p2.color};

    var styleC = {marginLeft:c.x+"px",
                  marginTop:c.y+"px", 
                  backgroundColor : c.color, 
                  width : c.side+"px", 
                  height : c.side+"px"};

    return (
      <div className="App">
        <div style={stylep} className='point'></div>
        <div style={stylep2} className='point'></div>
        <div style={styleC} className='carre'></div>
      </div>
    );
  }
}

export default App;
