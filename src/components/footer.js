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
        <a href="mailto:hello@janellucia.com">Get in touch</a>
      </div>
    </section>
    <section class="bottom-footer">
      <div class="wrapper">
        <div className="credits">
          <p>&copy; {(new Date().getFullYear())} virtually aligned.</p>
          {/* <p>this site was designed and created by yours truly.</p> */}
        </div>
        <div className="social">
          <a href="https://www.instagram.com/janellucia/" target="blank" rel="noopener noreferrer">insta</a>
          <a href="https://www.tiktok.com/@sense.addictions" target="blank" rel="noopener noreferrer">tiktok</a>
          <a href="https://www.linkedin.com/in/janel-lucia-designer-b7425b9a/" target="blank" rel="noopener noreferrer">linked-in</a>
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
