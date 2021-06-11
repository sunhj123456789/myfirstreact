import { useState } from "react";
import "./../NewExpense/expenseForm.css";
const ExpenseForm = (props) => {
  //   const [userInput, setInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  //   const changetitleHandler = (e) => {
  //     setInput((prevState) => {
  //       return { ...prevState, enteredTitle: e.target.value };
  //     });
  //   };

  //   const changeAmounteHandler = (e) => {
  //     setInput((prevState) => {
  //       return { ...prevState, enteredAmount: e.target.value };
  //     });
  //   };
  //   const changeDateHandler = (e) => {
  //     setInput((prevState) => {
  //       return { ...prevState, enteredDate: e.target.value };
  //     });
  //   };

  const [enterTitle, updateTitle] = useState("");
  const [enterAmount, updateAmount] = useState("");
  const [enterDate, updateDate] = useState("");
  const changetitleHandler = (e) => {
    updateTitle(e.target.value);
  };

  const changeAmounteHandler = (e) => {
    updateAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    updateDate(e.target.value);
  };

  const submitDate = (e) => {
    e.preventDefault();
    const userDate = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    //console.log(userDate);
    props.onGetFormSaveData(userDate);
    updateTitle("");
    updateAmount("");
    updateDate("");
  };

  return (
    <form onSubmit={submitDate}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={changetitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={changeAmounteHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
