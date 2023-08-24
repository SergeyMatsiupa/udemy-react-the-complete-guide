import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink
            //   to="/"
              to=""
              className={({isActive}) => (isActive ? classes.active : undefined)}
              end
            //   style={({isActive}) => ({textAlign: isActive ? 'center' : 'left'})}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to="/products">Products</Link> */}
            <NavLink
            //   to="/products"
            to="products"
              className={({isActive}) => (isActive ? classes.active : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
