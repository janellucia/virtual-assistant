// import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const Marquee = ({ marqueeContents }) => (
  <div class="cp_wrapper">
    <section id="marquee">
      <div class="marquee" data-text={marqueeContents}>
      </div>
    </section>
  </div>
)

Marquee.propTypes = {
  marqueeContents: PropTypes.string,
}

Marquee.defaultProps = {
  marqueeContents: `Administration  •  Email Management  •  Appointment Scheduling  •  Data Entry  •  Website Updates  •  Blog Management  •  Photo Editing  • `,
}

export default Marquee
