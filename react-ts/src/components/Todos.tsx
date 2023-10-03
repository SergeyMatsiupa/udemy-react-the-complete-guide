import React, { useContext } from "react";

import TodoItem from "./TodoItem";
// import Todo from "../models/todo";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

// function Todos() {
// const Todos: React.FC<{items: string[]}> =(props) => {
// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props
// ) => {
const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {/* <li>todo 1</li>
      <li>todo 2</li>
      <li>todo 3</li> */}
      {/* {props.items.map((item) => ( */}
      {ctx.items.map((item) => (
        // <li key={item}>{item}</li>
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          text={item.text}
          // onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
