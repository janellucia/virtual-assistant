import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'

import GIF from '../images/bad-girls/bad-girls.gif'


const BadGirls = (props) => (

  <Layout name="project-page">
    <SEO title="Bad Girls Collective" />
    <section className="title">
      <div className="wrapper">
        <h1>Bad Girls Collective</h1>
        <p className="subtitle">Building a Shopify site for the Bad Girls Collective</p>
        <div className="button-wrap">
          <a href="https://www.badgirlscollective.ca/" className="button" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>

    <div id="bad-girls" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Shopify site built for a the Bad Girls Collective.</h2>
          <p>Founded in 2014, Bad Girls Collective is a network of badass women on that intellectual tip – a mega book club. Originally born as a New Years resolution to read more, it has become our mission to bring well-read women together to share the power of reading and revel in each other’s stories.</p>
          <p>I collaborated with The Bad Girls to bring their existing branding and web designs to life on Shopify so their community had a place to gather and grow. This site is completely cusotm and to ensure The Bad Girls could easily make updates in the future I equipped them with an instructional site guide.</p>
          <p>Please take a look at the project below, I am driven by clean design and the challenge of a custom layout for users enjoyment, I am at your service for any collaboration.</p>

        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Shopify Site Build</li>
              <li>Custom Coding</li>
              <li>Web Accessibility</li>
              <li>Site Guide</li>
            </ul>
          </div>
        </div>
      </section>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <div className="gatsby-image-wrapper"><img src={GIF} alt="" class="site-gif" /></div>
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      <Img fluid={props.data.imageSix.childImageSharp.fluid} />
      <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
      <Img fluid={props.data.imageEight.childImageSharp.fluid} />
    </div>
    <Projectfooter />
  </Layout>
)

export default BadGirls

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "bad-girls/bad-girls-home.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "bad-girls/bgc-one.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "bad-girls/bgc-two.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "bad-girls/bgc-three.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "bad-girls/bgc-four.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "bad-girls/bgc-five.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSeven: file(relativePath: {eq: "bad-girls/bgc-six.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEight: file(relativePath: {eq: "bad-girls/bgc-seven.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`
