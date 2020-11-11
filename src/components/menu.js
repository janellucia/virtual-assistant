import React from "react";
import { slide as Menu } from "react-burger-menu";
import Image from './image'

export default props => {
  return (
    <Menu right disableAutoFocus customBurgerIcon={(<Image className="black" />)} className="menu-icon" >

      <a className="menu-item" href="/about">
        about
      </a>

      <a className="menu-item" href="/services">
        services
      </a>

      <a className="menu-item" href="/">
        portfolio
      </a>

      <a className="menu-item" href="mailto:hello@janellucia.com">
        contact
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

      <a href="https://www.linkedin.com/in/janel-lucia-designer-b7425b9a/" target="blank" rel="noopener noreferrer">
        linked-in
      </a>


    </Menu>
  );
};
