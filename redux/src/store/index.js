// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';

// const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     decrement(state) {
//       state.counter--;
//     },
//     increment(state) {
//       state.counter++;
//     },
//     increase(state, action) {
//       state.counter += action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = { isAuthenticated: false };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//         state.isAuthenticated = true;
//     },
//     logout(state) {
//         state.isAuthenticated = false;
//     }
//   },
// });

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const counterSubscriber = () => {};

// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);
// const store = configureStore({ reducer: counterSlice.reducer });
// const store = configureStore({reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}});
const store = configureStore({reducer: {counter: counterReducer, auth: authReducer}});
// store.subscribe(counterSubscriber);

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
