import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const checkIfNotEmpty = (value) => {
    return value.trim() !== "";
  };
  const checkEmail = (value) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return value.trim().match(emailRegex);
  };

  const {
    enteredValue: enteredFirstName,
    enteredValueIsValid: enteredFirstNameIsValid,
    valueInputIsInvalid: firstNameInputIsInvalid,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(checkIfNotEmpty);
  const {
    enteredValue: enteredLastName,
    enteredValueIsValid: enteredLastNameIsValid,
    valueInputIsInvalid: lastNameInputIsInvalid,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(checkIfNotEmpty);
  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    valueInputIsInvalid: emailInputIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(checkEmail);

  const submitHandler = (event) => {
    event.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const formIsValid =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const firstNameInputClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="last-name"
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid e-mail address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
