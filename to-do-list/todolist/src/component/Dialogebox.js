import React from 'react'

export default function Dialogebox(props) {
    // const close=()=>{
    //     props.func(false)
    // }

  
    // const click=()=>{
    //   setDialogebox(true)
      
    // }
    // const X=()=>{
    //   setDialogebox(false)
    // }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
         
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        
        <div className="footer">
          <button
            onClick={() => {
                props.setModalOpen(true);
              }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}


