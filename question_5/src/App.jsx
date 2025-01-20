import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Display from "./pages/display";


const App=()=>{
  return(
    <>
           <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                
                  <Route path="display" element={<Display/>}/>
            

                  
                  </Route>
              </Routes>
           </BrowserRouter>
         
    </>
  )
}
export default App;