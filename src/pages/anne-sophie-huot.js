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
        <div className="button-wrap">
          <a href="https://www.annesophiehuot.com/" className="button" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>

    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Custom Squarespace site</h2>
          <p>Anne-Sophie Huot is a Photographer and Art Director who specializes in Digital + Film content creation, and Commercial photography.</p>
          <p>I worked with Anne-Sophie to create a logo and brand identity with strong typography and to also build her website on Squarespace with custom coding, web accessibility and French and English site options for each side of Anne-Sophie’s users.</p>
          <p>Please take a look at the project below, I am driven by clean design, clear typography and the challenge of a custom layout, I am at your service for any collaboration.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Squarespace site</li>
              <li>Custom Coding</li>
              <li>Web Accessibility</li>
              <li>French/English</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="three-image-tiles">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="two-images-one hide-on-mobile">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
        <div className="two-images hide-on-desktop">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
        </div>
        <div className="three-image-tiles">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
        </div>
        <div className="two-images-one hide-on-mobile">
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
        </div>
        <div className="two-images hide-on-desktop">
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
        </div>
      </section>



    </div>
    <Projectfooter />
  </Layout>
)

export default AnneSophie

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "ash/ash-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "ash/ash-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "ash/ash-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "ash/ash-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "ash/ash-4-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "ash/ash-5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSeven: file(relativePath: {eq: "ash/ash-5-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEight: file(relativePath: {eq: "ash/ash-6.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageNine: file(relativePath: {eq: "ash/ash-7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
    imageTen: file(relativePath: {eq: "ash/ash-8.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEleven: file(relativePath: {eq: "ash/ash-9.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwelve: file(relativePath: {eq: "ash/ash-9-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThirteen: file(relativePath: {eq: "ash/ash-10.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFourteen: file(relativePath: {eq: "ash/ash-10-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFifteen: file(relativePath: {eq: "ash/ash-11.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSixteen: file(relativePath: {eq: "ash/ash-11-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`
