import PropTypes from 'prop-types'
import React from 'react'

// import Menu from "./menu";

const Header = ({ siteTitle }) => (
  <header>
    <a href="#main" className="hidden">Skip to Main</a>
    <a href="#footer" className="hidden">Skip to Footer</a>
    <nav className="wrapper">
      <h1 className="logo"><a href="/">janel lucia.</a></h1>
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li className="drop-down-wrap" tabIndex="0">
          <p className="drop-down-item">case studies</p>
          <ul className="drop-down-menu">
            <li><a href="/good-ones-academy">the good ones</a></li>
            <li><a href="/next-step-forward">next step forward</a></li>
            <li><a className="menu-item" href="/easy-rider">easy rider</a></li>
            <li><a className="menu-item" href="/kindred-academy">kindred academy</a></li>
          </ul>
        </li>
        <li><a href="mailto:thejanellucia@gmail.com" className="contact-menu-item">contact</a></li>
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

