import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <Fragment>
      {/* <h1>Root Layout</h1> */}
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
