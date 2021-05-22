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
          <h3>Role</h3>
          <p>I was the lead developer on this project. I worked with Stakeholders to create an online experience based off their designs.</p>
          <h3>The Challenge</h3>
          <p>This site required many specific customizations, custom pages, sections, blog types, product information and I needed to build a site that functions smoothly and empowers the client to add and edit information in the future.</p>
          <h3>The Solution</h3>
          <p>The solution was to build a site on Shopify and code custom pages, sections, and use custom meta feilds to customize blog pages and product types. To ensure the Bad Girls are empowered to update and add to their site in the future I gave a detailed site reference guide to maintain original designs and layout.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Shopify Site Build</li>
              <li>Custom Pages</li>
              <li>Custom Sections</li>
              <li>Custom Products</li>
              <li>Custom Blogs</li>
              <li>Site Guide</li>
            </ul>
          </div>
        </div>
      </section>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <img src={GIF} alt="" class="site-gif" />
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
