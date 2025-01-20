const arr=[
  {
    "name":"Sumit",
    "age":"20",
    "city":"Bhopal"
  },
  {
    "name":"Sumit",
    "age":"20",
    "city":"Bhopal"
  },
  {
    "name":"Sumit",
    "age":"20",
    "city":"Bhopal"
  },
  {
    "name":"Sumit",
    "age":"20",
    "city":"Bhopal"
  },
  {
    "name":"Sumit",
    "age":"20",
    "city":"Bhopal"
  },
  {
    "name":"Sumit",
    "age":"20",
    "city":"Bhopal"
  },
  {
    "name":"Sumit",
    "age":"20",
    "city":"Bhopal"
  },
 
]

const App=()=>{

  const ans=arr.map((key)=>{
return(
  <>
  <tr>
    <td>{key.name}</td>
    <td>{key.age}</td>
    <td>{key.city}</td>
  </tr>
  </>
)
  })
  return(
    <>
    <table border="2px solid black">
      <tr>
        <th style={{padding:"10px"}}>name</th>
        <th style={{padding:"10px"}}>age</th>
        <th style={{padding:"10px"}}>city</th>
      </tr>

      {ans}
    </table>
    
    </>
  )
}

export default App;