import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Marquee from '../components/marquee'

const IndexPage = (props) => (
  <Layout name="home-page">
    <SEO title="Graphic Designer" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'website designer', 'squarespace designer', 'social media design', 'editorial design', 'print design', 'typography']} />
    <section className="home-atf">
      <div className="wrapper">
        <h1>Efficient & Dependable <br></br>Virtual Assistant</h1>
      </div>
    </section>
    <Marquee />
    <section className="home-about">
      <div className="wrapper">
        <div className='image'>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className='text'>
          <h2>I'm Janel, your dependable problem solver & solution finder</h2>
          <p>As a detail-oriented and organized professional, I take pride in completing assignments on time and with accuracy. Excellent communication skills, both written and verbal. I would love the opportunity to utilize these skills as your Virtual Assistant.</p>
          <p><a href="/about">more about me</a> <a href="/about">book a call</a></p>
        </div>
      </div>
    </section>
    <section className="home-plan">
      <div className="wrapper">
        <div className='image'>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <div className='text'>
          <h2>Imagine what a virtual assistant could take off your plate?</h2>
          <p>Highly dynamic Virtual Assistant with 7+ years of experience providing exceptional administrative and management support to clients. Adept in multitasking and effectively prioritizing tasks to achieve the best outcomes. Knowledgeable and skilled in document management software and content management systems. My mission is to support people of all backgrounds reach their greatest potential.</p>
          <p><a href="/services">my services</a> <a href="/about">book a call</a></p>
        </div>
      </div>
    </section>
    <section className='home-services'>
      <div className='wrapper'>
        <div className='service'>
          <h3>Administration</h3>
          <p>Respond to emails, Schedule meetings, organize calendar, travel & accommodations, Prepare spreadsheets and keep online records of business needs</p>
        </div>
        <div className='service'>
          <h3>Data Entry</h3>
          <p>Compiling, verifying & sorting information to prepare source data. Reviewing data for deficiencies or errors, correcting any incompatibilities.</p>
        </div>
        <div className='service'>
          <h3>Graphic Design</h3>
          <p>Create compelling presentations and slide decks as assigned, photo and video editing, flyers, brochures, and other printed materials for your business</p>
        </div>
        <div className='service'>
          <h3>Manage Website</h3>
          <p>Monitor your website for updates to keep you running smoothly. subscription management, blog management, copy writing, photo editing & technical support</p>
        </div>
      </div>
    </section>
    <section className="home-about">
      <div className="wrapper">
        <div className='image'>
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className='text'>
          <h2>Behind every successful business owner is a virtual assistant</h2>
          <p>I'm able to handle a variety administrative projects and deliver high-quality work under minimum supervision. I'm familiar with current technologies, like desktop sharing, cloud services and VoIP, Experience with word-processing software and spreadsheets</p>
          <p>Knowledge of online calendars and scheduling, Professional email and instant messaging communication skills, Excellent time management skills, Solid organizational skills</p>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/jo-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/jo-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "home/floral-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`



