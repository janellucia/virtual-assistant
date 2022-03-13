// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className="wrapper for-designers" id="shop-links">
      <section className="contact">
        <h3>Shop Prints</h3>
        {/* <a href="https://society6.com/letteringarchive/prints" target="blank">Instagram Templates</a> */}
        <a href="https://society6.com/letteringarchive/prints" target="blank">Typography Prints</a>
        <a href="https://society6.com/senseaddictions/all" target="blank">Floral Prints</a>
      </section>
    </div>
    {/* <div className="wrapper for-designers">
      <section className="contact">
        <h3>Resources for Designers</h3>
        <p>Are you looking to break into design or establish yourself as a freelance designer? <br></br>I can to guide you through growing a sustainable &amp; supported design business that lights you up instead of burning you out. I share all my industry secrets that I wish I knew when I started as a designer.</p>
        <a href="/coaching">Learn More</a>
      </section>
    </div> */}
    <div className="wrapper">
      <section className="contact">
        <p>I acknowledge that I, live, work and play on the unceded, ancestral territories of the Haudenosaunee, Anishinabewaki, Mississaugas of the Credit First Nation, Mississauga, and the Wendake-Nionwentsïo nations.</p>
        <p>Graphic Design Services in Toronto.</p>
        <a href="mailto:hello@janellucia.com">Get in touch</a>
      </section>
      <section className="credits">
        <p>&copy; 2016 – {(new Date().getFullYear())} janel lucia.</p>
        {/* <p>this site was designed and created by yours truly.</p> */}
      </section>
      <section className="social">
        <a href="https://www.instagram.com/janellucia/" target="blank" rel="noopener noreferrer">insta</a>
        <a href="https://www.tiktok.com/@janellucia" target="blank" rel="noopener noreferrer">tiktok</a>
        <a href="https://www.linkedin.com/in/janel-lucia-designer-b7425b9a/" target="blank" rel="noopener noreferrer">linked-in</a>
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
