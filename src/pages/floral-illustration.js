import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Floral = (props) => (

  <Layout name="project-page lettering-archive-page">
    <SEO title="Floral Dreams" />
    <section className="title">
      <div className="wrapper">
        <h1>Floral Dreams</h1>
        <p className="subtitle">Creative illustrations that explore the beauty of nature.</p>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Illustrations that express my admiration for natures gifts</h2>
          <p>Since I’ve been illustrating my style has been pretty consistent in that I’ve always been drawing flowers. I illustrate realistically most of the time, but sometimes I create abstract floral illustrations where I overlay different flowers so they’re merging together and have quite a translucent quality.</p>
          <p>I’m still in the early stages of establishing my style and I’m happy to see how it evolves from this point. At the moment I mostly use procreate but when I have more space I’d like to explore other avenues of digital design.</p>
          <p>Please take a look at my work below, I am driven by beauty in nature, flowers and the challenge of starting something new, I am at your service for any collaboration.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Illustration</li>
              <li>Digital Design</li>
              <li>Adobe Fresco</li>
              <li>Adobe Illustrator</li>
              <li>Procreate</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="two-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <div className="full-width-image">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>
        <div className="full-width-image">
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

export default Floral

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "floral/Tulips.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "floral/rose.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "floral/Poppy.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "floral/banana-leaf.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "floral/monstera-leaf.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "floral/repeat-pattern.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
        imageSeven: file(relativePath: { eq: "floral/calla-lily.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "floral/peony.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`