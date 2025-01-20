import { useContext } from "react";
import { mycontext } from "./ColorContext";
const App=()=>{
    const {color, setColor}=useContext(mycontext);
    return(
        <>
        <div style={{ height:"100vh", backgroundColor:color}}>

            <center>

        <button onClick={()=>{setColor("blue")}}>Change Color</button>
        </center>

        </div>
        
        </>
    )
}
export default App;