
import { useState } from "react"
import React  from 'react'

function App(){
const [name, setName ] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [gender, setGender] = useState("");

const [list, setList ] = useState([]);



const handlesubmit = (e) => {
    e.preventDefault();
console.log(name, email, phone, address, gender)
const date = {name, email, phone, address, gender}
        if(name&& email&&phone&&address&&gender) {
            setList((ls) => [...ls, date])
            setName("")
            setEmail("")
            setPhone("")
            setAddress("")
            setGender("")
        }
    }
return (
    <div className="App">
        <h1>  </h1>
        <form onSubmit={handlesubmit}>
 Name:-   <input name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <hr />
 Email:-  <input name="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><hr />
 Phone:-  <input name="name" placeholder="Phone"  value={phone} onChange={(e) => setPhone(e.target.value)} /> <br /> <hr />
 Address:-<input name="name" placeholder="Address"  value={address} onChange={(e) => setAddress(e.target.value)} /> <br /><hr />
 Gender:- <input type="radio" value="Male" name="gender" onChange={(e)=>setGender(e.target.value)} /> Male 
        <input type="radio" value="Female" name="gender" onChange={(e)=>setGender(e.target.value)} /> Female
        <input type="radio" value="Other" name="gender"onChange={(e)=>setGender(e.target.value)} /> Other <br /><hr />
        
        <button>Show</button> <br /><hr />

        {
    list.map((a)=><div>
       
        <li>{a.name}</li> <hr />
        <li>{a.email}</li><hr />
        <li>{a.phone}</li><hr />
        <li>{a.address}</li><hr />
        <li>{a.gender}</li><hr />

        

    </div> )
}
</form>

</div>
);
}

export default App;