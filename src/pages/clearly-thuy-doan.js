import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const ThuyDoan = (props) => (

  <Layout name="project-page">
    <SEO title="clearly, Thuy Doan" />
    <section className="title">
      <div className="wrapper">
        <h1>clearly, THUYDOAN</h1>
        <p className="subtitle">A Brand and Sub-Brand for an expanding Web-Developer / Content Creator </p>
      </div>
    </section>

    <div id="ash" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Designing a brand and sub-brand for a growing content-creator</h2>
          <p>Thuy is a front-end developer, currently working in education technology at Prodigy Education. She is passionate about accessibility and learning how to spread awareness for all the under-represented groups as an industry leader and also a podcast content creator.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Sub-Brand</li>
              <li>Social Media</li>
              <li>Web Design</li>
              <li>Presentation</li>
              <li>Resume</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="two-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
      </section>
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      <section className="project-info">
        <div className="two-images">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
        </div>
      </section>

      <section className="project-info">
        <div className="project-copy">
          <h2>Sub-Brand: Candid & Cringe</h2>
          <p>A podcast breaking barriers one candid conversation at a time.</p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
        </div>
      </section>
      <Img fluid={props.data.imageTen.childImageSharp.fluid} />

    </div>
    <Projectfooter />
  </Layout>
)

export default ThuyDoan

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "ctd/ctd-logo.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "ctd/ctd-logo-white.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "ctd/ctd-icons.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "ctd/ctd-colour.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "ctd/ctd-socials.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "ctd/cc-logo.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSeven: file(relativePath: {eq: "ctd/cc-logo-white.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEight: file(relativePath: {eq: "ctd/cc-icons.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageNine: file(relativePath: {eq: "ctd/cc-colours.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTen: file(relativePath: {eq: "ctd/cc-socials.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEleven: file(relativePath: {eq: "ctd/ctd-home.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwelve: file(relativePath: {eq: "ctd/ctd-home-dark.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`
