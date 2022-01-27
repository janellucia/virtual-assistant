import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'

import GIF from '../images/steph/sb-logo-animation.gif'


const Stephanie = (props) => (

  <Layout name="project-page">
    <SEO title="Stephanie Boridy Astrology" />
    <section className="title">
      <div className="wrapper">
        <h1>Stephanie Boridy</h1>
        <p className="subtitle">Building a Shopify site for an experienced Astrologer</p>
        <div className="button-wrap">
          <a href="https://stephanieboridy.com/" className="button" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>

    <div id="bad-girls" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Custom Shopify site built for a growing astrology brand.</h2>
          <p>Stephanie is a talented Astrologer helping her clients step into their confidence + joy with astrology, tarot & intuition. Stephanie is constantly evolving and we needed to create visuals that will give her room to grow while also establishing a polished look to reflect the personality of the brand.</p>
          <p>I worked with Stephanie to create a unique brand identity, logo, custom Shopify website and a social media strategy.</p>
          <p>Please take a look at the project below, I am driven by clean design, clear typography and the challenge of a custom layout, I am at your service for any collaboration.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Branding</li>
              <li>Logo</li>
              <li>Custom Shopify Build</li>
              <li>Site Guide</li>
              <li>Social Media</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="two-images">
          <div className="gatsby-image-wrapper"><img src={GIF} alt="" className="gif" /></div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />

        </div>
      </section>

      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />

    </div>
    <Projectfooter />
  </Layout>
)

export default Stephanie

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "steph/logo.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "steph/colours.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "steph/insta.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "steph/stories.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "steph/site.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }

}
`
