import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout>
    <SEO title="Project | Good Ones" />
    <section className="title good-title">
      <div className="wrapper">
        <h1>Good Ones Academy</h1>
        <p className="subtitle">A group of artists bringing technical education for the contemporary forward thinking beauty professionals.</p>
        <div className="button-wrap">
          <a href="https://invis.io/SGS36PZCEY9#/364068922_loading_Screen" className="button" target="_blank" rel="noopener noreferrer">Invision Prototype</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="image-right">
          <div className="text-wrap">
            <h2>Design Thinking</h2>
            <p>The good ones academy started as a group of artists collaborating to bring hair workshops to beauty industry professionals looking to level up their skills. The in person workshops were a hit and the good ones academy quickly became industry leaders teaching high end, quality workshops to some of Toronto’s top talent within the beauty industry. </p>
            <p>When The Good Ones came to me with the desire to move their hair education online in a strategic way I set out to solve this design problem using the 5 Planes of UX Methodology. Using this process is helpful if you already have a clear understanding of what the final product will be. In this case the project requirement was to design a mobile platform with desktop capabilities.</p>
            <p>The main goal is to offer online hair education in an accessible way so we can reach hairstylists on a larger scale and propel them into the career they curate themselves. This is the perfect space for hairstylists looking to level up their skills to offer better services and/or move on to editorial work with celebrities and magazines.</p>
            <p><strong>The first step is Strategy,</strong> I gathered the stakeholders to facilitate a brainstorming session to get a better understanding of their goals, what they view as barriers, questions they would like answered with their platform, user assumptions and questions we need answered and who is already offering this type of service in an interesting way. This helped me better define the challenge to create a strategy tailored to the unique needs of The Good Ones Academy.</p>
          </div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </section>
      <section className="image-left">
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <div className="text-wrap">
          <p>When it was time to talk to users and The Good Ones have a great following on instagram and suggested we use instagram stories to ask meaningful questions and reach a larger portion of their audience who may live in different cities and towns. I learnt that the users I was designing this platform for needed the app to be: 1. Easy to use in quick digestible segments. 2. A learning tool to access anywhere at anytime. 3. Something that has an editorial look and feel to it.</p>
          <p><strong>The second step is to define the project’s scope.</strong> I found there are many direct competitors offering online hair education. I quickly went into research mode to find out what these platforms are offering, how they define their pricing and access process, what mistakes they are making and what are they doing right. </p>
          <p>Many platforms came off as outdated or unorganized offering subscription services without access to a single video for a user to test out the platform. The good ones have stated from the start they want their platform to be personal with access to the instructors history and objectives, I failed to see that in the hair industry. I also took notes from hairstylists offering video content on youtube who offer a more personalized approach they have well defined brands and great engagement with their audience.</p>
          <p>The competitive landscape was a valuable piece of the process to understand this platforms objectives and provided insight into how others are accomplishing similar goals to The Good Ones.</p>
        </div>
      </section>
      <section className="image-right">
          <div className="text-wrap">
            <p><strong>The third step of my process was to create content structure.</strong> I then listed all possible features and ran them through a feature filter I was able to choose the key features the app needed to have to be a successful solution for its users.</p>
            <p>The Key Features included:</p>
            <ul>
              <li>An education area for users to search for specific tutorials/instructors and purchase videos.</li>
              <li>About the team and instructors in an intimate look into their journey through the hair and beauty industry</li>
              <li>A shop for users to purchase brand merch to allow users to continue their experience and gain more exposure for the brand.</li>
              <li>A way for users to easily contact The Good Ones in a direct way.</li>
            </ul>
            <p>The features helped define what screens I would need to design as a well as a user’s journey throughout the platform.</p>
            <p><strong>The fourth step is to create the platform’s skeleton.</strong> To kick start the final design solution I completed a round of user testing to ensure my assumptions how how users would use the app were correct. I took this feedback and redesigned my iterations to optimize the arrangements of elements. </p>
            <p>In this stag I used Paper Prototypes and these are a great low hifi/low cost way to test concepts with users. I sketched out what I thought elements should look like and where they should exist on each screen. Then placed the cards in-front of users and asked questions like “What do you see here? And where would you click next” to understand if the screens were intuitive.</p>
            <p>This piece of the process is valuable to address user pain points before heading into wireframes. And allows quick iteration and refinement before solidifying the final design.</p>
          </div>
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      </section>
      <section className="image-left">
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        <div className="text-wrap">
          <p>In the fifth stage of my process was to create the surface of the platform. I defined the colour palette, typography, iconography and used that to create a high fidelity design composition to present to the stakeholders.</p>
          <p>My goal was to design a platform that users can easily find education, get intimate with their instructors and shop for brand march. Throughout the process I learnt it needed to be more than that. The platform needed to feel like getting advice from a friend or a trusted mentor, a calm and safe place for users to gain new skills and create a new sense of confidence in their craft.</p>
          <p>I was able to accomplish this by:</p>
          <ul>
            <li>Designing large elements/and simple screens so the user can immerse themselves in education in an easy way.</li>
            <li>I choose a simple colour palette of blues and golds to create a calm and non gender biased inviting space. </li>
            <li>Gilroy was the main font used throughout the platform because I felt the rounded font lended to a friendly non-clinical atmosphere.</li>
          </ul>
          <p><strong>Solution:</strong> The Good Ones Academy, a platform that users can engage in useful education to help propel their skills in the hair and beauty industry. This platform allows users to upgrade skills, learn about the team and instructors, and shop for brand specific merch. The education that will be offered allow the user to gain confidence to take the next step in their career.</p>
          <p>Take a look at the Invision prototype (link below) to see how app interactions are intended to work, design for an iPhone XS.</p>
        </div>
      </section>
      <div className="stand-alone-image">
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      </div>
    </div>
    <section className="project-links good-links">
      <div className="wrapper">
        <p className="category">UX | UI | user research | design | invision</p>
        <p className="subtitle">The Good Ones Academy offers accessible hair and makeup classes to the masses.</p>
        <div className="button-wrap">
          <a href="https://invis.io/SGS36PZCEY9#/364068922_loading_Screen" className="button" target="_blank" rel="noopener noreferrer">Invision Prototype</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "good-ones/good-ones-welcome.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "good-ones/good-ones-stickies.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "good-ones/good-page-layout.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "good-ones/good-ones-user-journey.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "good-ones/good-ones-final.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }


`
