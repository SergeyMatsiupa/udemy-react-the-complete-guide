import InputGroup from "./InputGroup";
import Input from "./Input";

function CalculatorForm(props) {
  const intCalculateHandler = (event) => {
    event.preventDefault();
    props.onCalculate(props.userInput);
  }


  const inputHandler = (event) => {
    console.log('event', event.target.id);
    // props.userInput[event.target.id] = event.target.value;
    props.userInputHandler(prevValue => {
        return (
            {...prevValue,
            [event.target.id] : event.target.value}
        );
    })
  }
  
    return (
    <form className="form">
      <InputGroup>
        <Input
          id={"current-savings"}
          key={"current-savings"}
          caption={"Current Savings ($)"}
          onChangeHandler={inputHandler}
        />
        <Input
          id={"yearly-contribution"}
          key={"yearly-contribution"}
          caption={"Yearly Savings ($)"}
          onChangeHandler={inputHandler}
        />
      </InputGroup>
      <InputGroup>
        <Input
          id={"expected-return"}
          key={"expected-return"}
          caption={"Expected Interest (%, per year)"}
          onChangeHandler={inputHandler}
        />
        <Input
          id={"duration"}
          key={"duration"}
          caption={"Investment Duration (years)"}
          onChangeHandler={inputHandler}
        />
      </InputGroup>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={props.onReset}>
          Reset
        </button>
        <button type="submit" className="button" onClick={intCalculateHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculatorForm;
