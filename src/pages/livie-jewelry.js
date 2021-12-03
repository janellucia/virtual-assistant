import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Type = (props) => (

  <Layout name="project-page">
    <SEO title="Livie Jewelry" />
    <section className="title">
      <div className="wrapper">
        <h1>Livie Jewelry</h1>
        <p className="subtitle">Branding and web design for online jewelry shop Livie Jewelry.</p>
      </div>
    </section>

    <div id="livie-jewelry" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating an online identity for a talented jewelry designer</h2>
          <p>Livie Jewelry designed by Jules Beliavski is an exclusive Toronto brand. The line is a balance of edgy with a hint of feminine, allowing for an easy transition of your look from day to night. The Livie customer likes to stand out with her layers of jewelry and knows how to strategically add a choker to complete a look.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Branding</li>
              <li>Website Design</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
      </section>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      <Img fluid={props.data.imageSix.childImageSharp.fluid} />
    </div>
    <Projectfooter />
  </Layout>
)

export default Type

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "livie/livie-one.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "livie/livie-two.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "livie/livie-colours.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "livie/livie-type.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "livie/livie-three.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "livie/livie-four.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
