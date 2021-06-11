import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import Card from "./Card";
import "./Expenses.css";

import { useState } from "react";

function Expenses(props) {
  const [year, updateYear] = useState("2020");
  //const filterOptions=props.i
  const getSelectedYear = (year) => {
    updateYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseFilter selected={year} selectedDate={getSelectedYear} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
