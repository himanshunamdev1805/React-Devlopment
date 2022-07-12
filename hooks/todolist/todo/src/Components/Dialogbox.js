import React from "react";
import './Dialogbox.css'
function Dialogbox(props) {
  const close = () => {
    props.func(false);
  };
  
  return (
    // <div
    //   className="dialogue-container
    // "
    // >
    //   <button style={{ backgroundColor: "green" }} onClick={close}>
    //     X
    //   </button>
    //   <p>Are you Sure</p>
    //   {/* <button style={{backgroundColor:'green'}}>Cancel</button> */}
    //   <button style={{ backgroundColor: "red" }}>Confirm</button>
    // </div>
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        {/* <button
          onClick={close}
        >
          X
        </button> */}
      </div>
      <div className="title">
        <h1>Are You Sure You Want to Delete?</h1>
      </div>
      <div className="body">
        {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
      </div>
      <div className="footer">
        <button
          onClick={close}
        >
          Cancel
        </button>
        <button>Continue</button>
      </div>
    </div>
  </div>
);
}
export default Dialogbox;
