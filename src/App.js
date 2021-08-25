import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Expenses from "./components/Expenses.jsx";
import NewEXpense from "./newExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 0,
      title: "Car Insurance",
      amount: 300,
      date: new Date(30, 9, 2021),
    },
    {
      id: 1,
      title: "Car Insurance",
      amount: 400,
      date: new Date(20, 9, 2021),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 500,
      date: new Date(2, 9, 2021),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 600,
      date: new Date(10, 9, 2021),
    },
  ];
  return (
    <div>
      <NewEXpense />
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} /* expenses={expensesState.expenses}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
