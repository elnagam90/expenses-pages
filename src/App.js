import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem.jsx";
import React, { Component } from "react";

function App() {
  return (
    <div>
      <h1>Expense App</h1>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
