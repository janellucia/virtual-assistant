import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
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
