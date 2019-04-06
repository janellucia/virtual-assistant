import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout>
    <SEO title="Project | Wicked Problem" />
    <section className="title wicked-title">
      <div className="wrapper">
        <h1>Wicked Problem</h1>
        <p className="subtitle">Exploring healthy emotional development for youth through user research</p>
        <div className="button-wrap">
          <a href="https://drive.google.com/file/d/1KF0yXZcZJywqYY8nP43EeAkCO4FBQ7_F/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">View Presentation</a>
          <Link to="/" className="button">Back to Homepage</Link>
        </div>
      </div>
    </section>
    <div id="wicked-problem" className="wrapper">
      <section className="image-right">
          <div className="text-wrap">
            <h2>Design Thinking</h2>
            <p>In the advanced portion of Hacker You’s UX course we were given an assignment asking us to define a wicked problem and use research to explore solutions. Solving wicked problems is no easy task and often you find there are many wicked problems within other wicked problems. This project has expanded my creativity but also helped me embrace discomfort in an analytical way.</p>
            <p className="large-text">My wicked problem centres around emotional development for youth and I’m asking how might we offer intervention and prevention solutions for youth mental health. </p>
            <p>I found a growing body of scientific evidence stating that emotional development begins early in life, that it is a critical aspect of the development of overall brain architecture, and that it has enormous consequences over the course of a lifetime. That being said approximately 1 in 5 youth worldwide will experience a mental illness before they turn 25. This makes youth & adolescence a critical time for mental health promotion, prevention, early identification, and intervention.</p>
            <p>Through my research I found kids are in need of a safe space where they can express themselves. Screen time, social media and inactivity are having a negative effect on kids, many parents don’t know of or have reliable and trustworthy resources around them.</p>
          </div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </section>
      <section className="image-left mobile-reverse">
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <div className="text-wrap">
          <p>I interviewed a mix of parents from different cities and towns and different economic and educational backgrounds to round off my research. I also interviewed children to get their point of view. In all groups I found that through our difference’s families are experiencing similar frustrations, anxiety, stress, lack of communication and confidence. Both children and adults interviewed reported a lack in confidence in the information they are receiving online. This creates a need for reliable information children and caregivers can rely on.</p>
          <p className="large-text">When it came to exploring solutions I wanted to create a safe space helping children build strong adaptive brains for lifelong success.</p>
          <p>There are plenty of organizations offering solutions in an amazing way. In my presentation I take a look at some amazing organizations creating positive spaces and experiences for kids. I learned so much about what is and can be done and that allowed me to expand my knowledge when it came to defining my solution through convergence.</p>
          <p>Take a look at the my presentation linked below to see my research in detail along with how I came up with my solution Kindred Academy.</p>
        </div>
      </section>
    </div>
    <section className="project-links wicked-links">
      <div className="wrapper">
        <p className="category">UX | user research | design | presentation</p>
        <p className="subtitle">We want to teach our children to be resilient, determined and to see things through. Kindred Academy offers after school and Saturday programs, with additional counselling services available to support our youth into a more confident and compassionate future.</p>
        <div className="button-wrap">
          <a href="https://drive.google.com/file/d/1KF0yXZcZJywqYY8nP43EeAkCO4FBQ7_F/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">View Presentation</a>
          <Link to="/" className="button">Back to Homepage</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "wicked-problem/welcome.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "wicked-problem/music-arts.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "wicked-problem/branding.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
