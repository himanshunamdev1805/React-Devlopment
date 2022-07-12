import React,{useState} from "react";
import Expenses from "./componets/Expenses";
import NewExpense from "./componets/NewExpense";

let DUMMY_EXPENSE=[];

function App(){
    const[expenses,setExpenses]=useState(DUMMY_EXPENSE);
    fetch('http://localhost/sample-api/read.php').then(
        response=>{
            return response.json();
        }
    ).then(
        data=>{
            console.log(data);
        }
    )
    const addExpenseHandler =(expense)=>{
        setExpenses([expense,...expenses]);
    }
    return(
    <div>
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses item={expenses}/>
    </div>
    

    );
}
export default App;