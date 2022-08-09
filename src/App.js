import React, { useState } from 'react'
import './App.css';

const App=()=>{
    const purple="red";
    const [bg, setBg]= useState(purple);
    const [name,setName]=useState("Click Me");
  const bgChange=()=>{
    let newbg="#34495e";
    setBg(newbg);
    setName('Ouch!! 😱');
    

  }
  
  let co="#008080";
  const bgBack = () =>{
    setBg(co);
    setName("omg!! 😠");
  }
  return(
       <>
        <div style={{backgroundColor: bg}}>
          <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
        </div>
       </>
  )
}
//cd greetings
  //npm start

export default App;