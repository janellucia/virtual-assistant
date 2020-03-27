import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import GIF from '../images/daniela/daniela.gif'
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'



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
          <h3>Role</h3>
          <p>I was the lead designer/developer on this project. I worked with Daniela to create an online portfolio to suite her needs.</p>
          <h3>The Challenge</h3>
          <p>The challenge was to take an established Art Director (Daniela Bosco) and create a portfolio website to grow with her brand.</p>
          <h3>The Solution</h3>
          <p>The solution was to deliver a well strategized online presence for real results. Success in this project will be measured by growth in editorial projects booked.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Website Design</li>
              <li>Squarespace Build</li>
              <li>Brand Strategy</li>
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
        <a className="menu-item" href="/girls-twenty">Livie Jewelry</a>
        <a className="menu-item" href="/ivawithaneye">Iva with an eye</a>
        <a className="menu-item" href="/lettering-archive">Lettering Archive</a>
        <a className="menu-item" href="/easy-rider">Girls 20</a>
      </div>
    </section>
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
