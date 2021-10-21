import { useState } from "react";
import { useReducer } from "react";

// ********************using useState ********************************
// function App() {

//   const [count , setCount] = useState(0);  // 0-> is initial state

//   const add = ()=>{
//     setCount(count +1)
//   }
//   const minus = ()=>{
//     setCount(count -1)
//   }
//   const reset = ()=>{
//     setCount(0)
//   }
 
//   return (
//     <>
//       <button onClick = {add}>+</button> {/*// just pass the function add in onClick , and onClick will call it itself*/}
//       <button onClick = {minus}>-</button>
//       <button onClick = {reset}>RESET</button>
//       <h3>{count}</h3>
//     </>
//   );
// }



// ********************using useReducer **********************


const ACTIONS = {
  ADD : "ADD",
  MINUS :"MINUS",
  RESET : "RESET"
}

function reducer ( count,action ){
  switch(action.type){
    case ACTIONS.ADD :
      return count +1
    case ACTIONS.MINUS:
      return  count -1
    case ACTIONS.RESET:
      return  0
    default : 
      return count
  }
}

let App=  ()=>{
  
  let [count , dispatch]  = useReducer(reducer, 0);
  
  return( <>
  <button onClick = {()=>{dispatch({type :"ADD"})}}>+</button>
  <button onClick = {()=>{dispatch({type :"MINUS"})}}>-</button>
  <button onClick = {()=>{dispatch({type :"RESET"})}}>RESET</button>
  <p>{count}</p>
 
 </>);

}
export default App;