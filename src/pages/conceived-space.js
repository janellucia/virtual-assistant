import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import GIF from '../images/conceived/conceived-site.gif'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const Conceived = (props) => (

  <Layout name="project-page">
    <SEO title="Conceived Space" />
    <section className="title">
      <div className="wrapper">
        <h1>Conceived Space</h1>
        <p className="subtitle">A squarespace site for a non-issued digital publication</p>
        <div className="button-wrap">
          <a href="https://www.conceivedspace.com/" className="button" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating a brand identity and website for Conceived Space</h2>
          <p>Conceived Space is a publication pushing the boundaries of art, culture, design + identity.</p>
          <h3>Role</h3>
          <p>In-house Digital Director — I worked with stakeholders to create the vibe and visual language of each edit.</p>
          <h3>The Challenge</h3>
          <p>With a very clean and minimal feel I am tasked with creating a visual story for each edit that is unique from the last.</p>
          <h3>The Solution</h3>
          <p>Deliver a authentic brand for real connection. Success in this project will be measured by growth in readers and audience.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Brand Values</li>
              <li>Logo Design</li>
              <li>Squarespace site</li>
              <li>Social Meida</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-info">
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>

      </section>

      <section className="project-info intro">
        <h2>Brand Identity System</h2>
        <p>Conceived Space brand is made up of 4 core elements.</p>
        <div className="brand-elements">
          <a href="#logo">
            <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            <p>01 Visual Identity</p>
          </a>
          <a href="#site">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            <p>02 Website</p>
          </a>
          <a href="#social">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            <p>03 Social Media</p>
          </a>
          <a href="#print">
            <Img fluid={props.data.imageSix.childImageSharp.fluid} />
            <p>04 Print</p>
          </a>
        </div>
      </section>
      <section className="project-info" id="logo">
        <h2>01 Visual Identity</h2>
        <div className="project-copy project-steps-full">
          {/* <p>The logo is simple, bold and unique. Using the forever classic font Gotham with custom letter spacing and weights. </p> */}
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
      <section className="project-info" id="site">
        <h2>02 Website</h2>
        <div className="project-copy project-steps-full">
          {/* <p>When defining colours it was important to the brand that colours are inclusive and empowering to the user and that they also have a polished and professional vibe to them, to stay true to brands values.</p> */}
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
        </div>
        <img src={GIF} alt="" />
      </section>
      <section className="project-info" id="social">
        <h2>03 Social Media</h2>
        <div className="project-copy project-steps-full">
          {/* <p>For font combinations, it was important to the brand to be classic, clean and approachable. We ran through many main fonts including Toledo, Tenez & Graced Script. So much of the inspo sent by Atria included beautiful serifs and I knew that was the direction to go in.</p> */}
          {/* <p>For this particular pairing, we almost went with Commuter Sans instead of Futura and while we all loved that pairing once we saw Futura in the combination we knew this was the font for the brand. We also defined where each font will be used around online and marketing materials.</p> */}
        </div>
        <div className="image-tiles three-image-tiles">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="print">
        <h2>04 Print</h2>
        <div className="project-copy project-steps-full">
          {/* <p>Key to the success of this project was creating marketing materials that Atria can use around social media and in print. The marketing materials had to include tiles for the logo, events, imagery, quotes and overall brand awareness. </p> */}
        </div>
        <div class="full-width-images">
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <Projectfooter />
  </Layout>
)

export default Conceived

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "conceived/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "conceived/intro-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "conceived/logo-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "conceived/site-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "conceived/social-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "conceived/print-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "conceived/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "conceived/icons.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "conceived/site.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "conceived/social/girls-18.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEleven: file(relativePath: { eq: "conceived/social/girls-17.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwelve: file(relativePath: { eq: "conceived/social/girls-15.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirteen: file(relativePath: { eq: "conceived/social/girls-14.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFourteen: file(relativePath: { eq: "conceived/social/girls-13.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFifteen: file(relativePath: { eq: "conceived/social/girls-12.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSixteen: file(relativePath: { eq: "conceived/social/girls-11.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSeventeen: file(relativePath: { eq: "conceived/social/girls-9.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEighteen: file(relativePath: { eq: "conceived/social/girls-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageNineteen: file(relativePath: { eq: "conceived/print-cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwenty: file(relativePath: { eq: "conceived/social/girls-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyone: file(relativePath: { eq: "conceived/social/white-square.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }
`
