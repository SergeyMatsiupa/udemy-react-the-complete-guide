import React from "react";
import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {
  //   const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];
  //   const cssClasses = [
  //     "Modal",
  //     props.show === "entering"
  //       ? "ModalOpen"
  //       : props.show === "exiting"
  //       ? "ModalClosed"
  //       : null,
  //   ];

  return (
    // <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
    // <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit
    // onEnter={() => console.log("onEnter")}
    // onEntering={() => console.log("onEntering")}
    // onEntered={() => console.log("onEntered")}
    // onExit={() => console.log("onExit")}
    // onExiting={() => console.log("onExiting")}
    // onExited={() => console.log("onExited")}
    // >
   <CSSTransition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit
    onEnter={() => console.log("onEnter")}
    onEntering={() => console.log("onEntering")}
    onEntered={() => console.log("onEntered")}
    onExit={() => console.log("onExit")}
    onExiting={() => console.log("onExiting")}
    onExited={() => console.log("onExited")}
    // classNames="fade-slide"
    classNames={{
        enter: '',
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        // appear: "",
        // appearActive: ""
    }}
    >
      {/* {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return ( */}
          {/* // <div className="Modal"> */}
          {/* <div className={cssClasses.join(" ")}> */}
          <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        {/* ); */}
      {/* }} */}
    {/* </Transition> */}
    </CSSTransition>
  );
};

export default modal;
