import { useState } from "react";
import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setUserInput] = useState({
    ["current-savings"]: "",
    ["yearly-contribution"]: "",
    ["expected-return"]: "",
    duration: ""
  });
    const [yearlyData, setYearlyData] = useState([]);

  const resetHandler = () => {
    setYearlyData([]);
    setUserInput({
      ["current-savings"]: "",
      ["yearly-contribution"]: "",
      ["expected-return"]: "",
      duration: ""
    });
    // console.log('yearlyData', yearlyData);
    // console.log('userInput', userInput);
  }
  
  const calculateHandler = (userInput) => {
    // setYearlyData([]);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      // yearlyData.push({
      //   // feel free to change the shape of the data pushed to the array!
      //   year: i + 1,
      //   yearlyInterest: yearlyInterest,
      //   savingsEndOfYear: currentSavings,
      //   yearlyContribution: yearlyContribution,
      // });
        console.log('currentSavings', currentSavings);
      setYearlyData((prevValue) => {
        return [...prevValue, {
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        }];
      });
    }

    // do something with yearlyData ...
      console.log('yearlyData', yearlyData);
  };

  return (
    <div>
      <Header />
      <CalculatorForm 
      onCalculate = {calculateHandler}
      userInput = {userInput}
      userInputHandler = {setUserInput}
      onReset = {resetHandler}
      // yearlyData = {yearlyData}
      />
      <ResultTable dataTable = {yearlyData}/>
      {/* <p>{yearlyData.toString()}</p> */}
    </div>
  );
}

export default App;
