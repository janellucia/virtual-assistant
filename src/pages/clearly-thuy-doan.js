import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projectfooter from '../components/project-footer'



const ThuyDoan = (props) => (

  <Layout name="project-page">
    <SEO title="clearly, Thuy Doan" />
    <section className="title">
      <div className="wrapper">
        <h1>clearly, THUYDOAN</h1>
        <p className="subtitle">A Brand and Sub-Brand for an expanding Web-Developer / Content Creator </p>
      </div>
    </section>

    <div id="ash" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Designing a brand and sub-brand for a growing content-creator</h2>
          <p>Thuy is a front-end developer, currently working in education technology at Prodigy Education. She is passionate about accessibility and learning how to spread awareness for all the under-represented groups as an industry leader and also a podcast content creator.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Sub-Brand</li>
              <li>Social Media</li>
              <li>Web Design</li>
              <li>Presentation</li>
              <li>Resume</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info">
        <div className="three-image-tiles">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="two-images-one hide-on-mobile">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>
        <div className="two-images hide-on-desktop">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
        </div>
        <div className="three-image-tiles">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
        </div>
        <div className="two-images-one hide-on-mobile">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
        </div>
        <div className="two-images hide-on-desktop">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
        </div>
      </section>


    </div>
    <Projectfooter />
  </Layout>
)

export default ThuyDoan

export const pageQuery = graphql`
  query {
  imageOne: file(relativePath: {eq: "ctd/ctd-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwo: file(relativePath: {eq: "ctd/ctd-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThree: file(relativePath: {eq: "ctd/ctd-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFour: file(relativePath: {eq: "ctd/ctd-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFive: file(relativePath: {eq: "ctd/ctd-5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSix: file(relativePath: {eq: "ctd/ctd-6.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageSeven: file(relativePath: {eq: "ctd/ctd-7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEight: file(relativePath: {eq: "ctd/ctd-8.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageNine: file(relativePath: {eq: "ctd/ctd-9.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTen: file(relativePath: {eq: "ctd/ctd-10.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageEleven: file(relativePath: {eq: "ctd/ctd-11.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageTwelve: file(relativePath: {eq: "ctd/ctd-4-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageThirteen: file(relativePath: {eq: "ctd/ctd-5-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFourteen: file(relativePath: {eq: "ctd/ctd-9-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  imageFifteen: file(relativePath: {eq: "ctd/ctd-11-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
      }
    }
  }


}
`
