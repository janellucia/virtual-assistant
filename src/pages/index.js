import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing">
            <h1>Janel Lucia</h1>
            <p className="sub-title">product designer. developer. #a11y enthusiast.</p>
      </section>
      <section className="about">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' >
          <h2>Hello.</h2>
          {/* <p>I am a Product Designer in Toronto. I tell stories through the products I create and my goal is to make smart digital experiences people feel good about using. On top of ongoing independent study I’ve completed Hacker You’s full time front-end bootcamp and UX course. Right now I'm learning new research &amp; facilitation techniques as a SidexSide Mentee. */}
          <p>I am a Product Designer in Toronto. I aim to create design that makes a difference—to propel brands with soul and substance who are passionate about what they do. My work is rooted in research, iteration, and collaboration. I use history as my superpower and obsess over small details. Bonus: I know how to code!
          <br></br><br></br>
          On the weekends, I struggle to keep my plants alive and frequent coffee shops.</p>
        </ScrollAnimation>
      </section>
      <section className="portfolio">
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="3 screen shots from the good ones academy mobile site" />
            <div className="project-info good-info">
            <p className="category">UX | UI | user research | design | invision</p>
              <h3>The Good Ones</h3>
              <p className="description">The good ones academy started as a group of artists collaborating to bring hair workshops to beauty industry professionals looking to level up their skills. These hair workshops consisted of hair cutting, styling, balayage (colour) and the most popular - the editorial workshop. The workshops were a hit and the good ones academy quickly became industry leaders teaching high end, quality workshops to some of Toronto’s top talent within the beauty industry. Looking to create an online platform I set out to solve this design problem using the 5 Planes of UX Methodology.</p>
              <Link to="/good-ones-academy/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div>
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="interior of a living room beautifully designed" />
            <div className="project-info next-step-info">
              <p className="category">UX | UI | user research | HTML | SCSS | JS</p>
              <h3>Next Step Forward</h3>
              <p className="description">For this client project I was immediately aware of the empathy and compassion that The Next Step Forward had for their clients and I wanted that to be the main message. Having helped loved ones downsize their homes and knew what a difficult task this can become, especially when sorting through all of the sentimental objects of ones life. The stakeholders I was working with knew of the amazing service they wanted to offer and weren’t sure how to portray themselves online. My role was to use user research in order to create a safe place where one can make difficult decisions with a team who cares.</p>
              <Link to="/next-step-forward/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div>
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' >
            <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="Toronto streetcar stpped at a stoplight" />
            <div className="project-info easy-info">
              <p className="category">UX | UI | user research | design | invision</p>
              <h3>Easy Rider</h3>
              <p className="description">I was tasked to come up with an app that would help public transit and the people using the service interact in a more positive way. My vision for Easy Rider was to address the need for interactive traveling on public transit. If you’re driving a vehicle you have access to apps such as Waze that allow users to interact with one another and report delays or incidents that other drivers would find helpful. Easy Rider is meant to empower users to get the most up to date information about traffic from a reliable source. This will help users plan ahead and act in an informed way when riding transit to avoid any sudden delays.</p>
              <Link to="/easy-rider/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div>
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="child with paint brushes getting ready to paint" />
            <div className="project-info wicked-info">
              <p className="category">UX | UI | user research | design | presentation</p>
              <h3>Kindred Academy</h3>
              <p className="description">In Hacker You’s advanced UX course we were asked to define a wicked problem and deliver a presentation using research, divergence and convergence. I chose to focus my project on the impact of healthy emotional development for kids. I chose this topic because as my family grows this is a major topic of discussion at home. Our youth today face so many obstacles when it comes to self-love and acceptance than ever before, so how might we promote a healthy sense of belonging for kids today. Take a look at my case study where I roll up my research sleeves to find potential solutions for this topic.</p>
              <Link to="/kindred-academy/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="contact">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <h2>get in touch.</h2>
          <p>Have a cool idea you want to explore? Want to collaborate, brainstorm or just want to say hey…<br></br>
            Drop me a line and let’s talk!</p>
          <a href="mailto:thejanellucia@gmail.com">thejanellucia@gmail.com</a>
        </ScrollAnimation>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/tgo-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/next-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "home/kindred-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "home/easy-rider-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
