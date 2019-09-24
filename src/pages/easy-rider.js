// ---
// slug: easy-rider
// ---

import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Easy = (props) => (
  <Layout name="project-page">
    <SEO title="Easy Rider" />
    <section className="title">
      <div className="wrapper">
        <h1>Easy Rider — Transit App</h1>
        <p className="subtitle">People helping people have an easy ride.</p>
        <div className="button-wrap">
          <a href="https://invis.io/CDRGBNLJEFK#/357131010_1_-_Welcome" className="button" target="_blank" rel="noopener noreferrer">View Invision Prototype</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info intro">
        <div className="project-copy">
          <h2>Creating an app that benefits public transit and its riders</h2>
          <p>In the first portion of Hacker You's UX course I was given the task of forming an app idea that would help public transit in a positive way. </p>
          <p>I wanted to address the need for interactive travelling on public transit. If you’re driving a vehicle you have access to apps such as Waze that allow users to interact with one another and report delays or incidents that other drivers would benefit from. I want to empower users with the most up to date information about transit from a reliable source.</p>
          <p>I went to solve this design challenge using the 5-step Sprint Method for answering tough questions through prototyping and testing ideas with users.</p>
          <h3>Role</h3>
          <p>I was the student/lead designer on this project. I created the Easy Rider app and design system.</p>
          <h3>The Challenge</h3>
          <p>To give users a platform to interact so they can help each other plan ahead and act in an informed way when riding transit to avoid any sudden delays. </p>
          <h3>The Solution</h3>
          <p>The solution for Easy Rider is to design an app, design system, and brand identity along with a high fidelity prototype to showcase the final product.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>User Research</li>
              <li>Design Strategy</li>
              <li>App Design Assets</li>
              <li>High Fidelity Prototype</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
          <h2>Map</h2>
        <div className="project-copy project-steps">
          <p>To start I need to map the problem and pick a place of focus, set the projects goals and the questions that will need to be answered. I did this by talking to users and looking into the competitive landscape.</p>
          <p>During user interviews, I found that the 85% of riders interviewed would like to avoid crowds and are “frustrated” with the number of delays that occur and an overall feeling of being uninformed when riding transit.</p>
          <p>I also found that some people would even change their work schedule to accommodate an easier commute, others even take a detour route to enjoy an easier ride. One thing became clear Toronto’s transit riders are looking for a reliable source of information in order to enjoy a comfortable ride.</p>
          <p>There are many amazing apps out there offering parts of my intended idea. The Easy Rider concept will be a combination of Waze, Google Maps, and Transit App. I liked how Waze allows users to give each other information about traffic and the way the app gives user updates. I looked to Google when considering the map feature, and Transit App for transit route timing and API usage.</p>
          <ul className="informative-list">
            <h3>After running through idea's, talking to users, and scoping the market I was able to define my app's goals:</h3>
            <li>How might we give reliable travel times?</li>
            <li>How might we encourage users to add feedback?</li>
            <li>How might we offer tips to travel smarter?</li>
            <li>How might we save trips and addresses for customized travel information?</li>
          </ul>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Sketch</h2>
        <div className="project-copy project-steps">
          <p>Now that I have a good idea of what my app is going to be, based on user interviews and feedback. I want to start sketching ideas, I need to take a combination of the idea statement, JTBD, HMW, and competitors notes and turn that into an interesting user interface.</p>
          <p>I sketched my ideas down on paper using the crazy 8's method to present multiple options. This is an extremely rough draft drawn on a piece of paper that shows key features for users when interacting with the app. </p>
          <ul className="informative-list">
            <h3>Screens that needed to be included in this phase:</h3>
            <li>Home screen (map)</li>
            <li>Nearby routes with est. times</li>
            <li>Reporting an incident</li>
            <li>Travel tips</li>
            <li>How users get alerts</li>
          </ul>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Decide</h2>
        <div className="project-copy project-steps">
          <p>This being an independent class project, I'm not working in a team or stakeholders, so I turned to trusted friends, teachers, and mentors for help with the decision phase. I had them vote on favourite solutions and used that information the same way I would in dot-voting.</p>
          <p>Once the group decided, I took the winning sketches and ideas and put them together into a storyboard, all tightly connected to form a cohesive story from the users point-of-view.</p>
          <p>The user story detailed below shows how a user would interact with the app during the morning commute, entering location &amp; destination, finding out best travel times, reporting incidents, checking out best travel times, and rating rides.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Prototype</h2>
        <div className="project-copy project-steps">
          <p>When it came time for prototyping I wanted to first define brand colours, typography and iconography. From there I referenced my storyboard to create the version ready for user testing.</p>
          <p>My vision for the design was to create a clean and simplified layout that offered a confident and reliable feeling to the user. Much of my inspiration came from the Material.io design system and when considering maps, I went straight to Google and Apple since they already established a trusted way of getting directions on our phone.</p>
          <ul className="informative-list">
            <h3>Easy Rider Prototype Checklist</h3>
            <li>
              Define Style Guide
              <ul className="informative-secondary-list">
                <li>Colour Palette</li>
                <li>Typography</li>
                <li>Iconography</li>
              </ul>
            </li>
            <li>Design app screens in Sketch.app</li>
            <li>Create a prototype with Invision</li>
          </ul>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Test</h2>
        <div className="project-copy project-steps">
          <p>Now that I have my prototype ready to go, I can start user testing with a more refined product. I structured the interview questions in order to give the interviewee as much context as possible. I wanted to find out what is the intuitive way users navigate the app, uncover user pain points, and gather data to reframe any design challenges.</p>
          <p>During the interview process, I learned that getting immediate current location route information is the most important to users. I also found out that Travel Tips is prefered over Best Travel Times, and that I needed to visually make tips and notifications stand out more. </p>
          <ul className="informative-list">
            <h3>Basic overview of interview questions</h3>
            <li>How often do you take transit and when do you travel?</li>
            <li>If you needed to find out how to get to your next destination the fastest way possible, how would you find that information?</li>
            <li>If you knew you had new notifications, where would you retrieve them?</li>
            <li>How would you go about submitting transit updates?</li>
            <li>Between Best Travel Times &amp; Travel Tips, which is more intuitive?</li>
          </ul>
        </div>
      </section>
      <section className="project-info">
        <h2>Solution</h2>
        <div className="project-copy project-steps">
          <p>I was able to take the information gained during the testing round and make some style and layout changes. This is the perfect app for all my fellow introverts who find an overcrowded subway a major drag. This app allows users to leave a short message to describe any transit incidents involving line delays, traffic accidents, medical emergencies or any other factor contributing to a delay in your commute.</p>
          <p>All incidents reported are available to other users via notifications, so they can begin their transit journey informed and aware of any potential barriers. Users are able to see wait times for nearby lines and get transit directions to their desired destination.</p>
          <p>Users also have access to Travel tips and tips vary from suggested travel times to how to cope with crowded subways. This gives users the necessary tools to plan ahead and choose less crowded travel times in order to enjoy an easier commute.</p>

          <p>Take a look at the Invision prototype to see how app interactions are intended to work, designed for an iPhone XS.</p>
          <a href="https://invis.io/CDRGBNLJEFK#/357131010_1_-_Welcome" className="button" target="_blank" rel="noopener noreferrer">view Invision Prototype</a>
        </div>
        <div className="good-final-images">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <section className="project-links">
      <div className="wrapper">
        <p className="thank-you">—Thank you </p>
      </div>
    </section>
    <section className="more-projects">
      <div className="wrapper">
        <h2 className="thank-you">Other Projects</h2>
        <a className="menu-item" href="/good-ones-academy">The Good Ones Academy</a>
        <a className="menu-item" href="/ivawithaneye">Iva with an eye</a>
        <a className="menu-item" href="/yoga-by-daisy">Pace yourself yoga by Daisy</a>
        <a className="menu-item" href="/livie-jewelry">Livie Jewelry</a>
        <a className="menu-item" href="/next-step-forward">The Next Step Forward</a>
        <a className="menu-item" href="/kindred-academy">Kindred Academy</a>
        <a className="menu-item" href="/lettering-archive">Lettering Archive</a>
        <a className="menu-item" href="/easy-rider">Easy Rider</a>
      </div>
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "easy-rider/easy-flow-map-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "easy-rider/easy-user-flow.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "easy-rider/easy-user-personas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "easy-rider/easy-sketch-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "easy-rider/easy-sketch-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "easy-rider/easy-storyboard-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "easy-rider/easy-storyboard-mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "easy-rider/easy-storyboard-mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "easy-rider/easy-type-colour.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "easy-rider/easy-colour-palette.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "easy-rider/easy-typography.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "easy-rider/easy-screens-desktop-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "easy-rider/easy-screens-desktop-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "easy-rider/easy-screens-desktop-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "easy-rider/easy-screens-desktop-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "easy-rider/easy-screens-desktop-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "easy-rider/easy-screens-mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEighteen: file(relativePath: { eq: "easy-rider/easy-screens-mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNineteen: file(relativePath: { eq: "easy-rider/easy-screens-mobile-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwenty: file(relativePath: { eq: "easy-rider/easy-screens-mobile-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwentyone: file(relativePath: { eq: "easy-rider/easy-screens-mobile-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
