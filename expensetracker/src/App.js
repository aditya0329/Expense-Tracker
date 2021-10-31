import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INTIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 345.2,
    date: new Date(2020, 5, 23),
  },
  {
    id: "e2",
    title: "TV Cable",
    amount: 143.34,
    date: new Date(2021, 2, 20),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 34.3,
    date: new Date(2021, 8, 13),
  },
  {
    id: "e4",
    title: "New Desktop",
    amount: 433.4,
    date: new Date(2019, 3, 11),
  },
];

const App = () => {
  
  const [dynamicExpense, setDynamicExpense] = useState(INTIAL_EXPENSES);
  //React createElement (OLD WAY)
  // React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  //JSX Code
  const addExpenseDataHandler = (expense) => {
    //clean way of updating our state when it is based on an older snapshot of the same data
    setDynamicExpense(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses items={dynamicExpense} />
    </div>
  );
}

export default App;
