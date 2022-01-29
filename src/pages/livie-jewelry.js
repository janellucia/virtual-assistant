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
        <p className="subtitle">Branding and web design for a growing online jewelry shop.</p>
        <div className="button-wrap">
          <a href="https://www.liviejewelry.com/" className="button" target="_blank" rel="noopener noreferrer">View Website</a>
        </div>
      </div>
    </section>

    <div id="livie-jewelry" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating an online identity for a talented jewelry designer</h2>
          <p>Livie Jewelry designed by Jules Beliavski is an exclusive Toronto brand. The line is a balance of edgy with a hint of feminine, allowing for an easy transition of your look from day to night.</p>
          <p>I collaborated with Jules and her developer Chiara to create a logo and identity with strong typography and design a clean &amp; intuitive site on Shopify.</p>
          <p>Please take a look at the project below, I am driven by clean design, a clear message and the challenge of a custom layout, I am at your service for any collaboration.</p>

          <p></p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Branding</li>
              <li>Shopify Design</li>
              <li>Graphic Design</li>
              <li>Design Accessibility</li>
              <li>Web Accessibility</li>
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
