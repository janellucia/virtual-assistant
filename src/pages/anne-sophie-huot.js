import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'

import ash from '../images/home/ash-home-2.gif';


const AnneSophie = (props) => (

  <Layout name="project-page">
    <SEO title="Anne-Sophie Huot photography" />
    <section className="title">
      <div className="wrapper">
        <h1>Anne-Sophie Huot</h1>
        <p className="subtitle">Building a Squarespace site for a Photographer &amp; Art Director</p>
      </div>
    </section>

    <div id="ash" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Custom Squarespace site</h2>
          <p>Anne-Sophie Huot is a Photographer and Art Director who specializes in Digital + Film content creation, and Commercial photography.</p>
          <p>I worked with Anne-Sophie to create a logo and brand identity with strong typography and to also build her website on Squarespace with custom coding, web accessibility and French and English site options for each side of Anne-Sophie’s users.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Squarespace site</li>
              <li>French/English</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="two-images">
          <div className="gatsby-image-wrapper"><img src={ash} alt="" className="gif" /></div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
        </div>
      </section>



    </div>
    <Projectfooter />
  </Layout>
)

export default AnneSophie

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "ash/ash-logo.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "ash/type.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "ash/type-two.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "ash/site-eng.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "ash/site-fr.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "ash/site-1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSeven: file(relativePath: {eq: "ash/ash-logo-black.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEight: file(relativePath: {eq: "ash/site-2.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageNine: file(relativePath: {eq: "ash/site-3.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`
