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
      <section className="landing-about">
        <div className="about-wrap">
          <p>Hey, I'm Janel – a Product (UX/UI) Designer in Toronto. I aim to create design that makes a difference —to propel brands with soul and substance who are passionate about what they do. My work is rooted in research, iteration, and collaboration.</p>
          <p>Right now I'm learning new research and facilitation techniques as a Side x Side mentee.</p>
        </div>
        <div className="image-wrap">
          <div className="image image-one">
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="gradient" />
          </div>
          <div className="image image-two">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Janel Lucia Headshot" />
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="project-wrap" tabIndex="0">
          {/* <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> */}
            <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="3 screen shots from the good ones academy mobile site" />
            <div className="project-info good-info">
            <p className="category">UX | UI | user research | design | prototype</p>
              <h3>The Good Ones</h3>
              <p className="description">The good ones academy started as a group of artists collaborating to bring hair workshops to beauty industry professionals looking to level up their skills. They quickly became industry leaders teaching high end, quality workshops to some of Toronto’s top talent. Looking to create an online platform I set out to solve this design problem using the 5 Planes of UX Methodology.</p>
              <Link to="/good-ones-academy/" className="button">case study</Link>
            </div>
          {/* </ScrollAnimation> */}
        </div>
        <div className="project-wrap" tabIndex="0">
          {/* <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> */}
            <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="interior of a living room beautifully designed" />
            <div className="project-info next-step-info">
              <p className="category">UX | UI | user research | HTML | SCSS | JS</p>
              <h3>Next Step Forward</h3>
              <p className="description">The Next Step Forward will help you organize, downsize and stage your home. I was immediately aware of the empathy and compassion the stakeholders had for their clients so I made sure that came through in the end product – I relied heavily on user research in order to create a safe place where one can make difficult decisions with a team who cares.</p>
              <Link to="/next-step-forward/" className="button">case study</Link>
            </div>
          {/* </ScrollAnimation> */}
        </div>
        <div className="project-wrap" tabIndex="0">
          {/* <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' > */}
            <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="Toronto streetcar stpped at a stoplight" />
            <div className="project-info easy-info">
              <p className="category">UX | UI | user research | design | prototype</p>
              <h3>Easy Rider</h3>
              <p className="description">I was tasked to come up with an app that would help public transit and the people using the service interact in a more positive way. My vision was to address the need for interactive traveling on public transit. Easy Rider is meant to empower users to get the most up to date information about traffic from a reliable source. This will help users plan ahead and act in an informed way when riding transit to avoid any sudden delays.</p>
              <Link to="/easy-rider/" className="button">case study</Link>
            </div>
          {/* </ScrollAnimation> */}
        </div>
        <div className="project-wrap" tabIndex="0">
          {/* <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> */}
            <Img fluid={props.data.imageSeven.childImageSharp.fluid} alt="child with paint brushes getting ready to paint" />
            <div className="project-info wicked-info">
              <p className="category">UX | UI | user research | design | presentation</p>
              <h3>Kindred Academy</h3>
              <p className="description">In Hacker You’s advanced UX course we were asked to define a wicked problem and deliver a solution using research, divergence and convergence. I chose to focus my project on the impact of healthy emotional development for kids. Youth today face so many obstacles when it comes to self-love and acceptance than ever before, so I wanted to find out how might we promote a healthy sense of belonging for kids today.</p>
              <Link to="/kindred-academy/" className="button">case study</Link>
            </div>
          {/* </ScrollAnimation> */}
        </div>
      </section>
      <section className="process">
        <div className="step-title">
          <h2>Defining the <i>process</i> is key!</h2>
          <p>I'm pretty flexible when defining my process, I like to tackle every design challenge in a unique way. I use empathy, preparedness, research, collaboration, and feedback as my secret weapons.</p>
        </div>
        <div className="step step-1">
          <h3>Define the challenges</h3>
          <p>Gain an empathetic understanding of the goals, aspirations, and intentions for the product at large by engaging with users and stakeholders to understand their experiences.</p>
        </div>
        <div className="step step-2">
          <h3>Research &amp; Validate</h3>
          <p>I conduct both quantitative and qualitative research with user interviews, surveys, industry research, and competitive analysis and use that information to build user personas and journeys. This way I can make informed design decisions once the sketching begins.</p>
        </div>
        <div className="step step-3">
          <h3>Sketch competing solutions</h3>
          <p>Using all the data from earlier steps (including research, personas, sitemap, and user flows) it's time to design multiple solutions to the site architecture, content structure, user flows, and interactions.</p>
        </div>
        <div className="step step-4">
          <h3>Vote &amp; Storyboard</h3>
          <p>A structured critique with discussion and weighted voting to select the best solutions. I take the winning sketches and ideas and string them together into a storyboard. Storytelling is who we are as a UX designers and the most impactful way of communicating our ideas.</p>
        </div>
        <div className="step step-5">
          <h3>Prototype &amp; Test</h3>
          <p>Now, we transform our artboards into active prototypes, giving us the opportunity to showcase product features and animations for user testing. <br></br>The test phase is critical to the process, as it allows me to observe user behaviour in real time, and analyse insights pertaining to functionality and usability.</p>
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
  }
`
