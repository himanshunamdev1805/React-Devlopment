import { useState } from "react"
import React  from 'react'

 const Form=()=> {

    const [contactInfo, setContactInfo] = useState({
    fname: "",
    lname: "",
    address: "",
    mobile: "",
    gender: "",

  });

   
    
    const handleSubmit=()=>{
        
        console.log(fname)
       
    }
   
    
    
  return (
      <form action="">
    <div>
    <div>
        First-Name:-
     <input type="text" id='fname' placeholder='First Name' value={contactInfo.fname}/>
    
    </div><br />
    <div>
        Last-Name:-
    <input type="text" id='lname' placeholder='Last Name'value={contactInfo.lname}/>

    </div><br />
    <div>
        Address <input type="text" id='address' placeholder='address'value={contactInfo.address}/>
    </div><br />
    <div >
        Mobile:-
        <input type="tel" id="mobile" placeholder='mobile'value={contactInfo.mobile}/>
    </div><br />
   
    <input type="button" value="Submit" onClick={()=>handleSubmit(fname,lname,address,mobile)} />
    
    </div>
    </form>
    
  )
}
export default Form