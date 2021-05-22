import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import GIF from '../images/essential/website.gif'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const EssentialCourses = (props) => (

  <Layout name="project-page">
    <SEO title="Essential Courses" />
    <section className="title">
      <div className="wrapper">
        <h1>Essential Courses</h1>
        <p className="subtitle">Helping people turn their world class expertise into a profitable and effective online course.</p>
        <div className="button-wrap">
          <a href="https://essentialcourses.co/" className="button" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>BRAND IDENTITY & WORDPRESS SITE FOR KARYN SMILEY AND SPIRIT LUXE</h2>
          <p>SpiritLuxe helps women discover and explore their highest being while standing in truth and authenticity. A Wellness, Fashion, and Spirituality coaching & lifestyle brand.</p>
          <h3>Role</h3>
          <p>I was the lead designer and developer on this project. I worked with Stakeholders to create an brand experience online and social media.</p>
          <h3>The Challenge</h3>
          <p>This site required many specific customizations, custom pages, sections, blog types, custom service types. The goal was to build a site that functions smoothly and empowers the client to add and edit information independently in the future.</p>
          <h3>The Solution</h3>
          <p>Design an brand and online strategy from the ground up, capturing the brand's excitement and value in the coaching and holistic wellness space.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Brand Values</li>
              <li>Logo Design</li>
              <li>Shopify site</li>
              <li>Presentation Deck</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-info">
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>

      </section>

      <section className="project-info intro">
        <h2>Brand Identity System</h2>
        <p>the Essential Courses brand is made up of 4 core elements.</p>
        <div className="brand-elements">
          <a href="#logo">
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            <p>01 Logo</p>
          </a>
          <a href="#site">
            <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            <p>02 Colour & Typography</p>
          </a>
          <a href="#site">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            <p>03 Website</p>
          </a>
          <a href="#social">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            <p>04 Presentation Deck</p>
          </a>
        </div>
      </section>
      <section className="project-info" id="logo">
        <h2>01 Logo</h2>
        <div className="project-copy project-steps-full">
          {/* <p>The logo is simple, bold and unique. Using the forever classic font Gotham with custom letter spacing and weights. </p> */}
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="colour-and-type">
        <h2>02 Colour & Typography</h2>
        <div className="project-copy project-steps-full">
          {/* <p>When defining colours it was important to the brand that colours are inclusive and empowering to the user and that they also have a polished and professional vibe to them, to stay true to brands values.</p> */}
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="site">
        <h2>03 Website</h2>
        <div className="project-copy project-steps-full">
          {/* <p>For font combinations, it was important to the brand to be classic, clean and approachable. We ran through many main fonts including Toledo, Tenez & Graced Script. So much of the inspo sent by Atria included beautiful serifs and I knew that was the direction to go in.</p> */}
          {/* <p>For this particular pairing, we almost went with Commuter Sans instead of Futura and while we all loved that pairing once we saw Futura in the combination we knew this was the font for the brand. We also defined where each font will be used around online and marketing materials.</p> */}
        </div>
        <div class="full-width-images">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
        </div>
        <img src={GIF} alt="" />
      </section>
      <section className="project-info" id="presentation">
        <h2>04 presentation deck</h2>
        <div className="project-copy project-steps-full">
          {/* <p>Key to the success of this project was creating marketing materials that Atria can use around social media and in print. The marketing materials had to include tiles for the logo, events, imagery, quotes and overall brand awareness. </p> */}
        </div>
        <div class="two-images">
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
        </div>
        <div class="two-images">
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <Projectfooter />
  </Layout>
)

export default EssentialCourses

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "essential/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "essential/logo-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "essential/colour-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "essential/site-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "essential/presentation-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "essential/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "essential/icons.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "essential/colours.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "essential/type.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "essential/type-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEleven: file(relativePath: { eq: "essential/type-three.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwelve: file(relativePath: { eq: "essential/site.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirteen: file(relativePath: { eq: "essential/slide-one.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFourteen: file(relativePath: { eq: "essential/slide-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFifteen: file(relativePath: { eq: "essential/slide-three.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSixteen: file(relativePath: { eq: "essential/slide-four.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }
`
