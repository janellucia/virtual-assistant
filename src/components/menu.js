import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu right disableAutoFocus customBurgerIcon={ <img src="../images/icons/menu-2.png" alt="menu icon" /> } >
      <a className="menu-item" href="/">
        Home
      </a>

      {/* <a className="menu-item" href="/good-ones-academy">
        The Good Ones
      </a> */}

      <a className="menu-item" href="/next-step-forward">
        Next Step Forward
      </a>

      <a className="menu-item" href="/easy-rider">
        Easy Rider
      </a>

      <a className="menu-item" href="/kindred-academy">
        Kindred Academy
      </a>

    </Menu>
  );
};