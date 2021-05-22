import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Qube = (props) => (

  <Layout name="project-page">
    <SEO title="Qube Properties" />
    <section className="title">
      <div className="wrapper">
        <h1>Qube Properties</h1>
        <p className="subtitle">Qube Properties is the leading marketing and listing services firm, offering clients a fully custom and tailored approach to the leasing and management of commercial real estate.</p>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating a brand identity for a Commercial Real Estate Firm</h2>
          <p>Qube Properties goal is to build long term personal relationships with their clients that promotes trust and integrity. They use their expertise to motivate, guide, and champion their clients through real estate.</p>
          <h3>Role</h3>
          <p>Lead designer/researcher — I worked with stakeholders to create Qube Properties style guide &amp; brand identity.</p>
          <h3>The Challenge</h3>
          <p>Take an existing brand (Darwin Properties) and create a new well-defined brand strategy for a new name, look and feel for Qube Properties to grow with the brand over the next few years.</p>
          <h3>The Solution</h3>
          <p>Deliver a well-strategized brand for real results. Success in this project will be measured by growth in clients and sales.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Brand Values</li>
              <li>Logo Design</li>
              <li>Print Design</li>
              <li>Signage</li>
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
        <p>Qube Properties brand is made up of 4 core elements.</p>
        <div className="brand-elements">
          <a href="#logo">
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            <p>01 Logo</p>
          </a>
          <a href="#colour-and-type">
            <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            <p>02 Colour & Type</p>
          </a>
          <a href="#print">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            <p>03 Print</p>
          </a>
          <a href="#signage">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            <p>04 Signage</p>
          </a>
        </div>
      </section>
      <section className="project-info" id="logo">
        <h2>01 Logo</h2>
        <div className="project-copy project-steps-full">
          <p>The logo is simple, bold and unique. Using the forever classic font Gotham with custom letter spacing and weights. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="colour-and-type">
        <h2>02 Colour & Typography</h2>
        <div className="project-copy project-steps-full">
          {/* <p>When defining colours it was important to the brand that colours are inclusive and empowering to the user and that they also have a polished and professional vibe to them, to stay true to brands values.</p> */}
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="print">
        <h2>03 Print</h2>
        <div className="project-copy project-steps-full">
          {/* <p>For font combinations, it was important to the brand to be classic, clean and approachable. We ran through many main fonts including Toledo, Tenez & Graced Script. So much of the inspo sent by Atria included beautiful serifs and I knew that was the direction to go in.</p> */}
          {/* <p>For this particular pairing, we almost went with Commuter Sans instead of Futura and while we all loved that pairing once we saw Futura in the combination we knew this was the font for the brand. We also defined where each font will be used around online and marketing materials.</p> */}
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="signage">
        <h2>04 Signage</h2>
        <div className="project-copy project-steps-full">
          {/* <p>Key to the success of this project was creating marketing materials that Atria can use around social media and in print. The marketing materials had to include tiles for the logo, events, imagery, quotes and overall brand awareness. </p> */}
        </div>
        <div class="two-images">
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <Projectfooter />
  </Layout>
)

export default Qube

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "qube/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "qube/qube-logo-bw.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "qube/colours-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "qube/print.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "qube/signage.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "qube/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "qube/logo-exploration-one.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "qube/logo-exploration-two.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "qube/colours.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "qube/type-three.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "qube/type-three-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "qube/type-one.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "qube/type-two.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "qube/print-one.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "qube/print-two.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "qube/portrait.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "qube/landscape.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
