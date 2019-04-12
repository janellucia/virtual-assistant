import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout>
    <SEO title="Project | The Next Step Forward" />
    <section className="title next-step-title">
      <div className="wrapper">
        <h1>Next Step Forward</h1>
        <p className="subtitle">Compassionate Help with Downsizing, Decluttering and Creating your New Home.</p>
        <div className="button-wrap">
          <a href="http://thenextstepforward.ca/" className="button" target="_blank" rel="noopener noreferrer">View Live Website</a>
          <Link to="/" className="button">Back to Homepage</Link>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="image-right">
          <div className="text-wrap">
            <h2>Design Thinking</h2>
            <p>The Next Step Forward is dedicated to creating a compassionate experience for their clients. They offer help decluttering your home, downsizing your belongings, staging your home for the market along with moving and new home set up. Their target audience is people in the 55+ range and those helping their parents or loved ones move, with this in mind following accessibility standards is crucial to the success of this project. The Next Step Forward is a great source for anyone who requires these services and may not have the capability or time to accomplish everything involved themselves.</p>
            <p className="large-text">I immediately started to define the target audience and conduct user research in order to find out how users are currently finding these services and what they look for when making a decision, understand their pains when outsourcing a full service company like The Next Step Forward. Many users shared some really compelling stories of how they felt overlooked or misunderstood when considering major decisions into the next chapter of their life.</p>
            <p>When organizing all of my findings during the research phase it was instantly clear that these users of mainly 55+ wanted so much to be valued and were vary weary of being taken advantage of, due to past experiences. They wanted to find information immediately and not feel like they had to sift through countless pages in order to get that. Another pain I found was having an easy way to contact these services and have a transparent pricing page - not having pricing available online sent the message to these users that there could be an element of dishonestly they are trying to avoid.</p>
            {/* <p>When thinking about design I wanted to create a clean and simplified layout that offered a confident and reliable feeling to the user. There are many navigation apps like Google Maps and Apple Maps that have already established a trusted way of navigating on our phones, I wanted to take this approach with the interactivity of Waze to create a solution that offers users a way to have an informed ride on transit. Users also have extra accessibility options available.</p> */}
          </div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </section>
      <section className="image-left">
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <div className="text-wrap">
          <p>Some of the biggest Jobs to be Done in this project centre around giving clear information of the services offered, the team their clients would be working with and an easy way to find out contact information and service pricing. Although users didn’t directly insist on testimonials I knew that with the lack of trust conveyed this would offer a sense of peace of mind when seeking services. I wanted to find out how might we offer this information in the most supportive way and land clients for The Next Step Forward.</p>
          <p>Companies who already offer this type of service include Miracle Movers and Red Coats Moving, while the site aesthetic did not appeal to either myself or the stakeholder we did find out that these companies are showcasing themselves on sites like Alignable, Homestars and teaming up with services like Resolved. We took that information and put it into our strategy to showcase the business. The Next Step Forward also had a desire to give back to the community by donating unsold items from their clients to the Covenants House along with a percentage of sales to help provide safe shelter, food, clothes and life-changing programs for homeless youth.</p>
          <p className="large-text">All information is readily available to users in a breathable webpage that is interesting to look at as opposed to paragraphs upon paragraphs of information that some of their competition offers. I chose brand colours that convey trust and support to stay true to the ultimate message of empathy and compassion.</p>
          <p>Users have access to information like services, prices, a meaningful mission statement and many easy ways to contact The Next Step Forward. This gives users the tools needed to make an informed decision they can feel good about. Take a look at the live website linked below to see how I compiled all of my findings into the final product.</p>
        </div>
      </section>
      <div className="stand-alone-image">
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      </div>
    </div>
    <section className="project-links next-step-links">
      <div className="wrapper">
        <p className="category">UI | UX | user research | developer</p>
        <p className="subtitle">Whether it is for you or a loved one, moving can be stressful and overwhelming. Let The Next Step Forward help, they can assist with decluttering, managing your move, and setting up your new home with experience and compassion.</p>
        <div className="button-wrap">
          <a href="http://thenextstepforward.ca/" className="button" target="_blank" rel="noopener noreferrer" >View Live Website</a>
          <Link to="/" className="button">Back to Homepage</Link>
        </div>
      </div>
        {/* <div className="project-navigation">
          <div className="left-nav">
            <a href="/adaptive-leadership" className="adaptive-link">adaptive leadership</a>
          </div>
          <div className="right-nav">
            <a href="/easy-rider" className="easy-link">easy rider</a>
          </div>
        </div> */}
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "next-step/welcome.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "next-step/style-guide.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "next-step/final.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
