import React, { Component } from 'react'

export default class MyClass extends Component {
    constructor(props){
        super(props);
        this.state={
          message:"hi"
        };
      }
    
      handleClick = () =>{
        this.setState({
          message:"buttonclick"
    
        }
    
        )
      };

  render() {
    return (
      <div>
        <h1>
            {this.state.message}
        </h1>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
