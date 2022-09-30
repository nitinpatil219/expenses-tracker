import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //  enteredTitle: "",
  //  enteredAmount: "",
  //  selectedDate: "",
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredTitle: event.target.value,
    //});
    //Use function syntax whenever stateupdate  dependes on previous stateupdate
    //setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: //event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  selectedDate: event.target.value,
    //});
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(selectedDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setSelectedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={selectedDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
