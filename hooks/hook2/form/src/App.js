import { useState } from "react"
import React  from 'react'

function App() {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [mobile,setMobile]=useState("");
  const [gender,setGender]=useState("");
  const [language,setLanguage]=useState("");
  const [language1,setLanguage1]=useState("");
  const [list,setList]=useState([]);

  const handleSubmit=()=>{

    const data={fname,lname,email,address,mobile,gender,language,language1}
    console.log(data)
    if(fname&&lname&&email&&address&&mobile&&gender&&language&&language1){
      setList(data)
       setLname("")
       setEmail("")
       setAddress("")
       setMobile("")
       setGender("")
       setLanguage("")
    
       setLanguage1("")
     }
 }
  return (
    <form >
      {
      list.map((a)=> <div>
      <li>{a.fname}</li>
      <li>{a.lname}</li>
      <li>{a.email}</li>
      <li>{a.address}</li>

      <li>{a.mobile}</li>

      <li>{a.gender}</li>

      <li>{a.language}</li>
      <li>{a.language1}</li>
          

    </div>)
    }
    <div>
        First-Name:-
     <input type="text" id='fname' placeholder='First Name' onChange={(e)=>setFname(e.target.value)}/>
    
    </div><br />
    <div>
        Last-Name:-
    <input type="text" id='lname' placeholder='Last Name'onChange={(e)=>setLname(e.target.value)}/>

    </div><br />
    <div>
        Email:-
    <input type="email" id='email' placeholder='Enter Your mail'onChange={(e)=>setEmail(e.target.value)}/>

    </div><br />
    <div>
        
    </div>
    <div>
        Address <input type="text" id='address' placeholder='address' onChange={(e)=>setAddress(e.target.value)} />
    </div><br />
    <div >
        Mobile:-
        <input type="tel" id="mobile" placeholder='mobile'onChange={(e)=>setMobile(e.target.value)}/>
    </div><br />
    <div>
         <input type="radio" value="Male" name="gender" onChange={(e)=>setGender(e.target.value)} /> Male
        <input type="radio" value="Female" name="gender" onChange={(e)=>setGender(e.target.value)} /> Female
        <input type="radio" value="Other" name="gender"onChange={(e)=>setGender(e.target.value)} /> Other
    </div><br />
    <div>Language:-
        <input type="checkbox" value="java" name="language" onChange={(e)=>setLanguage(e.target.value)}/>Java
        <input type="checkbox" value="JavaScript" name="language1" onChange={(e)=>setLanguage1(e.target.value)}/>JavaScript
        
    </div><br />
    <input type="button" value="Submit" onClick={()=>handleSubmit(fname,lname,address,mobile,address,gender,language,language1)}/>
    </form>
    
  );
}

export default App;
