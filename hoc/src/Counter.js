import React, { memo } from "react";


const Counter = (props) => {
  console.log(props.text)

  return (
    <div>
     {props.text} -{props.Counter}
    
    </div>
  )
}

export default Counter
// // import React  from 'react'
// // import Counter from './Counter';
// // export default function App() {
// //   return (
// //     <div className="App">
// //       <h1>High Order Component </h1>
// //       <HOCRed cmp={Counter} />
// //       <HOCGreen cmp={Counter} />
// //       <HOCBlue cmp={Counter} />
     

// //     </div>
// //   );
// //   function HOCRed(props)
// // {
// //   return <h2 style={{backgroundColor:'red',width:100}}><props.cmp /></h2>
// // }
// // function HOCGreen(props)
// // {
// //   return <h2 style={{backgroundColor:'green',width:100}}><props.cmp /></h2>
// // }
// // function HOCBlue(props)
// // {
// //   return <h2 style={{backgroundColor:'blue',width:100}}> <props.cmp /></h2>
// // }
// // }
// // // import axios from 'axios'
// // // import React,{useEffect, useState}from 'react'

// // // export default function App() {
// // //   const[num,setNum]=useState()
// // //   useEffect(()=>{
// // //     async function getData(){
// // //       const response=await axios.get(`https://swapi.dev/api/people/${num}`)
// // //       console.log(response);
// // //     }
// // //     getData()
// // //   })

// // //     return (
// // //       <div>
// // //         <h1>YOU CHOOSE NUMBER {num}</h1>
// // //         <select value={num} onChange={(e)=>{
// // //           setNum(e.target.value)
          
// // //         }}>
// // //           <option>1</option>
// // //           <option>2</option>
// // //           <option>3</option>
// // //           <option>4</option>
// // //           <option>5</option>
// // //         </select>
// // //       </div>
// // //     )
// // //   }
// import { useState} from "react"
// import Counter from "./Counter"
// import Button from "./Button"
// export default function App()
// { 
//    const [count,setCount]=useState(0)
//   const [count1,setCount1]=useState(0)
  
//   // const inc=   useCallback(()=>{
//   //   setCount(preval=>preval+1)
//   //   console.log("inc")
//   // }, [count]);

//   // console.log("click")
  
//   const dec=()=>{
//     setCount1(preval=>preval-1)
//     console.log("dec")
//   }
//   const inc=()=>{
//     setCount(preval=>preval+1)
//     console.log("inc")
//   }
//   // const dec=   useCallback(()=>{
//   //   setCount(preval=>preval-1)
//   //   console.log("dec")
//   // }, [count]);
 
//   return<div>
//     {/* <h3>{count}</h3>
//     <h3>{count1}</h3> */}
    // 
//     <Counter text='a' count={count}  />
//     <Button inc={inc} dec={dec}/>
//     <Counter text='b' count1={count1}  />
//     <Button  dec={dec}/>
   
//   </div>
// }
