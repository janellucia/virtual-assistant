import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Tulips = (props) => (

  <Layout name="project-page lettering-archive-page">
    <SEO title="Tulipomania" />
    <section className="title">
      <div className="wrapper">
        <h1>Tulipomania</h1>
        <p className="subtitle">A tulip series to welcome Spring and give praise to the natural lines and curves of tulips. posters available upon request.</p>
        <div className="button-wrap">
          <a href="https://society6.com/senseaddictions/all" className="button" target="_blank" rel="noopener noreferrer">Shop Prints</a>
          <a href="https://www.instagram.com/sense.addictions/" className="button" target="_blank" rel="noopener noreferrer">View Insta</a>
        </div>
      </div>
    </section>
    <div id="lettering-archive" className="wrapper lettering-image-wrap">
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      <Img fluid={props.data.imageSix.childImageSharp.fluid} />
      <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
      <Img fluid={props.data.imageEight.childImageSharp.fluid} />
      <Img fluid={props.data.imageNine.childImageSharp.fluid} />
      <Img fluid={props.data.imageTen.childImageSharp.fluid} />
      <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />

    </div>
    <Projectfooter />
  </Layout>
)

export default Tulips

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "tulipomania/tulips-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "tulipomania/tulips-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "tulipomania/tulips-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "tulipomania/tulips-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "tulipomania/tulips-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "tulipomania/tulips-6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "tulipomania/tulips-7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "tulipomania/tulips-8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "tulipomania/tulips-9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "tulipomania/tulips-10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "tulipomania/tulips-11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "tulipomania/tulips-12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

  }
`
