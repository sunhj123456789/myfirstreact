import ExpenseForm from "./expenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpenseForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const getNewExpenseFormData = (expense) => {
    const saveData = {
      ...expense,
      id: Math.random().toString(),
    };
    //console.log(saveData);
    props.onGetNewExpense(saveData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onGetFormSaveData={getNewExpenseFormData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenseForm;
