import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
// import Todo from './models/todo';
import TodosContextProvider from "./store/todos-context";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(new Todo(todoText));
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   });
  // };

  return (
    // <div >
    //   {/* <Todos></Todos> */}
    //   {/* <Todos items={["Lern React", "Learn TypeScript"]} /> */}
    //   {/* <NewTodo onAddTodo={addTodoHandler} /> */}
    //   {/* <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
    // </div>
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
