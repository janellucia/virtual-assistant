import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const PerceivedSpace = (props) => (

  <Layout name="project-page lettering-archive-page">
    <SEO title="Perceived Space" />
    <section className="title">
      <div className="wrapper">
        <h1>Perceived Space</h1>
        <p className="subtitle">New creative project coming soon!</p>
        <div className="button-wrap">
          <a href="https://www.instagram.com/perceived_space/" className="button" target="_blank" rel="noopener noreferrer">View Insta</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info">
        <div className="two-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
      </section>
    </div>

    <Projectfooter />
  </Layout>
)

export default PerceivedSpace

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "perceived/perceived-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "perceived/perceived-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "perceived/perceived-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "perceived/perceived-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "perceived/perceived-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "perceived/perceived-6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "perceived/perceived-7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "perceived/perceived-8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
