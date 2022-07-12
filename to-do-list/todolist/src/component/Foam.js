import React from 'react'
import Table from './Table'
import { useState } from 'react';
import Dialogebox from './Dialogebox';
import './Table.css';
import './Foam.css';

const Foam = () => {
  { modalOpen && <Modal setOpenModal={setModalOpen} /> }
  // const [dialogebox,setDialogebox]=useState(false)


  // const click=()=>{
  //   setDialogebox(true)

  // }
  // const X=()=>{
  //   setDialogebox(false)
  // }

  return (
    <div>
      <div class="login-page">
        <div class="form">

          <form class="login-form">
            <input type="number" placeholder="ID" required />
            <input type="text" placeholder="Title" required />
            <input type="text" placeholder="Description" required />
            <button type='submit'>Create</button>
            <button>Save</button>

          </form>
        </div>
      </div>
      <div>
        <table className='t2'>
          <thead >
            <tr className='hello'>
              <th className='t1'>ID</th>
              <th className='t1'>Title</th>
              <th className='t1'>Decription</th>
              <th className='t1'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='t1'>1</td>
              <td className='t1'>Office</td>
              <td className='t1'>Do some work</td>
              <button>Update</button>
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>


            </tr>
          </tbody>
        </table>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}

      </div>
    </div>
  )
}

export default Foam
