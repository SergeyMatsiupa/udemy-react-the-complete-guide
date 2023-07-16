import { useState } from "react";
import Header from "./components/Header/Header";
import CalculatorForm from "./components/UserInput/CalculatorForm";
import ResultTable from "./components/ResultsTable/ResultTable";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialUserInput);
  const [yearlyData, setYearlyData] = useState([]);

  const resetHandler = () => {
    setYearlyData([]);
    setUserInput(initialUserInput);
  };

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // const yearlyData = []; // per-year results

    let currentSavings = Number(userInput["current-savings"]); // feel free to change the shape of this input object!
    const yearlyContribution = Number(userInput["yearly-contribution"]); // as mentioned: feel free to change the shape...
    const expectedReturn = Number(userInput["expected-return"] / 100);
    const duration = parseInt(userInput["duration"], 10);

    const newItems = [];
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
      newItems.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest:
          i === 0
            ? yearlyInterest
            : newItems[i - 1].totalInterest + yearlyInterest,
        investedCapital:
          i === 0
            ? yearlyInterest
            : currentSavings - (newItems[i - 1].totalInterest + yearlyInterest),
      });
    }
    // do something with yearlyData ...
    setYearlyData(newItems);
  };

  return (
    <div>
      <Header />
      <CalculatorForm
        onCalculate={calculateHandler}
        userInput={userInput}
        userInputHandler={setUserInput}
        onReset={resetHandler}
      />
      <ResultTable dataTable={yearlyData} />
    </div>
  );
}

export default App;
