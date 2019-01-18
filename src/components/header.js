import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Image from '../components/image'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="wrapper">
      <a href="#main" className="hidden">Skip to Main</a>
      <a href="#footer" className="hidden">Skip to Footer</a>
      {/* <Link to="/" className="icon">
          <Image />
      </Link> */}
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
