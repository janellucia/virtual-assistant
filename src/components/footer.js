// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className="wrapper">
      <section className="contact">
        <p>Interested in working together?</p>
        <a href="mailto:hello@janellucia.com">Inquire Here</a>
      </section>
      <section className="credits">
        <p>&copy; 2016 – {(new Date().getFullYear())} janel lucia.</p>
        {/* <p>this site was designed and created by yours truly.</p> */}
      </section>
      <section className="social">
        <a href="https://dribbble.com/janellucia" target="blank" rel="noopener noreferrer">dribbble</a>
        <a href="https://www.instagram.com/janellucia/" target="blank" rel="noopener noreferrer">insta</a>
        <a href="https://twitter.com/janellucia" target="blank" rel="noopener noreferrer">twitter</a>
        <a href="https://www.linkedin.com/in/janel-lucia-b7425b9a/" target="blank" rel="noopener noreferrer">linked-in</a>
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
