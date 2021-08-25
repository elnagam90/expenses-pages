import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* <div>
       
      </div> */}
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{props.title}</h2>
      <h3 className="expense-item__price">{props.amount}</h3>
    </div>
  );
}

export default ExpenseItem;
