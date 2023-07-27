import React, { useRef, useEffect, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
        focus: activate
    };
  });

  return (
    <div
      className={`${classes.control} ${
        // emailIsValid === false ? classes.invalid : ""
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.caption}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        // value={enteredEmail}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
      />
    </div>
  );
});

export default Input;
