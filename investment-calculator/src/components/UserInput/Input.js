const Input = (props) => {
  // console.log('props', props);
  // console.log('props.userInput ', props.userInput);
  return (
    <p>
      <label htmlFor={props.id}>{props.caption}</label>
      <input
        type="number"
        id={props.id}
        onChange={props.onChangeHandler}
        value={props.userInput[props.id]}
      />
    </p>
  );
};

export default Input;
