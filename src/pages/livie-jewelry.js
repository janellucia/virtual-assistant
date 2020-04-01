import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'



const Type = (props) => (

  <Layout name="project-page">
    <SEO title="Livie Jewelry" />
    <section className="title">
      <div className="wrapper">
        <h1>Livie Jewelry</h1>
        <p className="subtitle">Branding and web design for online jewelry shop Livie Jewelry.</p>
        <div className="button-wrap">
          <a href="https://www.liviejewelry.com/" className="button" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>

    <div id="livie-jewelry" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating an online identity for a talented jewelry designer</h2>
          <p>Livie Jewelry designed by Jules Beliavski is an exclusive Toronto brand. The line is a balance of edgy with a hint of feminine, allowing for an easy transition of your look from day to night. The Livie customer likes to stand out with her layers of jewelry and knows how to strategically add a choker to complete a look.</p>
          <h3>Role</h3>
          <p>I was the lead designer/researcher on this project. I worked with stakeholders and developers to create Livie Jewelry's online identity.</p>
          <h3>The Challenge</h3>
          <p>The challenge was to take a new brand (Livie Jewelry) and create a well defined online strategy to grow with the brand.</p>
          <h3>The Solution</h3>
          <p>The solution was to deliver a well strategized online presence for real results. Success in this project will be measured by growth in customers and sales, and a new market of customers.</p>
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
    <section className="project-links">
      <div className="wrapper">
        <p className="thank-you">—Thank you </p>
      </div>
    </section>
    <section className="more-projects">
      <div className="wrapper">
        <h2 className="thank-you">Other Projects</h2>
        <a className="menu-item" href="/good-ones-academy">Good Ones Academy</a>
        <a className="menu-item" href="/daniela-bosco">Daniela Bosco</a>
        <a className="menu-item" href="/atria-coaching">Atria Coaching</a>
        <a className="menu-item" href="/bad-girls">Bad Girls Collective</a>
        <a className="menu-item" href="/livie-jewelry">Livie Jewelry</a>
        <a className="menu-item" href="/ivawithaneye">Iva with an eye</a>
        <a className="menu-item" href="/lettering-archive">Lettering Archive</a>
        <a className="menu-item" href="/girls-twenty">Girls 20</a>
      </div>
    </section>
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
