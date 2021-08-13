import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(13, 8, 2021);
  const expenseTitel = "Can Insurance";
  const expensePrice = 2389;

  return (
    <div className="expense-item">
      <h1>{expenseDate}</h1>
      <h2 className="expense-item__description">{expenseTitel}</h2>
      <h3 className="expense-item__price">{expensePrice}</h3>
    </div>
  );
}

export default ExpenseItem;
