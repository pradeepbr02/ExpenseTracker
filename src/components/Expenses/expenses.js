import React, { useState } from 'react';


import Card from '../UI/Card';
import './expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear , setnewYear] = useState('2020');

  const filterchangeHandler =(selectedYear)=>{
    setnewYear(selectedYear);

  }

  const filteredExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter = {filterchangeHandler}
      />

      <ExpensesList items={filteredExpense}/>

      

    

        
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
     */}
    </Card>
    </div>
  );
}

export default Expenses;