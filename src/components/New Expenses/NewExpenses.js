import React, { useState } from "react"
import './newExpenses.css'
import ExpenseForm from "./ExpenseForm"
const NewExpenses =(props)=>{
  const [isEditing , setIsEditing] = useState(false);
  const saveExpenseHandler = (enteredExpenses)=>{
    const expenseData = {
        ...enteredExpenses,
        id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAdding(expenseData);
    setIsEditing(false)
  }

  const startEditingHandler = ()=>{
    setIsEditing(true)
  }

  const endEditingHandler = ()=>{
    setIsEditing(false)
  }
  
  
    return(
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>ADD NEW EXPENSE</button>
      )}
      {isEditing && (
         <ExpenseForm 
         onSaveExpenses = {saveExpenseHandler}
         onCancel = {endEditingHandler}/>

      )}
       

    </div>
    );
};
export default NewExpenses;