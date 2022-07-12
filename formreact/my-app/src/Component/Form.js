import { useState } from "react"
import React  from 'react'
  
 const Form=()=> {
    const [fname, setFname]=useState("")
    const [lname, setLname]=useState("")
    const [email, setEmail]=useState("")
    const [address, setAddress]=useState("")
    const [mobile, setMobile]=useState("")
    const[gender, setGender]=useState("")
    const[language, setLanguage]=useState("")
    const[language1, setLanguage1]=useState("")
    const[data, setData]=useState([])

    
    
    const handleSubmit=()=>{

       const info={fname,lname,email,address,mobile,gender,language,language1}
       console.log(info)
       const submited = Array(info)
       console.log(submited)
    //    setData(submited)
       console.log(submited)
       


       const Updatedata=[...data]
       console.log(Updatedata)
       Updatedata.push(info)
       setData(Updatedata)
       
    }

    
   
    
    
  return (
      <form action="">
         
    <div>
    <div>
        First-Name:-
     <input type="text" id='fname' placeholder='First Name' onChange={(e)=>setFname(e.target.value)}/>
    
    </div><hr />
    <div>
        Last-Name:-
    <input type="text" id='lname' placeholder='Last Name'onChange={(e)=>setLname(e.target.value)}/>

    </div><hr />
    <div>
        Email:-
    <input type="email" id='email' placeholder='Enter Your mail'onChange={(e)=>setEmail(e.target.value)}/>

    </div><hr />
    <div>
        
    </div>
    <div>
        Address <input type="text" id='address' placeholder='address' onChange={(e)=>setAddress(e.target.value)} />
    </div><hr />
    <div >
        Mobile:-
        <input type="tel" id="mobile" placeholder='mobile'onChange={(e)=>setMobile(e.target.value)}/>
    </div><hr />
    <div>
         <input type="radio" value="Male" name="gender" onChange={(e)=>setGender(e.target.value)} /> Male
        <input type="radio" value="Female" name="gender" onChange={(e)=>setGender(e.target.value)} /> Female
        <input type="radio" value="Other" name="gender"onChange={(e)=>setGender(e.target.value)} /> Other
    </div><hr />
    <div>Language:-
        <input type="checkbox" value="java" name="language" onChange={(e)=>setLanguage(e.target.value)}/>Java
        <input type="checkbox" value="JavaScript" name="language1" onChange={(e)=>setLanguage1(e.target.value)}/>JavaScript
        
    </div><hr />
    <input type="button" value="Submit" onClick={()=>handleSubmit()} />
    
    
    </div><br />
    <table className="table">
        <thead>
            <tr>
                <th>First-name</th>
                <th>Last-name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>gender</th>
                <th>Language</th>
                <th>Language</th>
                
            </tr>
        </thead>
        <tbody>
            {data.map((fdata , index)=>{
                return(
                    <>
                        <tr key={index}>
                            {/* <td>{index+1}</td> */}
                            <td>{fdata.fname}</td>
                            <td>{fdata.lname}</td>
                            <td>{fdata.email}</td>
                            <td>{fdata.address}</td>
                            <td>{fdata.mobile}</td>
                            <td>{fdata.gender}</td>
                            <td>{fdata.language}</td>
                            <td>{fdata.language1}</td>
                        </tr>
                        </>
                )
                }

                )
            }
        </tbody>
    </table>
    </form>
    
    
    
  )
}
export default Form