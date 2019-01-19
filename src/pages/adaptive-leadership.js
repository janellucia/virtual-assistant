import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout>
    <SEO title="Project | Adaptive Leadership" />
    <section className="title adaptive-title">
      <div className="wrapper">
        <h1>Adaptive <br></br>Leadership</h1>
        <p className="subtitle">Mobilizing for Change and Disrupting the Status Quo</p>
      </div>
    </section>
    <div id="wicked-problem" className="wrapper">
      <section className="image-right">
          <div className="text-wrap">
            <h2>Design Thinking</h2>
            <p>Adaptive Leadership is a practical leadership framework that helps individuals and organizations adapt and thrive in challenging environments. It is being able, both individually and collectively, to take on the gradual but meaningful process of change.</p>
            <p className="large-text">In this course we learn that leadership is an action, not a rigid trait, and that leadership can be exercised by anyone, whatever their role inside or outside an organization or community.</p>
            <p>We are given the tools and techniques of Adaptive Leadership, which is a practical leadership framework developed at the Harvard Kennedy School, these tools are particularly useful for leading change during times of uncertainty or when there are no easy answers</p>
          </div>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      </section>
      <section className="image-left mobile-reverse">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <div className="text-wrap">
          <p>Acumen uses metaphors such as being “on the dancefloor” and talks about moving “on to the balcony” to help us identify where the gaps in our community live. They also help us define the stakeholders involved and their values, loyalties and losses to better understand what drives their decisions. I found when you can understand the people in your community you can also make lasting change driven by empathy and compassion.</p>
          <p>Take a look at my presentation to see my takeaways from this course. Adaptive Leadership has given me more confidence and helped me understand the people around me and I am so grateful I took this course.</p>
        </div>
      </section>
    </div>
    <section className="project-links adaptive-links">
      <div className="wrapper">
        <p className="category">leadership | think politically | adaptive experiments</p>
        <p className="subtitle">Adaptive Leadership emerged from thirty plus years of research, defining the frontier of leadership training and development.</p>
        <div className="button-wrap">
          <a href="https://drive.google.com/file/d/10i64DscOSwregTtcIFfWEfJ4v9FhLhk8/view?usp=sharing" className="button" target="_blank">View Presentation</a>
          <Link to="/" className="button">Back to Homepage</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "adaptive-leadership/welcome.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "adaptive-leadership/team-building.jpg" }) {
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
