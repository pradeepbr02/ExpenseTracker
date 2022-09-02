
import React ,{useState} from "react";

// import ExpenseItem from "./components/Expenses/ExpenseItems";
import NewExpenses from "./components/New Expenses/NewExpenses";
import Expenses from "./components/Expenses/expenses";

const DUMMY_EXPENSES =[
  {id:'i1',
  title : 'FOOD',
  amount: 200,
  date : new Date(2022,7 ,14)
},
{
  id:'i2',
  title:'SHOES',
  amount:3000,
  date:new Date(2022,3 ,16)
},
{
  id:'i3',
  title:'CLOTHES',
  amount:6000,
  date:new Date(2022,9 ,15)
},
];


const App=()=> {
 
  const [expenses , setNewExpenses] = useState(DUMMY_EXPENSES);

  const expenseHandler = (expense) =>{
    setNewExpenses((prevData)=>{
      return ([expense, ...prevData])
    })

  }

  
  // const expenseHandler = (expense)=>{
  //   console.log('New Expense added');
  //   console.log(expense);
  // }
  return (
    <div>

      <NewExpenses onAdding = {expenseHandler}/>
      
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
