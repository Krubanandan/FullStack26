import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const[count,SetCount] = useState(0);
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>
        SetCount(count+25)
        }>Click</button>
        
        <button onClick={()=>
        SetCount(count-25)}>
            Minus
        </button>
    </div>
  )
}
