import React from 'react'
import { useState, useEffect } from 'react'

export default function Effect() {
  const [data,sData]=useState(null);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(result => sData(result));
    return() =>{

    };
  },[]);
  return (
    <div>
        {data ? (
            <p>Data: {JSON.stringify(data)}</p>
        ): (
            <p>Loading wait</p>
        )
            
        }
    </div>
  )
}
