import PropTypes from 'prop-types'
import React from 'react'

// import Menu from "./menu";

const Header = ({ siteTitle }) => (
  <header>
    <a href="#main" className="hidden">Skip to Main</a>
    <a href="#footer" className="hidden">Skip to Footer</a>
    <nav className="wrapper">
      <h1 className="logo"><a href="/">janel lucia</a></h1>
      <ul>
        <li><a href="/about">about</a></li>
        <li><a href="/services">services</a></li>
        <li><a href="/">portfolio</a></li>
        <li><a href="mailto:hello@janellucia.com" className="contact-menu-item">contact</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

