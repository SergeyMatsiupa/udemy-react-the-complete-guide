import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("app running");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevVisibility) => !prevVisibility);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <Demo show={false}/>
      <Button onClick={toggleParagraphHandler}>
        Toggle paragraph!
      </Button>
    </div>
  );
}

export default App;
