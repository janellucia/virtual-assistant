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

      <a className="menu-item" href="/contact">
        contact
      </a>

      <p className="case-studies">
        let's connect
      </p>


      <a href="https://www.instagram.com/janellucia/" target="blank" rel="noopener noreferrer">
        insta
      </a>

      <a href="https://www.tiktok.com/@sense.addictions" target="blank" rel="noopener noreferrer">
        tiktok
      </a>

      <a href="https://www.twitter.com/janellucia/" target="blank" rel="noopener noreferrer">
        twitter
      </a>

      <a href="https://www.linkedin.com/in/janel-lucia-designer-b7425b9a/" target="blank" rel="noopener noreferrer">
        linked-in
      </a>


    </Menu>
  );
};
