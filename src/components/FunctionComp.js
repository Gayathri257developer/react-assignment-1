import React, {useState} from 'react'

const style = {
  buttonstyle: {
    position: 'absolute', top: '20%', right: '15%'
  }
}

function FunctionComp() {
  const [showText, setShowText] = useState(false);  

  return (
    <div>
    <button style={style.buttonstyle} onClick={()=>setShowText (hidden => !hidden)} >
    To see styling in functional component</button>

   {showText && <Text/> }

  </div> 
  );
}
const Text = () => 
  <div style={{border:'3px solid black',width:'30%',
  margin: '80px',textAlign: 'center',position: 'absolute', top: '30%', right: '10%'}}> 
  
  <h3>This is created using functional Component</h3>
   <p id='p1'>This is done using external CSS</p>
   <p id='p2'>This is done using inline CSS</p>
  </div> 

export default FunctionComp