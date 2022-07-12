import React from 'react'

const Button = (props) => {
// console.log(props.count)
// console.log(props.count1)
     
  return (
    <div>
     <button onClick={props.count}>INC</button>
     <button onClick={ props.count1}>DEC</button>
    </div>
  )
}

export default Button
