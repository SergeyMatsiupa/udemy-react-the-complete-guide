import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) =>{
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data!",
      })
    );
    
    const fetchCartDataRequest = async () => {
      const response = await fetch("https://react-http-3d40f-default-rtdb.firebaseio.com/cart.json");
      if (!response.ok) {
        throw new Error("Fetching cart data failed");
      }
      const data = await response.json();
      return data;
    }

    try {
      const data = await fetchCartDataRequest();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Fetch cart data successfully!",
        })
      );
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity
        }),
      );
    } catch {
      uiActions.setNotification({
        status: "error",
        title: "Error!",
        message: "Fetching cart data failed!",
      });
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendCartDataRequest = async (cart) => {
      const response = await fetch(
        "https://react-http-3d40f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendCartDataRequest(cart);
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};