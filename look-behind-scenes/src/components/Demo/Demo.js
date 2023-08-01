import React from "react";
import MyParagraph from "./MyParagraph";

const Demo = (props) => {
  console.log("demo running");
  return (
    //   <p>{props.show && "This is new!"}</p>
    <MyParagraph>{props.show && "This is new!"}</MyParagraph>
  );
};

export default React.memo(Demo);
