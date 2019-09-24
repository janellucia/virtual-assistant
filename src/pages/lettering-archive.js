import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'



const Type = (props) => (

  <Layout name="project-page">
    <SEO title="Lettering Archive" />
    <section className="title">
      <div className="wrapper">
        <h1>Lettering Archive</h1>
        <p className="subtitle">A recent personal project I've been passionate about lately is the Lettering Archive instagram account. This all started with conversations with friends who think social media can be extremely negative at times and while I agree that can be true I think it doesn't have to be.</p> <p className="subtitle">We curate our social media following like we curate our lives, we can choose to pay attention to and debate those who have different outlooks or we can curate our surroundings to be full of people that uplift us and encourage us to think in a more empathetic way. Here is an example of some of the content I post and below is a link to my instagram account if you want to fill your feed with uplifting quotes.</p>
        <div className="button-wrap">
          <a href="https://www.instagram.com/letteringarchive/" className="button" target="_blank" rel="noopener noreferrer">View Instagram</a>
        </div>
      </div>
    </section>
    <div id="lettering-archive" className="wrapper">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        {/* <Img fluid={props.data.imageSeven.childImageSharp.fluid} /> */}
        <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        <Img fluid={props.data.imageNine.childImageSharp.fluid} />
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
  }
`
