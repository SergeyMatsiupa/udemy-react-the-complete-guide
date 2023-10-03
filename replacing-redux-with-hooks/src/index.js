import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";
// import ProductsContext from "./context/products-context";
import configureProductsStore from "./hooks-store/product-store";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

configureProductsStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  // <ProductsContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductsContext>
  // </Provider>
);
