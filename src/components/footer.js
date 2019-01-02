// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className="wrapper">
      <section className="credits">
        <p>&copy; {(new Date().getFullYear())} janel lucia. all rights reserved.</p>
      </section>
      <section className="social">
        <a href="https://www.instagram.com/janellucia/" target="blank">instagram</a>
        <a href="https://twitter.com/janellucia" target="blank">twitter</a>
        <a href="https://www.linkedin.com/in/janel-lucia-b7425b9a/" target="blank">linked-in</a>
        <a href="https://github.com/janellucia" target="blank">github</a>
      </section>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
