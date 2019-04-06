import React from 'react'
import { Link } from 'gatsby'
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
            <p className="sub-title">product designer. developer. dog lover.</p>
      </section>
      <section className="about">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' >
          <h2>Hello.</h2>
          <p>I am a Product Designer in Toronto. I tell stories through the products I create and my goal is to make smart digital experiences people feel good about using. On top of ongoing independent study I’ve completed Hacker You’s full time front-end bootcamp and UX course. Right now I'm learning new research &amp; facilitation techniques as a SidexSide Mentee.
          <br></br><br></br>
          I’m also passionate about accessibility and inclusion<br></br>
          — so feel free to AMA!</p>
        </ScrollAnimation>
      </section>
      <section className="portfolio">
        {/* <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            <div className="project-info">
              <p className="category">UX | design | sketch | invision</p>
              <h3>The Good Ones</h3>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id leo ipsum. Suspendisse ut risus vehicula, vehicula tortor non, dictum nisi. Praesent eu pretium risus, non ullamcorper lacus. Mauris eget nibh vitae quam sollicitudin cursus. Vestibulum mollis egestas libero, cursus ullamcorper nisl sollicitudin quis. Etiam a diam.</p>
              <Link to="/good-ones-academy/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div> */}
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            <div className="project-info next-step-info">
              <p className="category">UX | research | design | developer</p>
              <h3>The Next Step Forward</h3>
              <p className="description">For this client project I was immediately aware of the empathy and compassion that The Next Step Forward had for their clients and I wanted that to be the main message. Having helped loved ones downsize their homes and knew what a difficult task this can become, especially when sorting through all of the sentimental objects of ones life. The stakeholders I was working with knew of the amazing service they wanted to offer and weren’t sure how to portray themselves online. My role was to use user research in order to create a safe place where one can make difficult decisions with a team who cares.</p>
              <Link to="/next-step-forward/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div>
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' >
            <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            <div className="project-info easy-info">
              <p className="category">UX | design | sketch | invision</p>
              <h3>Easy Rider</h3>
              <p className="description">I was tasked to come up with an app that would help public transit and the people using the service interact in a more positive way. My vision for Easy Rider was to address the need for interactive traveling on public transit. If you’re driving a vehicle you have access to apps such as Waze that allow users to interact with one another and report delays or incidents that other drivers would find helpful. Easy Rider is meant to empower users to get the most up to date information about traffic from a reliable source. This will help users plan ahead and act in an informed way when riding transit to avoid any sudden delays.</p>
              <Link to="/easy-rider/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div>
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            <div className="project-info wicked-info">
              <p className="category">UX | research | design | presentation</p>
              <h3>Wicked Problem</h3>
              <p className="description">In Hacker You’s advanced UX course we were asked to define a wicked problem and deliver a presentation using research, divergence and convergence. I chose to focus my project on the impact of healthy emotional development for kids. I chose this topic because as my family grows this is a major topic of discussion at home. Our youth today face so many obstacles when it comes to self-love and acceptance than ever before, so how might we promote a healthy sense of belonging for kids today. Take a look at my case study where I roll up my research sleeves to find potential solutions for this topic.</p>
              <Link to="/wicked-problem/" className="button">case study</Link>
            </div>
          </ScrollAnimation>
        </div>
        <div className="project-wrap" tabIndex="0">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' >
            <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            <div className="project-info adaptive-info">
              <p className="category">leadership | think politically | Adaptive Experiments</p>
              <h3>Adaptive Leadership</h3>
              <p className="description">In this team-based course offered by +Acumen you are asked to identify and make progress on a leadership challenge in your own community. My team and I applied the tools and techniques offered to identify ‘Gaps’ and take action in a diplomatic way. We were given tools for leading change, particularly during times of uncertainty or when there are no easy answers. I personally gained a critical skillset and highly recommend this course for anyone looking to drive systemic change in an increasingly complex world.</p>
              <Link to="/adaptive-leadership/" className="button">case study</Link>
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
    imageOne: file(relativePath: { eq: "home/good-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/next-step.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "home/wicked-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "home/easy-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "home/adaptive-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
