import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Issurance';
  // const expenseAmount = 294.67;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("Clicked!");
    setTitle("Updated!");
  };
  console.log("props", props);
  console.log("props.title", props.title);
  console.log("title", title);
  return (
    // <h2>Expense item!</h2>
    <li>
      <Card className="expense-item">
        {/* <div>{expenseDate.toISOString()}</div> */}
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{expenseTitle}</h2> */}
          {/* <h2>{props.title}</h2> */}
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={() => {console.log("clicked")}}>Change Title</button> */}
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
