// import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
import { useState } from 'react';
function ExpenseItem(props){


    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div  className='expense__description'>
                <h2>{props.title}</h2>
                <div  className='expense-item__price'>$ {props.amount}</div>
            </div>
        </div>
    )

}
export default ExpenseItem;