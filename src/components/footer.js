// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Testimonials from '../components/testimonials'


const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className='wrapper'>
      <Testimonials />
    </div>
    <section className="contact">
      <div className="wrapper">
        <p>I acknowledge that I, live, work and play on the unceded, ancestral territories of the Haudenosaunee, Anishinabewaki, Mississaugas of the Credit First Nation, Mississauga, and the Wendake-Nionwentsïo nations.</p>
        <p>Virtual Assistant Services in Toronto.</p>
        <a href="mailto:hello@janellucia.com">Book a call</a>
      </div>
    </section>
    <section class="bottom-footer">
      <div class="wrapper">
        <div className="credits">
          <p>&copy; {(new Date().getFullYear())} virtually aligned.</p>
          {/* <p>this site was designed and created by yours truly.</p> */}
        </div>
        <div className="social">
          <a href="/about">about</a>
          <a href="/services">services</a>
          <a href="/contact" className="contact-menu-item">contact</a>
        </div>
      </div>
    </section>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
