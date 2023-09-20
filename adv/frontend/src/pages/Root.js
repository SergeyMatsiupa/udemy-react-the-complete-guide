import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      {/* <p>MenuN</p> */}
      <main>
        <MainNavigation />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
