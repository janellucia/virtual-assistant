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
          <p>I worked with Sadie to create a logo and brand identity with strong typography, social media layouts and to also build her website on Squarespace with custom coding and bring her intimate and romantic experience to make users feel at ease.</p>
          <p>Please take a look at the project below, I am driven by clean design, clear typography and the challenge of a custom layout, I am at your service for any collaboration.</p>
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
        <div className="three-image-tiles">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="two-images-one hide-on-mobile">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>
        <div className="two-images hide-on-desktop">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
        </div>
        <div className="three-image-tiles">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
        </div>
        <div className="two-images-one hide-on-mobile">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
        </div>
        <div className="two-images hide-on-desktop">
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <Projectfooter />
  </Layout>
)

export default Lorangerie

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "lop/lop-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "lop/lop-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "lop/lop-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "lop/lop-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "lop/lop-05.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "lop/lop-6.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
    imageSeven: file(relativePath: {eq: "lop/lop-7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEight: file(relativePath: {eq: "lop/lop-8.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
    imageNine: file(relativePath: {eq: "lop/lop-9.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
    imageTen: file(relativePath: {eq: "lop/lop-10.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEleven: file(relativePath: {eq: "lop/lop-011.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
      imageTwelve: file(relativePath: { eq: "lop/lop-4-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "lop/lop-05-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "lop/lop-9-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "lop/lop-10-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "lop/lop-11-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
}
`
