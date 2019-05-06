import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout>
    <SEO title="Project | Easy Rider" />
    <section className="title good-ones-title">
      <div className="wrapper">
        <h1>Good Ones Academy</h1>
        <p className="subtitle">A group of artists bringing technical education for the contemporary forward thinking beauty professionals.</p>
        <div className="button-wrap">
          <a href="https://invis.io/CDRGBNLJEFK#/357131010_1_-_Welcome" className="button" target="_blank" rel="noopener noreferrer">Invision Prototype</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="image-right">
          <div className="text-wrap">
            <h2>Design Thinking</h2>
            <p>My vision for Easy Rider was to address the need for interactive traveling on public transit. If you’re driving a vehicle you have access to apps such as Waze that allow users to interact with one another and report delays or incidents that other drivers would find helpful. Easy Rider is meant to empower users to get the most up to date information about traffic from a reliable source. </p>
            <p>The main goal is to get users to interact so they can help each other plan ahead and act in an informed way when riding transit to avoid any sudden delays. This is the perfect app for all my fellow introverts who find an overcrowded subway a major drag.</p>
            <p className="large-text">As I went through user-research and interviews I found that the majority of riders would like to avoid crowds and are frustrated with the amount of delays that occur and an overall feeling of being uninformed when riding transit.</p>
            <p> After further research I found that some people would even change their work schedule to accommodate an easier commute, others even take a detour route to enjoy an easier ride. One thing became clear Toronto’s transit riders are looking for a reliable source of information in order to enjoy a comfortable ride.</p>
            <p>When thinking about design I wanted to create a clean and simplified layout that offered a confident and reliable feeling to the user. Much of my inspiration came from the Material.io design system and when considering maps, there are many navigation apps offered by Google and Apple that have already established a trusted way of getting directions on our phone, I wanted to take this approach with the interactivity of Waze to create a solution that offers users a way to have an informed ride on transit.</p>
          </div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </section>
      <section className="image-left">
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <div className="text-wrap">
          <p>This app allows users to leave a short message to describe any transit incidents involving line delays, traffic accidents, medical emergencies or any other factor contributing to a delay in your commute. </p>
          <p className="large-text">All incidents reported are available to other users via notifications, so they can begin their transit journey informed and aware of any potential barriers. Users are able to see wait times for nearby lines and get transit directions to their desired destination.</p>
          <p>Users also have access to Travel tips and tips vary from suggested travel times to how to cope with crowded subways. This gives users the necessary tools to plan ahead and choose less crowded travel times in order to enjoy an easier commute.</p>
          <p className="large-text">Take a look at the Invision prototype (link below) to see how app interactions are intended to work.</p>
        </div>
      </section>
      <div className="stand-alone-image">
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      </div>
    </div>
    <section className="project-links good-ones-links">
      <div className="wrapper">
        <p className="category">UI | UX | user research | studio | invision</p>
        <p className="subtitle">The Good Ones Academy offers accessible hair and makeup classes to the masses.</p>
        <div className="button-wrap">
          <a href="https://invis.io/CDRGBNLJEFK#/357131010_1_-_Welcome" className="button" target="_blank" rel="noopener noreferrer">Invision Prototype</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "easy-rider/welcome.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "easy-rider/style-guide.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "easy-rider/notifications-tips.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
