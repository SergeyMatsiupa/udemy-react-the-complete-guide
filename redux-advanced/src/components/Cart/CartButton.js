import classes from "./CartButton.module.css";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.cart.totalQuantity);

  const clickHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
