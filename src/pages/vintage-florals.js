import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Vintage = (props) => (

  <Layout name="project-page">
    <SEO title="Seamless Vintage Floral Pattern Design" />
    <section className="title">
      <div className="wrapper">
        <h1>Vintage Florals</h1>
        <p className="subtitle">A seamless pattern of some of my favorite flowers.</p>
        <div className="button-wrap">
          <a href="https://society6.com/senseaddictions/all" className="button" target="_blank" rel="noopener noreferrer">Shop Prints</a>
          <a href="https://www.instagram.com/sense.addictions/" className="button" target="_blank" rel="noopener noreferrer">View Insta</a>
        </div>
      </div>
    </section>

    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Repeating Patterns</h2>
          <p>With spring right around the corner I'm excited for all the new growth and the flowers that will bloom. I created this repeating pattern featuring some of my favorite florals and experimenting with brighter colours than I typically go for.</p>
          <p>This pattern is available for licensing, take a look below, I am driven by beauty in nature, new growth in the spring, and longer days. I am at your service for any collaboration.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Custom Illustration</li>
              <li>Seamless pattern</li>
              <li>Procreate</li>
              <li>Adobe Illustrator</li>
              <li>Downloadable assets</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="two-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>

      </section>



    </div>
    <Projectfooter />
  </Layout>
)

export default Vintage

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "vintage/IMG_0218.PNG" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "vintage/IMG_0220.PNG" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "vintage/vintage-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "vintage/vintage-1-2.PNG" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
    imageFive: file(relativePath: {eq: "vintage/vintage-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "vintage/vintage-2-2.PNG" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`
