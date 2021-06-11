import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  let content = "No items in the list";
  return (
    <ul className="list-item">
      {props.items.length === 0 && content}
      {props.items.length > 0 &&
        props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </ul>
  );
};

export default ExpenseList;
