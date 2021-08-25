import React, { Component } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls ">
          <label className="new-expense__control label">Title</label>
          <input type="text" className="new-expense__control input " />
        </div>
        <div className="new-expense__controls ">
          <label className=".new-expense__control label">Amount</label>
          <input
            className="new-expense__control input "
            type="number"
            min="0.01"
          />
        </div>
        <div className="new-expense__controls ">
          <label className=".new-expense__control label">Date</label>
          <input
            className="new-expense__control input "
            type="date"
            min="2019-01-01"
            max="2022-01-01"
          />
          Date
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expesne</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
