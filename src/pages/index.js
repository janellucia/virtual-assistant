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
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
      <section className="landing-about">
        <div className="about-wrap">
          <p>Hello, I'm Janel – a Product (UX/UI) Designer in Toronto. I aim to create design that makes a difference —to propel brands with soul and substance who are passionate about what they do. My work is rooted in research, iteration, and collaboration.</p>
          <p>Right now I'm learning new research and facilitation techniques as a Side x Side mentee.</p>
        </div>
        <div className="image-outer-wrap">
          <div className="image-wrap">
            <div className="image image-one">
              <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="gradient"/>
            </div>
            <div className="image image-two">
              <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Janel Lucia Headshot" />
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
      <section className="portfolio">
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="3 screen shots from the good ones academy mobile site" />
            <div className="project-info good-info">
            <p className="category">UX | UI | user research | design | prototype</p>
              <h3>The Good Ones</h3>
              <p className="description">The good ones academy started as a group of artists collaborating to bring hair workshops to beauty professionals looking to level up their skills. After having great success they wanted to create an online educational platform, I set out to solve this design challenge using the 5 Planes of UX Methodology.</p>
              <Link to="/good-ones-academy/" className="button">view case study</Link>
            </div>
        </div>
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="screenshot od desktop landing page shacasing logo and image of home interiors" />
            <div className="project-info next-step-info">
              <p className="category">UX | UI | user research | HTML | SCSS | JS</p>
              <h3>Next Step Forward</h3>
              <p className="description">The Next Step Forward helps you declutter, organize, downsize and stage your home. Targeted towards the aging population, the stakeholders expressed so much compassion for their clients and I wanted to make sure that came through in the end product. I approached this challenge using the 5 day design sprint.</p>
              <Link to="/next-step-forward/" className="button">view case study</Link>
            </div>
        </div>
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="4 screenshots of easy rider app" />
            <div className="project-info easy-info">
              <p className="category">UX | UI | user research | design | prototype</p>
              <h3>Easy Rider</h3>
              <p className="description">I was tasked to come up with an app idea that helps public transit and the people using the service. I wanted to address the need for interactive traveling on public transit, something like WAZE for public transit. The goal is to empower users to get the most up to date information about transit from a reliable source, themselves.</p>
              <Link to="/easy-rider/" className="button">view case study</Link>
            </div>
        </div>
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageSeven.childImageSharp.fluid} alt="colourful display of kindred academy logo's" />
            <div className="project-info wicked-info">
              <p className="category">UX | UI | user research | design </p>
              <h3>Kindred Academy</h3>
              <p className="description">I was asked to define a wicked problem and deliver a solution using research, divergence &amp; transformation, and convergence. I chose to focus my project on the impact of healthy emotional development in kids. I see a real need for more reliable resources for families when it comes to self-love and acceptance.</p>
              <Link to="/kindred-academy/" className="button">view case study</Link>
            </div>
        </div>
      </section>
      <section className="process">
        <div className="step-title">
          <h2>Defining the <i>process</i> is key!</h2>
          <p>I think it's important to be flexible when defining process, I tackle each design challenge unique to the project needs. I use empathy, preparedness, research, collaboration, and feedback as my secret weapons. <br></br>This is how I usually approach UX design challenges:</p>
        </div>
        <div className="step step-1">
          <h3>Define the challenges</h3>
          <p>Gain an empathetic understanding of the goals, aspirations, and intentions for the product at large by engaging with users and stakeholders to understand their experiences.</p>
        </div>
        <div className="step step-2">
          <h3>Research &amp; Validate</h3>
          <p>Conduct both quantitative and qualitative research with user interviews, surveys, industry research, and competitive analysis and use that information to build user personas and journeys. This way we can make informed design decisions once the sketching begins.</p>
        </div>
        <div className="step step-3">
          <h3>Sketch competing solutions</h3>
          <p>Using all the data from earlier steps (including research, personas, sitemap, and user flows) it's time to design multiple solutions to the site architecture, content structure, user flows, and interactions.</p>
        </div>
        <div className="step step-4">
          <h3>Vote &amp; Storyboard</h3>
          <p>Now that we have multiple sketches to choose from we need to facilitate a structured critique with a discussion and weighted voting to select the best solutions. We then take the winning sketches and ideas and string them together into a storyboard.</p>
        </div>
        <div className="step step-5">
          <h3>Prototype &amp; Test</h3>
          <p>Now, we take our storyboards and create active prototypes, giving us the opportunity to showcase product features and animations for user testing. The test phase is critical to the process, as it allows us to observe user behaviour in real time, and analyse insights for better functionality and usability.</p>
        </div>
        <div className="step step-6">
          <h3>Evaluate &amp; Iterate</h3>
          <p>Once the test phase has been completed and insights collected, necessary iterations can be implemented (and re-tested) and the next phase of the design life cycle can begin.</p>
        </div>
      </section>
      <section className="contact">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <h2>get in touch.</h2>
          {/* <p>Have a cool idea you want to explore? Want to collaborate, brainstorm or just want to say hey…<br></br>
            Drop me a line and let’s talk!</p> */}
            <p>Feel free to reach out for collaborations or just a friendly hello <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="smiley face" /></p>
          <a href="mailto:thejanellucia@gmail.com">thejanellucia@gmail.com</a>
        </ScrollAnimation>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/headshot.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/headshot-gradient.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "happy.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "home/good-ones-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "home/tnsf-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "home/easy-rider-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "home/kindred-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "home/hex-shape.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "home/dode-shape.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "home/octo-shape.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "good-ones/good-page-layout-mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
