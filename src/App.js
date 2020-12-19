import React, { useState } from "react";
import Message from "./Message.js";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [ismorning, isnight] = useState(1)
  return (
    <div className ={`box ${ismorning ? 'ismorning' : ''} `} >
       <h1>day time = {ismorning ? 'morning' : 'night' }</h1> 
      <Message counter ={count}/>
      <button onClick={() => setCount(++count)}>add num</button>
      <button onClick={() => setCount(count=0)}>reset</button>
      <br></br>
      <button onClick = {()=> isnight (!ismorning) }> set day</button>
    </div>
  );
}


export default App;
