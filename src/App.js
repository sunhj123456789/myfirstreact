import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenseForm from "./components/NewExpense/NewExpense";

const Initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseItem, updateExpenseItem] = useState(Initial_expenses);
  const expenseData = (data) => {
    console.log(data);
    updateExpenseItem((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <div>
      <NewExpenseForm onGetNewExpense={expenseData} />
      <Expenses items={expenseItem} />
    </div>
  );
}

export default App;
