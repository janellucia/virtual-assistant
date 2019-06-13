import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout name="project-page">
    <SEO title="Project | The Next Step Forward" />
    <section className="title next-step-title">
      <div className="wrapper">
        <h1>Next Step Forward</h1>
        <p className="subtitle">Compassionate Help with Downsizing, Decluttering and Creating your New Home.</p>
        <div className="button-wrap">
          <a href="http://thenextstepforward.ca/" className="button" target="_blank" rel="noopener noreferrer">View Live Website</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="image-right">
          <div className="text-wrap">
            <h2>Design Thinking</h2>
            <p>The Next Step Forward is dedicated to creating a compassionate experience for their clients. They offer help decluttering your home, downsizing your belongings, staging your home for the market along with moving and new home set up. Their target audience is people in the 55+ range and those helping their parents or loved ones. The Next Step Forward is a great source for anyone who requires these services and may not have the capability or time to accomplish everything involved themselves.</p>
            <p className="large-text">I started to define the target audience by creating user personas based on the previous clients the stakeholders had already helped. From there I reached out to my parents, friends parents and friends who have elderly parents who may need this type of service for user research. I wanted to find out how these users are currently finding these services and what they look for when making a decision, understand their pains when outsourcing a full service company like The Next Step Forward.</p>
            <p>Many users in the 55+ range shared some really compelling stories of how they <span className="italic">“felt overlooked, misunderstood or invisible”</span> when considering major decisions into the next chapter of their life. Users who would use this for their parents shared feelings that they want to make sure their parents are <span className="italic">“being taken care of in a compassionate way”</span>, so they don’t have to be so hands on and keep the relationship they share with their parents dignified and in tact.</p>
            {/* <p>When thinking about design I wanted to create a clean and simplified layout that offered a confident and reliable feeling to the user. There are many navigation apps like Google Maps and Apple Maps that have already established a trusted way of navigating on our phones, I wanted to take this approach with the interactivity of Waze to create a solution that offers users a way to have an informed ride on transit. Users also have extra accessibility options available.</p> */}
          </div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="the next step forward landing and about page view" />
      </section>
      <section className="image-left">
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="the next step forward user personas" />
        <div className="text-wrap">
          <p>When organizing all of my findings during the research phase it was instantly clear that these users of mainly 55+ wanted so much to be valued and were vary weary of being taken advantage of, due to past experiences. They wanted to find information immediately and not feel like they had to sift through countless pages in order to get that. Another pain I found was having an easy way to contact these services and have a transparent pricing page - not having pricing available online sent the message to these users that there could be an element of dishonestly they are trying to avoid.</p>
          <p className="large-text">Jobs to be done in this project centre around giving clear information of the services offered, the team their clients would be working with and an easy way to find out contact information and service pricing along with past client experiences. I wanted to find out how to offer this information in the most supportive way to land clients for The Next Step Forward.</p>
        </div>
      </section>
      <section className="image-right">
        <div className="text-wrap">
          <p>Companies who already offer this type of service include Miracle Movers and Red Coats Moving, while the site aesthetic did not appeal to either myself or the stakeholder we did find out that these companies are showcasing themselves on sites like Alignable, Homestars and teaming up with services like Resolved. We took that information and put it into our strategy to showcase the business. The Next Step Forward also had a desire to give back to the community by donating unsold items from their clients to the Covenants House along with a percentage of sales to help provide safe shelter, food, clothes and life-changing programs for homeless youth.</p>
          <p>The goal was to make all information readily available to users in a breathable webpage that is interesting to look at as opposed to paragraphs upon paragraphs of information that some of their competition offers. We explored different types of layouts with a rounded feel - one thing the stakeholders requested was that we have more information on the homepage including more calls to action allowing the user to get started right away, along with service descriptions and more information about each team member.</p>
          <p className="large-text">On the homepage users have access to information like team, services, a meaningful mission statement and many easy ways to contact The Next Step Forward. For pricing the stakeholders and I decided to keep that on an independent services & pricing page so the homepage doesn’t come off as too cluttered. This gives users the tools needed to make an informed decision they can feel good about.</p>
          {/* <p> Take a look at the live website linked below to see how I compiled all of my findings into the final product.</p> */}
        </div>
        <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="the next step forward wireframes" />
      </section>
      <div className="stand-alone-image">
        <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="the next step forward home, about and services full page view" />
      </div>
    </div>
    <section className="project-links next-step-links">
      <div className="wrapper">
        <p className="category">UX | UI | user research | HTML | SCSS | JS</p>
        <p className="subtitle">Whether it is for you or a loved one, moving can be stressful and overwhelming. Let The Next Step Forward help, they can assist with decluttering, managing your move, and setting up your new home with experience and compassion.</p>
        <div className="button-wrap">
          <a href="http://thenextstepforward.ca/" className="button" target="_blank" rel="noopener noreferrer" >View Live Website</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "next-step/next-welcome.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "next-step/next-user-personas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "next-step/next-wireframes.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "next-step/next-page-macbooks.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
