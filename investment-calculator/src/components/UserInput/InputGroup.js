import classes from "./InputGroup.module.css";

const InputGroup = (props) => {
  return <div className={classes["input-group"]}>{props.children}</div>;
};

export default InputGroup;
