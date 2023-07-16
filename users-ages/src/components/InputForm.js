
import Button from "./Button";

import classes from "./FormContainer.module.css";
import classes1 from "./InputForm.module.css";

const InputForm = (props) => {
  const inputHandler = (event) => {
    props.setErrorMsg();
    props.onChangeUser((prevValue) => {
      return {
        ...prevValue,
        [event.target.id]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes1.form}>
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" onChange={inputHandler} value={props.userInputVar.userName}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={inputHandler} value={props.userInputVar.age}/>
        <Button type={"submit"} caption={"Add User"} />
      </form>
    </div>
  );
};

export default InputForm;
