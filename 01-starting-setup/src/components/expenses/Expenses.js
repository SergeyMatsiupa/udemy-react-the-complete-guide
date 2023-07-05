import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

// function Expenses(props) {
const Expenses = (props) => {
  const [filterConditions, setFilterConditions] = useState({
    year: "",
  });
  // const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');
  let filterInfoText = "2019, 2021 & 2022";

  if (filterConditions.year === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filterConditions.year === "2020") {
    filterInfoText = "2019, 2021 & 2022";
  } else if (filterConditions.year === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }

  const filterExpensesHandler = (filterConditions) => {
    setFilterConditions((prevValue) => {
      return {
        ...prevValue,
        year: filterConditions.year,
      };
    });
    console.log("filterConditions.year", filterConditions.year);
    // if(filterConditions.year === "2019") {
    //   setFilterInfoText("2020, 2021 & 2022")
    // } else if(filterConditions.year === "2020") {
    //   setFilterInfoText("2019, 2021 & 2022")
    // } else if(filterConditions.year === "2021") {
    //   setFilterInfoText("2019, 2020 & 2022")
    // } else  {
    //   setFilterInfoText("2019, 2020 & 2021")
    // }
  };

  return (
    <div>
      <Card className="expenses">
        <p>Data for years {filterInfoText} is hidden.</p>
        <ExpensesFilter
          onFilter={filterExpensesHandler}
          selected={filterConditions.year}
        />
        {props.items.map((item) => {
          console.log("FFFFFF",item);
          return (
          <ExpenseItem
            key={item.key}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
          );
        })}
        {/* <ExpenseItem
          name={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          name={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          name={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          name={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
