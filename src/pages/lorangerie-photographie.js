import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Lorangerie = (props) => (

  <Layout name="project-page">
    <SEO title="L'Orangerie Photographie" />
    <section className="title">
      <div className="wrapper">
        <h1>L'Orangerie Photographie</h1>
        <p className="subtitle">Designing a brand experience for a growing Photography brand.</p>
      </div>
    </section>

    <div id="ash" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Brand Identity &amp; Squarespace site for L'Orangerie Photographie.</h2>
          <p>Sadie at L'Orangerie is a wedding and family photographer. Focused on intimate creative shoots in the city and in the countryside. Her style is classic, fun, effortless and it’s all about setting the right mood and capturing those candid moments and we needed to create a brand identity to reflect that.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Social Media</li>
              <li>Squarespace Site</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="two-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <Projectfooter />
  </Layout>
)

export default Lorangerie

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "lop/lop-logo.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "lop/lop-logo-spread.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "lop/insta.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "lop/stories.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "lop/lop-home.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "lop/lop-about.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
    imageSeven: file(relativePath: {eq: "lop/lop-logo-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEight: file(relativePath: {eq: "lop/lop-logo-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`
