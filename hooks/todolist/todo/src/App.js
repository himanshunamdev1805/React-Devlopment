import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Table from "./Components/Tablelist"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [input,setInput]=useState([])
  const[data,setData]=useState({
    id:"",
    title:"",
    description:""

  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    setInput([...input,data])
    console.log(input)
  }
  const handleChange=(e)=>{
    e.preventDefault()
    setData({
      ...data,[e.target.name]:e.target.value
      
    })
  }
  const savedata=()=>{
    console.log('click');
    for(let i=0 ; i < input.length ; i++)
    {
      if( input[i].id===data.id){
        input[i]=data
      }
      setInput([...input])
    }
  }

  return (
    <form >
    <div className="App">
      <h1>To-Do List</h1>
      <div><br/><br/>
        <Form.Control size="lg" name='id' type="number" placeholder="ID"  value={data.id} onChange={handleChange} />
        <br />
        <Form.Control type="text" name='title' placeholder="Title" value={data.title} onChange={handleChange}/>
        <br />
        <Form.Control size="lg" name='description' type="text" placeholder="Desciption" value={data.description} onChange={handleChange} />
      </div><br/>
      <div className='buttons'>
        <Button  className='button-save' onClick={savedata}>Save</Button>
        <Button type="submit" onClick={ handleSubmit} className='button-create'>Create</Button>

      </div><br/>
      <Table myData={input} myupdatedata={(data)=>setData(data)} deletedata={(input)=> setInput(input)}/>
    </div>
    </form>
    
  );
}

export default App;
