import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Floral = (props) => (

  <Layout name="project-page">
    <SEO title="Custom Floral Illustrations" />
    <section className="title">
      <div className="wrapper">
        <h1>Floral Illustrations</h1>
        <p className="subtitle">"I paint flowers so they will not die." <br></br>— Frida Kahlo</p>
      </div>
    </section>
    <div id="ash" className="wrapper">

      {/* <section className="project-info"> */}
      <div id="lettering-archive" className="wrapper lettering-image-wrap">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        <Img fluid={props.data.imageSix.childImageSharp.fluid} />
      </div>
      {/* </section > */}
    </div>





    <Projectfooter />
  </Layout>
)

export default Floral

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "floral/tulips.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "floral/plumeria.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "floral/peony.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "floral/calla-lily.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "floral/Daisy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "floral/roses.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`