import './App.css'
import React from "react"
import ClassComp from "./components/ClassComp"
import FunctionComp from './components/FunctionComp'

class App extends React.Component{
  

  render(){
    return(
    <>
    <h1 style={{textShadow: '2px 3px rgb(0, 255, 255)',color: 'black', textAlign:'center'}}>
      Styling using Functional and Classcomponents</h1> 
      <br/>
    
    <ClassComp/>
    <FunctionComp/>
    </>
    )
  }
}
export default App;