import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.val, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  } else if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  console.log('noooo');
  return state;
};

const useInput = (validateValue) => {
  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [valueInputTouched, setValueInputTouched] = useState(false);
  const [inputState, dispatchInput] = useReducer(inputStateReducer, initialInputState);

  //   const enteredValueIsValid = validateValue(enteredValue);
  const enteredValueIsValid = validateValue(inputState.value);
  //   const valueInputIsInvalid = valueInputTouched && !enteredValueIsValid;
  const valueInputIsInvalid = inputState.isTouched && !enteredValueIsValid;

  const valueInputChangeHandler = (event) => {
    // setEnteredValue(event.target.value);
    dispatchInput({ type: "INPUT", val: event.target.value });
  };

  const valueBlurHandler = (event) => {
    // setValueInputTouched(true);
    dispatchInput({ type: "BLUR" });
  };

  const reset = () => {
    // setEnteredValue("");
    // setValueInputTouched(false);
    dispatchInput({type: "RESET"});
  };

  return {
    // enteredValue,
    enteredValue: inputState.value,
    enteredValueIsValid,
    valueInputIsInvalid,
    valueInputChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
