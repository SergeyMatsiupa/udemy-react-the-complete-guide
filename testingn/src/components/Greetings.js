import { useState } from "react";

import Output from "./Output";

function Greetings() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {/* {!changedText && <p>it's good to see you</p>} */}
      {!changedText && <Output>it's good to see you</Output>}
      {/* {changedText && <p>Changed!</p>} */}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
}

export default Greetings;
