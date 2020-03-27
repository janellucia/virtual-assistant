import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'



const Daisy = (props) => (

  <Layout name="project-page">
    <SEO title="Pace yourself Yoga by Daisy" />
    <section className="title">
      <div className="wrapper">
        <h1>Pace yourself yoga by Daisy</h1>
        <p className="subtitle">Daisy is an independent yoga instructor, one of the incredible benefits of her practice is its ability to help us feel more connected to our physical body.</p>
      </div>
    </section>
    <div id="yoga-by-daisy" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating a brand identity for an independent yoga instructor</h2>
          <p>In modern times where peak performance is expected and work-life balance nonexistent, never slowing down has become the norm. Daisy has used her training to curate a unique flow to help us slow the mind, connect to sensation, and feel calmer and more settled, this is something we could all benefit from every now and then. The goal here is to create a brand to reflect those values.</p>
          <h3>Role</h3>
          <p>I was the lead designer/researcher on this project. I worked with stakeholders to create Pace yourself yoga by Daisy's style guide &amp; brand identity.</p>
          <h3>The Challenge</h3>
          <p>The challenge was to take a new brand (Pace yourself yoga by Daisy) and create a well defined brand strategy as well as marketing materials to grow with the brand over the next few years.</p>
          <h3>The Solution</h3>
          <p>The solution was to deliver a well strategized brand for real results. Success in this project will be measured by growth in customers and sales, and a new market of customers.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Research</li>
              <li>Brand Strategy</li>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Instagram Assets</li>
              <li>Marketing Assets</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info intro">
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <h2>Developing a Strategy</h2>
        <div className="project-copy project-steps">
          <p>Daisy is one of the most beautiful people (inside & out) I've met and having known her for many years and witnissing her take her passion for yoga and become a serious instructor was extremely inspiring. Daisy set off to India to gain her training straight from the roots of where yoga began.</p>
          <p>When developing the strategy we surfaced the challenges the Daisy faced as an independant yoga instructor. In the process, we prioritized the needs and goals of the business and its clients. This became the foundation for the branding and marketing plans for Pace yourself yoga by Daisy.</p>
          <p className="large-text">So, how might we create a meaningful brand identity to uplift and engage users?</p>
        </div>
      </section>
      <section className="project-info">
        <h2>Understanding the Users</h2>
        <div className="project-copy project-steps-full">
          <p>Pace yourself yoga by Daisy is all about helping people relax, let go and bring their focus within. To understand the needs of these clients, we created unique user profiles to represent the range of our users. This painted a clear picture of their demographics, needs and wants.</p>
          <p> </p>
          <p> </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Defining the Brand</h2>
        <div className="project-copy project-steps-full">
          <p>Through a series of exercises in the strategy session, we were able to extract and refine the key pillars of the brand. This defined the brand’s personality: how it should look, sound, act, and feel.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Positioning</h2>
        <div className="project-copy project-steps-full">
          <p>Understanding what Pace yourself yoga by Daisy's brand is and who she is a champion for, helped define the positioning statement of the brand. This set the tone for everything created for the brand.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Brand Identity System</h2>
        <p>Pace yourself yoga by Daisy's brand is made up of 4 core elements.</p>
        <div className="brand-elements">
          <a href="#logo">
            <Img fluid={props.data.imageNine.childImageSharp.fluid} />
            <p>01 Logo</p>
          </a>
          <a href="#colour">
            <Img fluid={props.data.imageTen.childImageSharp.fluid} />
            <p>02 Colour</p>
          </a>
          <a href="#type">
            <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
            <p>03 Typography</p>
          </a>
          <a href="#imagery">
            <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
            <p>04 Imagery</p>
          </a>
        </div>
      </section>
      <section className="project-info" id="logo">
        <h2>01 Logo</h2>
        <div className="project-copy project-steps-full">
          <p>For the primary logo for Pace yourself yoga by Daisy we chose to go for non-conventional font unlike what we defined for general copy and marketing purposes called Digestive. Digestive's unpredictable curves represent what one goes through on their path to self-care. The logo is simple, bold and unique. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
        </div>
        <h3>Logo Explorations</h3>
        <div className="project-copy project-steps-full">
          <p>When brainstorming ideas for Daisy's new logo we knew that we wanted an approachable feel to it, something memorable to her network of yogi's that thinks outside the general confines of how we use typography.</p>
          <p>I explored options that used Daisy's defined fonts Bluu Next and Syne and I also played around with different options with Digestive font.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
        </div>
        <h3>Logo Final</h3>
        <div className="project-copy project-steps-full">
          <p>When arriving at the final logo design we knew we were on the right track because the curves in Digestive give us similar vibes to the Hindi script Devanagari. Staying true to Daisy's yoga roots in India is key to the success of this brand.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="colour">
        <h2>02 Colour</h2>
        <div className="project-copy project-steps-full">
          <p>Daisy's brand colours are bright and bold, bringing inspiration from both East and Western cultures. This stays true to Daisy's roots and message of staying grounded and connecting to the earth and one's self.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
        </div>
        <h3>Colour Defined</h3>
        <div className="project-copy project-steps-full">
          <p>When defining Daisy's brand colours it was important to her that while colours are happy and uplifting they also come from the earth's own wild colour palette, to stay true to the brands guidlines of spiritual and healing. The earth has such a large range of bright colours to choose from.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="type">
        <h2>03 Typography</h2>
        <div className="project-copy project-steps">
          <p>When exploring fonts for Daisy we knew that we wanted an interesting font pairing that remains minimal for general copy and marketing purposes. Our first defined font is Bluu Next Bold, which is sharp and precise, a totally good choice to replace any boring serif font we've all seen before.</p>
          <p>Syne was imagined with Bonjour Monde and designed for the art center Synesthésie, based in Saint-Denis in the very close suburb of Paris, France. Closely based on the art center’s team’s will to gather diverse artistic personalities to create fresh and enriching situations, the type family is an exploration into atypical associations in weights and styles.</p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentytwo.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="imagery">
        <h2>04 Imagery</h2>
        <div className="project-copy project-steps">
          <p>When establishing a imagery style for Daisy we wanted to have an easily recognizabile pattern that users would be to identify with. Daisy spends most of her time outside in nature and even conducts yoga classes in the park and by the water. We have some amazing shots of her by the water doing all those amazing yoga poses most of us only wish we could pull off.</p> <p>Daisy is an incredibly beautiful human and has some equally beautiful things to say, I will show you some marketing material later but when she is sharing her journey we thought it best to show herself along with it, and since Daisy is so inspired by the outdoors and has many great opportunities to travel having beautiful landscapes part of the brand allows Daisy to stay authentic to her audience.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentythree.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyfour.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Events</h2>
        <div className="project-copy project-steps-full">
          <p>As an independant yoga instructor Daisy is continuously offering yoga classes and events to her audience, we wanted to define some beautiful templates that Daisy can post on social media to entice her current yogi's and attract new yogi's.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentyfive.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentysix.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Quotes</h2>
        <div className="project-copy project-steps-full">
          <p>With the social media look and feel mostly defined in imagery a huge part of the brand is offering inspirational quotes to their users. This is meant to uplift her fellow yogi's and connect with them on a spiritual level.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentyseven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyeight.childImageSharp.fluid} />
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
        <a className="menu-item" href="/good-ones-academy">Good Ones Academy</a>
        <a className="menu-item" href="/daniela-bosco">Daniela Bosco</a>
        <a className="menu-item" href="/atria-coaching">Atria Coaching</a>
        <a className="menu-item" href="/bad-girls">Bad Girls Collective</a>
        <a className="menu-item" href="/girls-twenty">Livie Jewelry</a>
        <a className="menu-item" href="/ivawithaneye">Iva with an eye</a>
        <a className="menu-item" href="/lettering-archive">Lettering Archive</a>
        <a className="menu-item" href="/easy-rider">Girls 20</a>
      </div>
    </section>
  </Layout>
)

