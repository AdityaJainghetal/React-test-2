import React from 'react'
import { useRef } from 'react'
const UseRef = () => {
    const inputref=useRef(null);
    const handlefoucs = ()=>{
        inputref.current.focus();
    }
  return (
<> 
<input type="text" ref={inputref}  placeholder='Focus here'/>
<button onClick={handlefoucs}>focus input</button>
</>
)
}

export default UseRef