
import React, { Component } from 'react';
class BritishPound extends Component{
  constructor(){
    super();
    this.state={
        pound:0.58 
    }
  }
  render(){
  return(
    <div>
      <p> The value in British Pound: {(0.78 * this.props.dollar).toFixed(2)}</p>
    </div>
  )
}


}
export default BritishPound; 