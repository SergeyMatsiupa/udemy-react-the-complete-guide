import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
            console.log('timer', timer);
        },300);

        return () => {
            clearTimeout(timer);
                console.log("clearing");
        };
    },[items]);
    
    return (
        <button className={buttonClasses} onClick={props.onClickHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;