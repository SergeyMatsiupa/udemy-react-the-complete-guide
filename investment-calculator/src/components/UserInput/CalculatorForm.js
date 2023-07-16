import InputGroup from "./InputGroup";
import Input from "./Input";

import classes from "./CalculatorForm.module.css";

function CalculatorForm(props) {
  const intCalculateHandler = (event) => {
    event.preventDefault();
    props.onCalculate(props.userInput);
  };

  const inputHandler = (event) => {
    console.log("event", event.target.id);
    props.userInputHandler((prevValue) => {
      return { ...prevValue, [event.target.id]: event.target.value };
    });
  };
    // console.log('props.userInput cf', props.userInput);

  return (
    <form className={classes.form} onSubmit={intCalculateHandler}>
      <InputGroup>
        <Input
          id={"current-savings"}
          key={"current-savings"}
          caption={"Current Savings ($)"}
          onChangeHandler={inputHandler}
          userInput = {props.userInput}
        />
        <Input
          id={"yearly-contribution"}
          key={"yearly-contribution"}
          caption={"Yearly Savings ($)"}
          onChangeHandler={inputHandler}
          userInput = {props.userInput}
        />
      </InputGroup>
      <InputGroup>
        <Input
          id={"expected-return"}
          key={"expected-return"}
          caption={"Expected Interest (%, per year)"}
          onChangeHandler={inputHandler}
          userInput = {props.userInput}
        />
        <Input
          id={"duration"}
          key={"duration"}
          caption={"Investment Duration (years)"}
          onChangeHandler={inputHandler}
          userInput = {props.userInput}
        />
      </InputGroup>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={props.onReset}
        >
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}
          // onClick={intCalculateHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculatorForm;
