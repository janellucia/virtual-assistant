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
      <section className="project-info intro">
        <div className="project-copy">
          <h2>Creating a website and presence for a growing brand and business</h2>
          <p>The Next Step Forward offers help decluttering, downsizing, staging your home along with moving and new home set up. Their target audience is people in the 55+ range and those helping their parents or loved ones organize and move.</p>
          <p>I wanted to solve this design challenge using the Sprint Method for answering tough questions through prototyping and testing ideas with users. The Sprint Method allows me to merge business strategy, design, and innovation.</p>
          <h3>Role</h3>
          <p>I was the lead designer &amp; developer on this project. I created The Next Step Forward's online design system and developed a fully responsive website.</p>
          <h3>The Challenge</h3>
          <p>The challenge of this project was to come up with an informed and researched online strategy and design system for a growing brand and business.</p>
          <h3>The Solution</h3>
          <p>The solution is to use design thinking to design and build a website, capturing the brands' compassion and value in an online platform and help The Next Step Forward gain new clients.</p>
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
              <li>Functioning Website</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
          <h2>Map</h2>
        <div className="project-copy project-steps">
          <p>To start things off I want to map the problem and pick a place of focus, set the projects long term goals and the questions that will need to be answered.</p>
          <p>I met with the stakeholders and facilitated a discussion where we defined the main goals and user personas. The stakeholders are looking for an informative site that gives users information about services, pricing and easy contact information.</p>
          <p>I reached out to friends and family who may need this type of service for interviews. I wanted to find out how users are currently finding these services and what they look for when making a decision, understand their pains when outsourcing a full-service company like TNSF.</p>
          <p>Many users aged 55+ shared stories of how they felt unsupported when considering major life decisions like moving from their family home and are looking for someone experienced to inform the process. </p>
          <p>Users who would use this for their parents or loved ones shared feelings that they want to make sure their parents are <span className="italic">“being taken care of in a compassionate way”</span>.</p>
          <ul className="informative-list">
            <h3>With the help of the stakeholders and users, I was able to define the main project goals</h3>
            <li>How might we showcase information to clients like contact, about, and services?</li>
            <li>How might we get clients to book services?</li>
            <li>How might we promote a calm and inclusive look and feel to the product?</li>
            <li>How might we create consistent styles throughout the website to meet accessibility guidelines?</li>
          </ul>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Research</h2>
        <div className="project-copy project-steps">
          <p>I got so much information from our stakeholders and users and now I want to spend time understanding the market’s vulnerabilities and opportunities for differentiation by looking into the competitive landscape. </p>
          <p>Companies who already offer this type of service include Miracle Movers and Red Coats Moving, while the site aesthetic did not appeal to either myself or the stakeholder we did find out that these companies are showcasing themselves on sites like Alignable, Homestars and teaming up with services like Resolved.</p> 
          <p>We took that information and put it into our business strategy to explore more ideas in the sketch phase.</p>
        </div>
      </section>
      <section className="project-info">
        <h2>Sketch</h2>
        <div className="project-copy project-steps">
          <p>I sketched out a few three-panel storyboards drawn on a piece of paper that shows what users will see as they interact with the website. I chose to focus on Home, About, Services and Contact because it’s important to target a specific area of the map and this also allows me to be mindful of any unconscious bias I may have when designing for the ageing population.</p>
          <p>My main focus is to create a peaceful atmosphere with easily accessible information and clear calls to action. The main takeaway I got when speaking to users is there is a huge demand for easy to navigate websites, having information hard to find gives these users the impression of dishonesty or that there is something to hide.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Decide</h2>
        <div className="project-copy project-steps">
          <p>With the sketches created in the last phase, I need to work with the stakeholders to make some decisions so there is a clear design vision for the website, in my opinion, the best way to arrive at a solution is through dot-voting.</p>
          <p>We explored different types of layouts with a rounded feel - one thing the stakeholders requested was that we have more information on the homepage including more calls to action allowing the user to get started right away, along with service descriptions and more information about each team member.</p>
          <p>Once the group decided, I took the winning sketches and ideas and strung them together into a storyboard, all tightly connected to form a cohesive story for the user.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Prototype</h2>
        <div className="project-copy project-steps">
          <p>Now it's time to focus on creating a realistic prototype, In order to be prepared for the prototype, I need to first cover all bases with some Colour Theory and Typography. The surface of the website is what users will notice right away: the visual language of the brand.</p>
          <p>Once I finalized the brand colour's and typography I referenced the storyboard I created in the last step and created a working prototype, this allowed me to do one last round of testing on the design before investing significant energy and effort by building the entire website.</p>
          <p></p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Test</h2>
        <div className="project-copy project-steps">
          <p>User testing is the final step of the Sprint Method. So far I sketched mulitple ideas, chose the best option with the stakeholders, and built a realistic prototype. Now I need to finalize how the final product will look with input from real people.</p>
          <p>I introduced 5 users to the prototype asking open-ended questions like how would you perform this action along with tasks to see if the user is able to find information at ease.</p>
          <p>During the testing phase, I learned that users like having obvious calls to action, with many options to find contact and pricing information, so I needed to make these features more prominent. Users also stated they would like a sticky menu at the top of the screen. When users completed the tasks I debriefed with the user to get overall thoughts and impressions of the site designs before going into production.</p>
        </div>
      </section>
      <section className="project-info">
        <h2>Solution</h2>
        <div className="project-copy project-steps">
          <p>Once designs were finalized and tested I started building the site right away. The stakeholders and I felt confident that information is readily available to users in a breathable webpage that is interesting to look at.</p>
          <p> The homepage allows users to access information about the team, services, a meaningful mission statement and many easy ways to contact TNSF. With an independent Services & Pricing page, the homepage doesn’t come off as too cluttered. This gives users the tools needed to make an informed decision they can feel good about.</p>
          <p>It was a pleasure and inspiration working with TNSF, they are a compassionate group of people dedicated to giving back to the community, they donate unsold items from their clients to the Covenants House along with a percentage of sales to help provide safe shelter, food, clothes and life-changing programs for homeless youth.</p>
          <p>Take a look at the final product, a fully functioning website designed and created by yours truly.</p>
          <a href="http://thenextstepforward.ca/" className="button" target="_blank" rel="noopener noreferrer" >View Live Website</a>
        </div>
        <div className="good-final-images">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} />
        </div>
      </section>
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
    imageOne: file(relativePath: { eq: "next-step/next-personas-flow-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "next-step/next-user-flow.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "next-step/next-user-personas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "next-step/next-sketch-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "next-step/next-sketch-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "next-step/next-wireframes-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "next-step/next-wireframes-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "next-step/next-type-colour.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "next-step/next-colour-palette.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "next-step/next-typography.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "next-step/next-screens-desktop-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "next-step/next-screens-desktop-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "next-step/next-screens-desktop-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "next-step/next-screens-desktop-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "next-step/next-screens-desktop-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "next-step/next-screens-mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "next-step/next-screens-mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEighteen: file(relativePath: { eq: "next-step/next-screens-mobile-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNineteen: file(relativePath: { eq: "next-step/next-screens-mobile-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwenty: file(relativePath: { eq: "next-step/next-screens-mobile-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    
  }
`
