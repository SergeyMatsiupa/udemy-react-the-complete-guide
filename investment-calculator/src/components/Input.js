const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.id}>{props.caption}</label>
      <input type="number" id={props.id} onChange={props.onChangeHandler}/>
    </p>
  );
};

export default Input;
