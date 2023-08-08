import { useState, useRef, useEffect } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const inputRef = useRef();
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [nameInputTouched, setNameInputTouched] = useState(false);
  // const [emailInputTouched, setEmailInputTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = nameInputTouched && !enteredNameIsValid;
  // const emailRegex =
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // const enteredEmailIsValid = enteredEmail.trim().match(emailRegex);
  // const emailInputIsInvalid = emailInputTouched && !enteredEmailIsValid;

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  //   // if(event.target.value.trim() !== '') {
  //       // console.log('event.target.value.trim()', event.target.value.trim());
  //     // setEnteredNameIsValid(true);
  //   // }
  // };
  // const emailInputChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
  // };

  // const nameBlurHandler = (event) => {
  //   setNameInputTouched(true);
  //   // if(enteredName.trim() === "") {
  //     // setEnteredNameIsValid(false);
  //     // return;
  //   // }
  // }

  // const emailBlurHandler = (event) => {
    // setEmailInputTouched(true);
  // };

  const {
    enteredValue: enteredName,
    valueInputIsInvalid: nameInputIsInvalid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
    enteredValueIsValid: enteredNameIsValid,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    enteredValue: enteredEmail,
    valueInputIsInvalid: emailInputIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
    enteredValueIsValid: enteredEmailIsValid,
  } = useInput((value) => {
    return value.trim() !== "";
  });


  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setNameInputTouched(true);
    // setEmailInputTouched(true);
    // if(enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    // setEnteredName(true);
    // console.log("enteredName", enteredName);
    // const enteredNameFromInpRef = inputRef.current.value;
    // console.log("enteredNameFromInpRef", enteredNameFromInpRef);
    resetName();
    resetEmail();
    // setEnteredName("");
    // setEnteredEmail("");
    // setNameInputTouched(false);
    // setEmailInputTouched(false);
  };

  // const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid";
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid!");
    }
  }, [enteredNameIsValid]);

  let formIsValid = false;
  // useEffect(() => {
  if (enteredNameIsValid && enteredEmail) {
    // setFormIsValid(true);
    formIsValid = true;
  } else {
    // setFormIsValid(false);
    formIsValid = false;
  }
  // },[enteredNameIsValid]);

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className="form-control"> */}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          // ref={inputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          // ref={inputRef}
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
