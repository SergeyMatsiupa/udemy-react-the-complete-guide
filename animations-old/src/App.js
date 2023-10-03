import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => {
            this.setState((oldState) => ({ showBlock: !oldState.showBlock }));
          }}
        >
          Toggle
        </button>
        {/* {this.state.showBlock && ( */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {/* {(state) => (<p>{state}</p>)} */}
          {/* <div
            style={{
              backgroundColor: "red",
              height: 100,
              width: 100,
              margin: "auto",
            }}
          ></div> */}
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                height: 100,
                width: 100,
                margin: "auto",
                opacity: state === "exiting" ? 0 : 1,
                transition: "all 1s ease-out",
              }}
            ></div>
          )}
        </Transition>
        {/* )} */}
        {/* <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> */}
        {/* {this.state.modalIsOpen ? (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        ) : null} */}
        {/* <Transition in={this.state.modalIsOpen} mountOnEnter unmountOnExit>
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition> */}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {/* <Backdrop show={this.state.modalIsOpen} /> */}
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
