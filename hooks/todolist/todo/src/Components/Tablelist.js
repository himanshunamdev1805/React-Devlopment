import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../App.css';
import React from 'react';
import Dialogbox from './Dialogbox';


export default function Tablelist(props) {

        const [adddata,setAdddata]=useState()
        const [dialogbox, setDialogbox] = useState(false)

        useEffect(()=>{
            setAdddata(props.myData)
        },[props])
      
        const click = (index) => {
        //   setDialogbox(true);
        const row=[...adddata]
        row.splice(index,1)
        //setAdddata(row)
        // console.log(index);
        props.deletedata(row)

          
        };
        const update=(i)=>{
             props.myupdatedata(i)
        }
        const X = () => {
          setDialogbox(false);
        };
        
        // const deletedata=(index)=>{
        //     let adddata=Adddata;
        //     adddata.splice()
        // }
    
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> Title</th>
                        <th>Desciption</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    adddata?.map((i,index)=>{
                        return(
                            <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.description}</td>
                            <td><button onClick={()=>update(i)}>Update</button>
                            <button onClick={()=> click(index)}>Delete</button>
                            </td>
                        </tr>

                        )
                    })
                   
                }
                    
        
        
                </tbody>
            </Table>
            {dialogbox && < Dialogbox func={X} />}
        </div>
    )
};
