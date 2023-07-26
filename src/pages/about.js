import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'



const IndexPage = (props) => (
  <Layout name="about-page-wrap">
    <SEO title="About" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'website designer', 'squarespace designer', 'social media design', 'editorial design', 'print design']} />
    <div className="wrapper">
      <section className="about-page">
        <div className="about-panel">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>

        <div className="about-wrap">
          <h1>Hi, I’m Janel &mdash; <br></br>a Virtual Assistant in Toronto</h1>
          <div className="text">
            <p>I specialize in administrative tasks including email management, appointment scheduling, data entry, website updates, blog management and photo editing. To me, being a virtual assistant is more than answering messages and scheduling appointments, it's helping businesses succeed by taking on some of the time consuming yet neccessary tasks.</p>
            <p>I have over 7+ years experience with administration work, scheduling appointments, managing teams, software systems, websites and social media. Hiring a virtual assistant will massively reduce your workload. We will work together to identify the areas a virtual assistant will best serve you and your business. I am responsible, dependable, and can quickly become polished in any task that's given to me. As a high-achiever, I push myself to be the best at everything I do.</p>
            <p>My ideal client has a love for what they are doing—and is excited to grow their business with confidence. To get in touch, please email <a href="mailto:hello@janellucia.com">hello@janellucia.com</a>.</p>
            <p>Serving worldwide.</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/janel-virtual-assistant.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/janel-virtual-assistant.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
