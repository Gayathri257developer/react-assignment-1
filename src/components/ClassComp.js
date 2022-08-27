import React, { Component } from 'react'

class ClassComp extends Component {
  state = {
    showClass: false
  }

  render() {
    return (
      <>
      <button onClick={()=>{this.setState({showClass: !this.state.showClass})}}> 
      To see styling in class component</button>

      {this.state.showClass && <div style={{border:'3px solid black',width:'28%',
      margin: '50px 100px',textAlign: 'center'}} >
      
      <h3>This is created using class Component</h3>
      <p id='p1'>This is done using external CSS</p>
      <p id='p2'>This is done using inline CSS</p>
       </div>
    }
      </>
    );
  }
 
}

export default ClassComp
