import React, { Component } from 'react';
import BritishPound from './components/BritishPound'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      americanDollar:1
    }
   
    }
    addDollar=()=> {
      this.setState({
        americanDollar: this.state.americanDollar+ 1
      })
      }

  render(){
      return(
        <div>
        <p>American Dollar : {this.state.americanDollar}</p>
          <p> <BritishPound dollar={this.state.americanDollar}/> </p>
        <button onClick={this.addDollar}> click</button>
        </div>
      )
  }

}
  
export default App;
