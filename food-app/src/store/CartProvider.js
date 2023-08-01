import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if(action.type==="ADD") {
    const newTotalAmount = state.totalAmount + action.item.price*action.item.amount;

    const existItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existItem = state.items[existItemIndex];
    let updatedItems;
    if(existItem) {
        updatedItems = [...state.items];
        let updatedItem = {
            ...action.item,
            amount: action.item.amount + existItem.amount
        };
        updatedItems[existItemIndex] = updatedItem;
    } else {
        updatedItems = state.items.concat(action.item);
    }
    return {
        items: updatedItems,
        totalAmount: newTotalAmount
    };
  } else if (action.type === "REMOVE") {
    let existItemIndex = state.items.findIndex((item) => item.id === action.id);
    let existItem = state.items[existItemIndex];
    let newTotalAmount = state.totalAmount - existItem.price;
    let updatedItems;
    if (existItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
        updatedItems = [...state.items];
        updatedItems[existItemIndex].amount = updatedItems[existItemIndex].amount - 1;
    }
    return {
        items: updatedItems,
        totalAmount: newTotalAmount
    };
  }
    return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({type: "ADD", item: item});
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
