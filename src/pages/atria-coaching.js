import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Atria = (props) => (

  <Layout name="project-page">
    <SEO title="Atria Coaching" />
    <section className="title">
      <div className="wrapper">
        <h1>Atria Coaching</h1>
        <p className="subtitle">Atria Coaching is committed to helping people discover their extraordinary so that they gain confidence, become clear on their goals, and empowered to pursue a life of great purpose and meaning.</p>
      </div>
    </section>
    <div id="yoga-by-daisy" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating a brand identity for an Master Coach & NLP Practitioner</h2>
          <p>Atria Coaching helps their clients listen to their inner guidance, have better direction, act from inspiration, and make an impact. As a result, their clients gain control of their lives - who they are, who they spend time with, how they spend it, and where. </p>
          <h3>Role</h3>
          <p>I was the lead designer/researcher on this project. I worked with stakeholders to create Atria Coaching's style guide &amp; brand identity.</p>
          <h3>The Challenge</h3>
          <p>The challenge was to take a new brand (Atria Coaching) and create a well-defined brand strategy as well as marketing materials to grow with the brand over the next few years.</p>
          <h3>The Solution</h3>
          <p>The solution was to deliver a well-strategized brand for real results. Success in this project will be measured by growth in clients and sales.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Research</li>
              <li>Brand Strategy</li>
              <li>Brand Identity</li>
              <li>Logo Design</li>
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
      </section>
      <section className="project-info intro">
        <h2>Brand Identity System</h2>
        <p>Atria's brand is made up of 4 core elements.</p>
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
          <a href="#marketing">
            <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
            <p>04 Marketing</p>
          </a>
        </div>
      </section>
      <section className="project-info" id="logo">
        <h2>01 Logo</h2>
        <div className="project-copy project-steps-full">
          <p>For the primary logo we chose to go for the forever classic and clean font Orpheus Pro in the Oblique weight with custom letter spacing and a few small tweaks to the T and A, we wanted the font to feel like a breath of fresh air. <br></br>The logo is simple, bold and unique. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
        </div>
        <h3>Logo Explorations</h3>
        <div className="project-copy project-steps-full">
          <p>When exploring fonts and concepts we ran through logo options with lower case lettering, different fonts (Toledo, Graced Script, Tenez and Glacial Indifference to name a few) Once we landed on Orpheus Pro in Book Oblique no other option was even a consideration.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="colour">
        <h2>02 Colour</h2>
        <div className="project-copy project-steps-full">
          <p>When defining colours it was important to the brand that colours are inclusive and empowering to the user and that they also have a polished and professional vibe to them, to stay true to brands values.</p>
          <p>I always start by creating a mood board with stakeholders and other designers to stay true to the core values, vision and inspiration of the brand. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
        </div>
        <h3>Colour Defined</h3>
        <div className="project-copy project-steps-full">
          <p>In the final colour palette, we defined 11 colours and shades to give the brand the flexibility it needs to grow over the next few years.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="type">
        <h2>03 Typography</h2>
        <div className="project-copy project-steps-full">
          <p>For font combinations, it was important to the brand to be classic, clean and approachable. We ran through many main fonts including Toledo, Tenez & Graced Script. So much of the inspo sent by Atria included beautiful serifs and I knew that was the direction to go in.</p>
          <p>For this particular pairing, we almost went with Commuter Sans instead of Futura and while we all loved that pairing once we saw Futura in the combination we knew this was the font for the brand. We also defined where each font will be used around online and marketing materials.</p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentytwo.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentythree.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyfour.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="marketing">
        <h2>04 Marketing</h2>
        <div className="project-copy project-steps-full">
          <p>Key to the success of this project was creating marketing materials that Atria can use around social media and in print. The marketing materials had to include tiles for the logo, events, imagery, quotes and overall brand awareness. </p>
        </div>
        <div className="image-tiles">
          <Img fluid={props.data.imageTwentyfive.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentysix.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyseven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyeight.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentynine.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirty.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirtyone.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirtytwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirtythree.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirtyfour.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirtyfive.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirtysix.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <Projectfooter />
  </Layout>
)

export default Atria

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "atria/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "atria/intro-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "atria/persona.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "atria/persona-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "atria/values.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "atria/values-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "atria/statement.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "atria/statement-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "atria/brand-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "atria/brand-colour.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEleven: file(relativePath: { eq: "atria/brand-typography.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwelve: file(relativePath: { eq: "atria/brand-marketing.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirteen: file(relativePath: { eq: "atria/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFourteen: file(relativePath: { eq: "atria/logo-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFifteen: file(relativePath: { eq: "atria/logo-exploration.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSixteen: file(relativePath: { eq: "atria/logo-exploration-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSeventeen: file(relativePath: { eq: "atria/moodboard.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEighteen: file(relativePath: { eq: "atria/moodboard-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageNineteen: file(relativePath: { eq: "atria/colours.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwenty: file(relativePath: { eq: "atria/colours-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyone: file(relativePath: { eq: "atria/typography-one.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentytwo: file(relativePath: { eq: "atria/typography-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentythree: file(relativePath: { eq: "atria/typography-usage.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfour: file(relativePath: { eq: "atria/typography-usage-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfive: file(relativePath: { eq: "atria/tiles/tile-one.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentysix: file(relativePath: { eq: "atria/tiles/tile-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyseven: file(relativePath: { eq: "atria/tiles/tile-three.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyeight: file(relativePath: { eq: "atria/tiles/tile-four.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentynine: file(relativePath: { eq: "atria/tiles/tile-five.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirty: file(relativePath: { eq: "atria/tiles/tile-six.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirtyone: file(relativePath: { eq: "atria/tiles/tile-seven.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirtytwo: file(relativePath: { eq: "atria/tiles/tile-eight.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirtythree: file(relativePath: { eq: "atria/tiles/tile-nine.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirtyfour: file(relativePath: { eq: "atria/tiles/tile-ten.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirtyfive: file(relativePath: { eq: "atria/tiles/tile-eleven.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirtysix: file(relativePath: { eq: "atria/tiles/tile-twelve.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }
`
