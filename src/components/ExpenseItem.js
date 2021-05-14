import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenstionItem(props) {
  const [title, setTitle] = useState(props.title);
  //const data = useState(props.title);

  const changeTitle = () => {
    console.log("clicked");
    setTitle("we updated the Title");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button type="button" onClick={changeTitle}>
          Change the Title
        </button>
      </div>
    </div>
  );
}

export default ExpenstionItem;
