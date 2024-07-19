import React from "react";
import Style from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_flex}>
        <div className={Style.logo}>
          <Link to="/" className={Style.mantine}>
            Mantine
          </Link>
        </div>
        <div className={Style.nav_element}>
          <Link to="/" className={Style.home}>
            Home
          </Link>
          <Link to="/store" className={Style.store}>
            Store
          </Link>
          <Link to="/Cart" className={Style.cart}>
            Cart
            <div className={Style.carts_logo}></div>
          </Link>
        </div>
        <div className={Style.a3}></div>
      </div>
      <Link to='/Electronics'></Link>
    </div>
  );
};
export default Navbar;
