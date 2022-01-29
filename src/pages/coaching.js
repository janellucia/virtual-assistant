import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'


const CoachingPage = (props) => (
  <Layout name="about-page-wrap">
    <SEO title="Coaching" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'Become a Designer', 'Become a Graphic Designer', 'Become an illustrator']} />
    <div className="wrapper">
      <section className="about-page">
        <div className="about-panel">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <p>Working together I hand over all of the tools & tricks that I wish I had when I first started as a Designer.</p>
        </div>

        <div className="about-wrap">
          <h2>Coaching for Designers</h2>
          <div className="text">
            <p>Are you ready to start or expand your career as a designer?</p>
            <p>My goal is to help you break into the design industry with confidence and style. In addition to how to brand yourself as a designer, find your style, overcome imposter syndrome, social media, and setting reasonable career goals, I will guide you through all the ins and outs of establishing yourself as an independent designer.</p>
            <p>Design is all about continuous growth and learning I will help you build the skills you need to start and then create a plan to grow your skills overtime. On top of that learn what tools I use, what software programs are industry standard and how to present your work to clients.</p>
            <p>I specialize in brand identity, logo design, graphic design, web design, and illustration. I work with businesses to design unique experiences that connect to their audience. My design strategy is all about bring personality into what I'm designing, learn about my client onboarding process so you can spend less time trying to figure out project goals and be more efficient in your approach.</p>
            <p>Let's work together to build your career as a designer. For coaching, consulting services or to simply say hi and connect, please email me <a href="mailto:hello@janellucia.com">hello@janellucia.com</a>.</p>
          </div>
        </div>


      </section>
      <Testimonials />
    </div>
  </Layout>
)

export default CoachingPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "services/website-design.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "services/website-design.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
