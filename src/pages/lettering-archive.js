import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'



const Type = (props) => (

  <Layout name="project-page lettering-archive-page">
    <SEO title="Lettering Archive" />
    <section className="title">
      <div className="wrapper">
        <h1>Lettering Archive</h1>
        <p className="subtitle">I created Lettering Archive as a way to explore type, research interesting authors & poets, and express myself creatively without boundaries. <br></br>Below is an example of some of the content I post.</p>
        <div className="button-wrap">
          <a href="https://www.instagram.com/letteringarchive/" className="button" target="_blank" rel="noopener noreferrer">View Insta</a>
        </div>
      </div>
    </section>
    <div id="lettering-archive" className="wrapper lettering-image-wrap">
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      <Img fluid={props.data.imageSix.childImageSharp.fluid} />
      <Img fluid={props.data.imageNine.childImageSharp.fluid} />
      <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
      <Img fluid={props.data.imageEight.childImageSharp.fluid} />
      <Img fluid={props.data.imageTen.childImageSharp.fluid} />
      <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
      <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
      <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
      <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
      <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
      <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
      <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
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
        <a className="menu-item" href="/livie-jewelry">Livie Jewelry</a>
        <a className="menu-item" href="/ivawithaneye">Iva with an eye</a>
        <a className="menu-item" href="/lettering-archive">Lettering Archive</a>
        <a className="menu-item" href="/girls-twenty">Girls 20</a>
      </div>
    </section>
  </Layout>
)

export default Type

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "lettering/lettering-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "lettering/lettering-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "lettering/lettering-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "lettering/lettering-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "lettering/lettering-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "lettering/lettering-6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "lettering/lettering-7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "lettering/lettering-8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "lettering/lettering-9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "lettering/lettering-10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "lettering/lettering-11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "lettering/lettering-12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "lettering/lettering-13.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "lettering/lettering-14.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "lettering/lettering-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "lettering/lettering-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "lettering/lettering-17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEighteen: file(relativePath: { eq: "lettering/lettering-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
