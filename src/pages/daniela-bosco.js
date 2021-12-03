import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import GIF from '../images/daniela/daniela.gif'
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Type = (props) => (

  <Layout name="project-page">
    <SEO title="Daniela Bosco" />
    <section className="title">
      <div className="wrapper">
        <h1>Daniela Bosco</h1>
        <p className="subtitle">Designing and creating a portfolio website for an Art Director on Squarespace</p>
      </div>
    </section>

    <div id="daniela-bosco" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Website designed and built for a talented Art Director.</h2>
          <p>Daniela is an extremely talented Art Director from Toronto, her work ranges from creative direction, styling &amp; commercial work. </p>
          <div className="button-wrap">
            <a href="https://www.danielabosco.com/" className="button" target="_blank" rel="noopener noreferrer">View Daniela's Website</a>
          </div>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Website Design</li>
              <li>Squarespace Build</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="gatsby-image-wrapper"><img src={GIF} alt="" /></div>
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />

    </div>
    <Projectfooter />
  </Layout>
)

export default Type

export const pageQuery = graphql`
  query {
      imageOne: file(relativePath: {eq: "livie/livie-one.png" }) {
      childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
    }
    }
  }
    imageTwo: file(relativePath: {eq: "livie/livie-two.png" }) {
      childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
    }
    }
  }
    imageThree: file(relativePath: {eq: "daniela/daniela-one.png" }) {
      childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
    }
    }
  }
    imageFour: file(relativePath: {eq: "livie/livie-type.png" }) {
      childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
    }
    }
  }
    imageFive: file(relativePath: {eq: "livie/livie-three.png" }) {
      childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
    }
    }
  }
    imageSix: file(relativePath: {eq: "livie/livie-four.png" }) {
      childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
    }
    }
  }
}
`
