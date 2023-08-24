import classes from "./Counter.module.css";
import { useDispatch, useSelector, connect } from "react-redux";
import { Component } from "react";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment())
  };
  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5});
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


// class Counter extends Component {
//   incrementHandler() {
//     return this.props.increment();
//   }

//   decrementHandler() {
//     return this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }
  
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
//         <div className={classes.value}>{this.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"}),
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

