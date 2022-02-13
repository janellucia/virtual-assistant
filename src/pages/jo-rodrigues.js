import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const JoRodrigues = (props) => (

  <Layout name="project-page">
    <SEO title="Jo Rodrigues" />
    <section className="title">
      <div className="wrapper">
        <h1>Jo Rodrigues</h1>
        <p className="subtitle">Helping people and organizations shift from confusion to clarity with practical strategies with coaching, training and consulting services.</p>
        <div className="button-wrap">
          <a href="https://jorodrigues.net/" className="button" target="_blank" rel="noopener noreferrer">View Website</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>BRAND IDENTITY & WORDPRESS SITE FOR Jo Rodrigues</h2>
          <p>Jo coaches humanitarian aid and international development workers. She helps her clients find clarity on how to move forward in their careers – without compromising their values.</p>
          <p>I worked with Jo to create a logo and brand identity with strong typography and build her website on Wordpress with custom coding, child theme, web accessibility and Dark Mode so users can feel at home.</p>
          <p>Please take a look at the project below, I am driven by clean design, a clear message and the challenge of a custom layout, I am at your service for any collaboration.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Social Media</li>
              <li>Wordpress site</li>
              <li>Web Accessibility</li>
              <li>Dark Mode</li>
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
        <div className="two-images-one">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
        </div>
        <div className="three-image-tiles">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
        </div>
        <div className="full-width-image">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />

        </div>
        <div className="two-images-one">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />

        </div>
      </section>


    </div>
    <Projectfooter />
  </Layout>
)

export default JoRodrigues

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "jo-rodrigues/jo-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "jo-rodrigues/jo-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "jo-rodrigues/jo-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "jo-rodrigues/jo-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "jo-rodrigues/jo-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "jo-rodrigues/jo-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "jo-rodrigues/jo-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "jo-rodrigues/jo-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "jo-rodrigues/jo-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "jo-rodrigues/jo-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    imageEleven: file(relativePath: { eq: "jo-rodrigues/jo-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
