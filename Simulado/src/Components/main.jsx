import React from 'react';
import './main.css'

function main() {
  return (
    <div className='main'>
        <button onClick={()=>(document.getElementById('1'))}>Florianópolis</button>
        <button onClick={()=>(document.getElementById('2'))}>São Paulo</button>
        <button onClick={()=>(document.getElementById('3'))}>Rio de Janeiro</button>
    </div>
  )
}

export default main


