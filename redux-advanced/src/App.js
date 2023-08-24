import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
// import { sendCartData, fetchCartData } from "./store/cart-slice";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cartIsVisible = useSelector((store) => store.ui.cartIsVisible);
  const cart = useSelector((store) => store.cart);
  const notification = useSelector((store) => store.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.setNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data!",
    //     })
    //   );

    //   const response = await fetch(
    //     "https://react-http-3d40f-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify({
    //         items: cart.items,
    //         totalQuantity: cart.totalQuantity,
    //       }),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Sending cart data failed");
    //   }

    //   dispatch(
    //     uiActions.setNotification({
    //       status: "success",
    //       title: "Success!",
    //       message: "Sent cart data successfully!",
    //     })
    //   );
    // };

    if (isInitial) {
      isInitial = false;
      return;
    }

    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.setNotification({
    //       status: "error",
    //       title: "Error!",
    //       message: "Sending cart data failed!",
    //     })
    //   );
    // });
    if (cart.isChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
