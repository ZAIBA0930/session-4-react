import React,{useState} from 'react';
import {Message} from './message.js'
import './App.css';

export default function App() {

  let [count,setCount] = useState(1);
  let [isMorning,setMorning] = useState(false)

  return (
    <div className={'box ${isMorning ? 'dayLight' : ''}'}>

       <h1> Day time = {isMorning ? 'Morning' : ' Night'} </h1>

        <Message counter={count}/>
        <br />
        <button onClick={
          ()=> setCount(count + 1)
          }>
            updated counter
        </button>
        <button onclick={()=>setMorning(!isMorning)}> update Day</button>
    </div>
  );
}


