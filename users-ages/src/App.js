import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import InputForm from "./components/InputForm";
import UsersList from "./components/UsersList";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [userInput, setUserInput] = useState({
    userName: "",
    age: "",
  });

  const addUser = () => {
    if(!(userInput.userName)) {
      setErrorMsg("Please enter a non-empty Username.");
      return;
    }
    if(!(userInput.age > 0)) {
      setErrorMsg("Please enter a valid age (>0).");
      return;
    }
    setUsers((prevValues) => {
      return [
        ...prevValues,
        {
          ...userInput,
          uuid: uuidv4(),
        },
      ];
    });
    setUserInput({ userName: "", age: "" });
  };

  return (
    <div>
      <InputForm
        userInputVar={userInput}
        onSubmit={addUser}
        onChangeUser={setUserInput}
        setErrorMsg={setErrorMsg}
      />
      {users.length > 0 && <UsersList usersArr={users} />}
      {errorMsg && <ErrorModal errorMsg = {errorMsg} setErrorMsg={setErrorMsg}/>}
    </div>
  );
}

export default App;
