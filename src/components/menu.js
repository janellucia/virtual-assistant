import React from "react";
import { slide as Menu } from "react-burger-menu";
import Image from './image'
import ImageWhite from './image-white'
// import Image from "./menu-2.svg";

export default props => {
  return (
    <Menu right disableAutoFocus customBurgerIcon={ (<span><Image className="black"/><ImageWhite className="white"/></span>) } className="menu-icon" >
      <a className="menu-item" href="/">
        home
      </a>

      <a className="menu-item" href="/about">
        about
      </a>

      <a className="menu-item" href="mailto:thejanellucia@gmail.com">
        contact
      </a>

      <p className="case-studies">
        case studies
      </p>

      <a className="menu-item" href="/good-ones-academy">
        the good ones
      </a>

      <a className="menu-item" href="/next-step-forward">
        next step forward
      </a>

      <a className="menu-item" href="/easy-rider">
        easy rider
      </a>

      <a className="menu-item" href="/kindred-academy">
        kindred academy
      </a>

      <p className="case-studies">
        follow me
      </p>

      <a href="https://dribbble.com/janellucia" target="blank" rel="noopener noreferrer">
        dribbble
      </a>

      <a href="https://www.instagram.com/janellucia/" target="blank" rel="noopener noreferrer">
        insta
      </a>

      <a href="https://twitter.com/janellucia" target="blank" rel="noopener noreferrer">
        twitter
      </a>

      <a href="https://www.linkedin.com/in/janel-lucia-b7425b9a/" target="blank" rel="noopener noreferrer">
        linked-in
      </a>


    </Menu>
  );
};
