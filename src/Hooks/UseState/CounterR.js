import React from 'react'
import { useState } from 'react'
import './Coun.css'


export default function CounterR() {
    const[count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    }
    const decrementCount=()=>{
        setCount(count-1);
    }
    const resetCount=()=>{
        setCount(0);
    }

    

    
    
  return (
    <div>
        <div className='conatiner'>
            <div className='count-box'>
                <h1>Counter:{count}</h1>
                <div className='button-container'>
                    <button onClick={incrementCount}>Increment</button>
                    <button onClick={decrementCount}>Decrement</button>
                    <button onClick={resetCount}>Reset</button>
                </div>
            
            </div>
            
        </div>
            
        
    </div>
  )
}



