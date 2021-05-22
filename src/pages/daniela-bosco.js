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
        <div className="button-wrap">
          <a href="https://www.danielabosco.com/" className="button" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>

    <div id="daniela-bosco" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Website designed and built for a talented Art Director.</h2>
          <p>Daniela is an extremely talented Art Director from Toronto, her work ranges from creative direction, styling &amp; commercial work. </p>
          <h3>Role</h3>
          <p>Lead web designer/developer — I worked with Daniela to create an online portfolio to suite her needs.</p>
          <h3>The Challenge</h3>
          <p>Take an established Art Director (Daniela Bosco) and create a portfolio website to grow with her brand.</p>
          <h3>The Solution</h3>
          <p>Deliver a well strategized online presence for real results. Success in this project will be measured by growth in editorial projects booked.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Website Design</li>
              <li>Squarespace Build</li>
              {/* <li>Brand Strategy</li> */}
            </ul>
          </div>
        </div>
      </section>
      {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} /> */}
      <img src={GIF} alt="" />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      {/* <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      <Img fluid={props.data.imageSix.childImageSharp.fluid} /> */}
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
