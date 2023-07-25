import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Marquee from '../components/marquee'


const Services = (props) => (
  <Layout name="services-page-wrap">
    <SEO title="Design Services" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'website designer', 'squarespace designer', 'social media design', 'editorial design', 'print design']} />
    <div className="wrapper">
      <section className="service-atf">
        <h1>Your Personal Administrative Virtual Assistant</h1>
      </section>
    </div>
    <Marquee marqueeContents="Dependable & Reliable  •  Excellent Communication  •  Detail Orientated  •  Time Management  •  Ability to Multitask  •  Technologically Savvy  •  Resourcefulness  • " />
    <div className="wrapper">
      <section class="service-descriptions">
        <div className='service'>
          <div className='service-dot'></div>
          <h3>Manage Emails</h3>
          <p>Respond to daily emails, proofreading emails, creating & optimizing templates, create & implement email campaigns, analyzing campaign performance, and ensuring compliance with industry policies.</p>
        </div>
        <div className='service'>
          <div className='service-dot'></div>
          <h3>Schedule</h3>
          <p>Create and maintain the schedules of individuals or teams, schedule meetings, organize calendar, travel & accommodations, adjust schedules as necessary to accommodate changes in priorities.</p>
        </div>
        <div className='service'>
          <div className='service-dot'></div>
          <h3>Data Entry</h3>
          <p>Compiles and verifies data to ensure accuracy while appropriately formatting it. This includes preparing documents for entry and transcribing from paper formats into computer files using manual entry or scanners.</p>
        </div>
        <div className='service'>
          <div className='service-dot'></div>
          <h3>Research</h3>
          <p>Support the development, review, implementation, and management of your research needs. This includes everything from preparing and submitting proposals to award negotiation and acceptance through programmatic compliance.</p>
        </div>
        <div className='service'>
          <div className='service-dot'></div>
          <h3>Graphic Design</h3>
          <p>Bring your creative vision to life with compelling presentations and slide decks, social media templates, photo and video editing, flyers, brochures, and other printed materials for your business. Thoughtfully crafted for your business.</p>
        </div>
        <div className='service'>
          <div className='service-dot'></div>
          <h3>Manage Website</h3>
          <p>Monitor your website for updates to keep you running smoothly. Audit content and remove duplicate information, create strategies to ijmprove website traffic, subscription management, blog management, content writing & technical support</p>
        </div>
      </section>



      <section className="sticky-services-navigation">
        <p className="book-button"><a href="mailto:hello@janellucia.com?subject=Let's Work Together!">Book a Discovery Call</a></p>
      </section>


    </div>
  </Layout >
)

export default Services

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
