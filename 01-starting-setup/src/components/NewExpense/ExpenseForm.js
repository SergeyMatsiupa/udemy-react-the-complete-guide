import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
    console.log("enteredTitle", enteredTitle);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log("enteredAmount", enteredAmount);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log("enteredDate", enteredDate);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };
  
  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
        setEnteredTitle(value);
    } else if (identifier === 'date') {
        setEnteredDate(value);
    } else {
        setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
        // console.log("submit");
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
        // console.log('expenseData', expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={titleChangeHandler}></input> */}
          <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input> */}
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => inputChangeHandler('amount', event.target.value)} value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input> */}
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => inputChangeHandler('date', event.target.value)} value={enteredDate}
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
