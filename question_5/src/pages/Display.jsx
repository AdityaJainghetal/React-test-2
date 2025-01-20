import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata] = useState([]);


    const loadData=()=>{
        let api="http://34.198.81.140/attendance.json";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    }, [])

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.emp_id} </td>
                <td> {key.name} </td>
                <td> {key.designation} </td>
                <td> {key.department} </td>
                <td> {key.basic_salary} </td>
              </tr>
            
            </>
        )
    })

    return(
        <>
         <h1> Display </h1>


         <Table striped bordered hover>
      <thead>
        <tr>
          <th> emp_id</th>
          <th>Name</th>
          <th>designation</th>
          <th>dapartment</th>
          <th>base_salart</th>
        </tr>
      </thead>
      <tbody>
    
      {ans}
    </tbody>
    </Table>

        
        </>
    )
}

export default Display;