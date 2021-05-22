import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'

const Easy = (props) => (
  <Layout name="project-page good-ones">
    <SEO title="Good Ones Academy" />
    <section className="title good-title">
      <div className="wrapper">
        <h1>Good Ones Academy</h1>
        <p className="subtitle">A group of artists bringing technical education for the contemporary forward thinking beauty professionals.</p>
        <div className="button-wrap">
          <a href="https://invis.io/SGS36PZCEY9#/364068922_loading_Screen" className="button" target="_blank" rel="noopener noreferrer">View Invision Prototype</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating an online platform for an evolving brand and business</h2>
          <p>The good ones academy started as a group of artists collaborating to bring in-person hair workshops to beauty professionals looking to level up their skills. Their workshops were a hit and the good ones academy quickly became industry leaders teaching high end, quality workshops to some of Toronto’s top talent.</p>
          {/* <p>When The Good Ones came to me with the desire to move their workshops online I set out to solve this design problem using the 5 Planes of UX Methodology.</p> */}
          <h3>Role</h3>
          <p>Lead designer — I created an online strategy and design system for the good ones academy.</p>
          <h3>The Challenge</h3>
          <p>Come up with an informed and researched online strategy and design system for an evolving brand and business.</p>
          <h3>The Solution</h3>
          <p>Design an online strategy from the ground up, capturing the brand's excitement and value in an online educational platform. I then built a highly-effective website that helps educate beauty professionals.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Facilitate Discussions</li>
              <li>User Research</li>
              <li>Design Strategy</li>
              <li>Website Assets</li>
              <li>High Fidelity Prototype</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="good-final-images">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <Projectfooter />
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "good-ones/good-stickies-user-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "good-ones/good-stickies-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "good-ones/good-user-personas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "good-ones/good-user-journey-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "good-ones/good-user-journey-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "good-ones/good-ones-wireframes.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "good-ones/good-ones-wireframes-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "good-ones/good-colour-type-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "good-ones/good-colour-palette.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "good-ones/good-typography.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "good-ones/good-screens-desktop-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "good-ones/good-screens-desktop-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "good-ones/good-logo-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "good-ones/good-screens-desktop-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "good-ones/good-screens-desktop-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "good-ones/good-screens-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "good-ones/good-screens-mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEighteen: file(relativePath: { eq: "good-ones/good-logo-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNineteen: file(relativePath: { eq: "good-ones/good-screens-mobile-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwenty: file(relativePath: { eq: "good-ones/good-screens-mobile-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }


`
