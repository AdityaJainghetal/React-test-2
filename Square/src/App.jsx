import { useState } from "react";
const SquareCube=()=>{
    const [num,setnum]=useState(0);
    return(
        <>
        <input type="text"  value={num} onChange={(e)=>{
         setnum(e.target.value)
        }}/>  <br /> <br />
        <button>Submit</button>

        <h1>Square of {num} is : {num*num}</h1>
        <h1>Cube of {num} is : {num*num*num}</h1>
        </>
    )
}


export default SquareCube;