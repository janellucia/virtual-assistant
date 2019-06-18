import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout name="project-page good-ones">
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
      <section className="project-info intro">
        <div className="project-copy">
          <h2>Creating an online platform for an evolving brand and business</h2>
          <p>The good ones academy started as a group of artists collaborating to bring in-person hair workshops to beauty professionals looking to level up their skills. Their workshops were a hit and the good ones academy quickly became industry leaders teaching high end, quality workshops to some of Toronto’s top talent.</p>
          <p>When The Good Ones came to me with the desire to move their workshops online I set out to solve this design problem using the 5 Planes of UX Methodology.</p>
          <h3>Role</h3>
          <p>I was the lead designer on this project. I created an online strategy and design system for the good ones academy.</p>
          <h3>The Challenge</h3>
          <p>The challenge of this project was to come up with an informed and researched online strategy and design system for an evolving brand and business.</p>
          <h3>The Solution</h3>
          <p>The solution was to design an online strategy from the ground up, capturing the brand's excitement and value in an online educational platform. I then built a highly-effective website that helps educate beauty professionals.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Facilitate Discussions</li>
              <li>User Research</li>
              <li>Design Strategy</li>
              <li>Website Assets</li>
              <li>High Fidelity Prototype</li>
            </ul>
          </div>
          {/* <div>
            <h3>Deliverables</h3>
          </div> */}
        </div>
      </section>
      <section className="project-info">
          <h2>Strategy</h2>
        <div className="project-copy project-steps">
          <p>Strategy concerns the 5Ws – the who, what, where, when and the why behind things and defining the business goals, user goals, and where they overlap. </p>
          <p>I gathered the stakeholders for a facilitated discussion to better understand their goals, what they view as barriers, questions they would like answered with their platform, user assumptions, and who are already offering this type of service in an interesting way. This helped me better define the challenge and create a strategy tailored to the unique needs of The Good Ones Academy.</p>
          <p className="column-break">When it was time to talk to users and The Good Ones have a great following on instagram and suggested we use instagram stories to ask meaningful questions and reach a larger portion of their audience who may live in different cities and towns.</p>
          <ul className="informative-list">
            <h3>The products main goals are:</h3>
            <li>To get users to purchase education.</li>
            <li>Provide education that is easy to use in quick digestible segments.</li>
            <li>Give users access anywhere, any time.</li>
            <li>Provide and intimate look at the instructor backgrounds and history.</li>
          </ul>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Scope</h2>
        <div className="project-copy project-steps">
          <p>Scope is about defining requirements based on the goals established in strategy with research &amp; analysis of the competitive landscape when thinking about features and functionality.</p>
          <p>I found there are many direct competitors offering online hair education. I went into research mode to find out what these platforms are offering, how they define their pricing and access process, what mistakes they are making and what are they doing right. </p>
          <p>Many platforms came off as outdated or unorganized offering subscription services without access to a single video for a user to test out the platform. When considering the goal of making the platform personal with access to the instructors' history and objectives, and failing to see that in similar platforms in the hair industry I saw a real opportunity to differentiate ourselves in the market. </p>
          <p>I also took notes from hairstylists offering video content on youtube who offer a more personalized approach, they have well-defined brand's and they authenticly engage with their audience.</p>
          <p>The competitive landscape was a valuable piece of the process to understand the platform's objectives and provide insight into how others are accomplishing goals similar to The Good Ones.</p>
        </div>
      </section>
      <section className="project-info">
        <h2>Structure</h2>
        <div className="project-copy project-steps">
          <p>Building off strategy and scope, the experience now needs a conceptual structure. Structure defines the patterns and sequences in which experiences are presented to users.</p>
          <p>I then listed all possible features and ran them through a feature filter and I was able to choose the key features the app needed to have to be a successful solution for its users.</p>
          <p>The features helped define what screens I would need to design as well as a user’s journey throughout the platform.</p>
          <ul className="informative-list column-break">
            <h3>Key Features</h3>
            <li>An education area for users to search for specific tutorials/instructors and purchase videos.</li>
            <li>About the team and instructor's in an intimate look into their journey through the hair and beauty industry</li>
            <li>A shop for users to purchase brand merch to allow users to continue their experience and gain more exposure for the brand.</li>
            <li>A way for users to easily contact The Good Ones in a direct way.</li>
          </ul>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Skeleton</h2>
        <div className="project-copy project-steps">
          <p>The skeleton is the blueprint of how elements are arranged so that users can interact with the product. Right now, we want to define the evolution of personas and wireframes to get ready for user testing.</p>
          <p>I sketched out what I thought elements should look like and where they should exist on each screen. Then placed the cards in front of users and asked questions like “What do you see here? And where would you click next” to understand if the screens were intuitive.</p>
          <p>To kick start the final design solution I completed a round of user testing to ensure my assumptions on how users would use the app were correct. I took this feedback and redesigned my iterations to optimize the arrangements of elements. </p>
          <p>This piece of the process is valuable to address user pain points before heading into wireframes. And allows quick iteration and refinement before solidifying the final design.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Surface</h2>
        <div className="project-copy project-steps">
          <p>When creating the surface of the platform we want to define the colour palette, typography, iconography and use that to create a high fidelity prototype to present to the stakeholders.</p>
          <p>My goal was to design a platform that users can easily find education, get intimate with their instructors and shop for brand merch. Throughout the process, I learned it needed to be more than that, the platform needed to feel like getting advice from a friend or a trusted mentor, a calm and safe place for users to gain new skills and create a new sense of confidence in their craft.</p>
          <ul className="informative-list">
            <h3>I was able to accomplish this by:</h3>
            <li>Designing large elements/and simple screens so the user can immerse themselves in education in an easy way.</li>
            <li>I choose a simple colour palette of blues and golds to create a calm and non-gender biased inviting space. </li>
            <li>Gilroy was the main font used throughout the platform because I felt the rounded font lent to a friendly non-clinical atmosphere.</li>
          </ul>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Solution</h2>
        <div className="project-copy project-steps">
          <p>The Good Ones Academy, a platform that users can engage in useful education to help propel their skills in the hair and beauty industry. This platform allows users to upgrade skills, learn about the team and instructors, and shop for brand specific merch. The education that will be offered allows the user to gain the confidence to take the next step in their career.</p>
          <p>Take a look at the Invision prototype to see how app interactions are intended to work, designed for an iPhone XS.</p>
          <a href="https://invis.io/SGS36PZCEY9#/364068922_loading_Screen" className="button" target="_blank" rel="noopener noreferrer">view Invision Prototype</a>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
        </div>
      </section>
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
    imageOne: file(relativePath: { eq: "good-ones/good-stickies-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "good-ones/good-stickies-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "good-ones/good-user-journey-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "good-ones/good-user-journey-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "good-ones/good-ones-wireframes.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "good-ones/good-ones-wireframes-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "good-ones/good-user-personas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "good-ones/good-user-journey-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "good-ones/good-colour-palette.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "good-ones/good-typography.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "good-ones/good-page-layout.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "good-ones/good-page-layout-mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "good-ones/good-page-layout-mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }


`