export default Daisy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "daisy/daisy-intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "daisy/daisy-intro-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "daisy/daisy-user-personas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "daisy/daisy-user-personas-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "daisy/daisy-design-principles.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "daisy/daisy-design-principles-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "daisy/daisy-positioning.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "daisy/daisy-positioning-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "daisy/daisy-brand-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "daisy/daisy-brand-colour.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEleven: file(relativePath: { eq: "daisy/daisy-brand-typography.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwelve: file(relativePath: { eq: "daisy/daisy-brand-imagery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirteen: file(relativePath: { eq: "daisy/daisy-logo-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFourteen: file(relativePath: { eq: "daisy/daisy-logo-final-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFifteen: file(relativePath: { eq: "daisy/daisy-logo-explorations.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSixteen: file(relativePath: { eq: "daisy/daisy-logo-explorations-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSeventeen: file(relativePath: { eq: "daisy/daisy-colour-intro.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEighteen: file(relativePath: { eq: "daisy/daisy-colour-intro-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageNineteen: file(relativePath: { eq: "daisy/daisy-colour-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwenty: file(relativePath: { eq: "daisy/daisy-colour-final-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyone: file(relativePath: { eq: "daisy/daisy-type-bluu.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentytwo: file(relativePath: { eq: "daisy/daisy-type-syne.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentythree: file(relativePath: { eq: "daisy/daisy-imagery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfour: file(relativePath: { eq: "daisy/daisy-imagery-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfive: file(relativePath: { eq: "daisy/daisy-instagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentysix: file(relativePath: { eq: "daisy/daisy-instagram-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyseven: file(relativePath: { eq: "daisy/daisy-instagram-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyeight: file(relativePath: { eq: "daisy/daisy-instagram-two-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }
`
