import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Marquee from '../components/marquee'


const Contact = (props) => (
  <Layout name="contact-page-wrap">
    <SEO title="Contact" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'website designer', 'squarespace designer', 'social media design', 'editorial design', 'print design']} />
    <div className="wrapper">
      <section className="contact-atf">
        <h1>Let's Connect</h1>
        <p>Feel free to contact me via email or book a call with me so we can have a virtual coffee & chat.</p>
        <p><a href="">virtuallyaligned@gmail.com</a></p>    <p> <a href="">book a call</a></p>
      </section>
    </div>
    <div className="wrapper">
      <section className='contact-text'></section>
    </div>
  </Layout >
)

export default Contact

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "services/brand-identity.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "services/logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "services/website-design.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "services/social-media.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "services/illustrations.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "services/print-editorial.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
