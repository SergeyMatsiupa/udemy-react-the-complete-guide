import {
  Outlet,
  useNavigation,
  useSubmit,
  useLoaderData,
} from "react-router-dom";
import { useEffect } from "react";

import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const submit = useSubmit();
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }
    if(token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const tokenDuration = getTokenDuration();
    // const tokenDuration = 1111;
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
      // }, 1* 1000 * 60 * 60);
    }, tokenDuration);
  }, [submit, token]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
