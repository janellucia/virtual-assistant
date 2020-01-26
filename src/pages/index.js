import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout name="home-page">
    <SEO title="UX/UI Designer" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>Hi, I'm a UX/UI Designer in Toronto crafting meaningful and strategic design with a clear voice and vision. I specialize in human-centred design, brand identity &amp; graphic design.</p>
        </div>
      </section>
      <section className="portfolio">
        <Link to="/good-ones-academy/" className="project-wrap">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="sneek peek at The Good Ones Academy" />
          <div className="home-project-info good-info">
            <h3>The Good Ones</h3>
            <p className="category">— UX/UI, Branding, Research, App Design</p>
          </div>
        </Link>
        <Link to="/daniela-bosco/" className="project-wrap">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="sneek peek at Daniela Bosco" />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="sneek peek at Daniela Bosco" />
          <div className="home-project-info daniela-info">
            <h3>Daniela Bosco</h3>
            <p className="category">— Web Design, Squarespace Build</p>
          </div>
        </Link>
        <Link to="/yoga-by-daisy/" className="project-wrap">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="sneek peek of this project" />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="sneek peek of this project" />
          <div className="home-project-info daisy-info">
            <h3>Pace yourself yoga by Daisy</h3>
            <p className="category">— Branding, Graphic Design</p>
          </div>
        </Link>
        <Link to="/livie-jewelry/" className="project-wrap">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="sneek peek at The Good Ones Academy" />
          <div className="home-project-info livie-info">
            <h3>Livie Jewelry</h3>
            <p className="category">— Branding, Web Design</p>
          </div>
        </Link>
        <Link to="/girls-twenty/" className="project-wrap">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} alt="sneek peek at Girls 20 project" />
          <div className="home-project-info next-step-info">
            <h3>Girls 20</h3>
            <p className="category">— Branding, Web Design, Squarespace Build</p>
          </div>
        </Link>
        <Link to="/ivawithaneye/" className="project-wrap">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} alt="sneek peek at The Next Step Forward" />
          <Img fluid={props.data.imageNine.childImageSharp.fluid} alt="sneek peek at The Next Step Forward" />
          <div className="home-project-info iva-info">
            <h3>Iva with an eye</h3>
            <p className="category">— Branding, Graphic Design</p>
          </div>
        </Link>
        <Link to="/lettering-archive/" className="project-wrap">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} alt="sneek peek of kindred academy" />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} alt="sneek peek of kindred academy" />
          <div className="home-project-info type-info">
            <h3>Lettering Archive</h3>
            <p className="category">— Lettering, Instagram</p>
          </div>
        </Link>
        <Link to="/easy-rider/" className="project-wrap">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} alt="sneek peek of easy rider app" />
          <div className="home-project-info easy-info">
            <h3>Easy Rider</h3>
            <p className="category">— UX/UI, Branding, Research, App Design</p>
          </div>
        </Link>
      </section>
      <section className="process">
        <div className="step-title">
          <p>My work is rooted in research, collaboration and feedback. I stay curious, use inclusivity as my super power, and obsess over small details. Here's an example of my typical work flow:</p>
        </div>
        <div className="step step-1">
          <h3>Discovery&mdash;</h3>
          <p>First phase for me is defining the project, I want to get a deep understanding of the goals, values, and intentions of the stakeholders. We want a clear definition of what we know, what we don't know, and what we need to know.</p>
        </div>
        <div className="step step-2">
          <h3>Research&mdash;</h3>
          <p>Second step is research &mdash; user interviews, surveys, industry research, and competitive analysis. We want to learn about who the users are, what their pains are, how the industry functions, and what makes this product unique.</p>
        </div>
        <div className="step step-3">
          <h3>Sketch &amp; Storyboard&mdash;</h3>
          <p>During the third phase we sketch out competing solutions, facilitate a group critique session and vote for the best solution. We expand on the winning idea with fairly detailed wireframes while deciding on key factors together.</p>
        </div>
        <div className="step step-5">
          <h3>Prototype&mdash;</h3>
          <p>When we create the prototype, we want to showcase main product features for testing, start with the team, iron out any kinks then take it to the users, observe their behaviour, notice their ease (or lack thereof) when navigating the product.</p>
        </div>
        <div className="step step-6">
          <h3>Evaluate &amp; Iterate&mdash;</h3>
          <p>Once the test phase is complete and insights collected, necessary iterations can be implemented (and re-tested) and the next phase of the design life cycle begins.</p>
        </div>
      </section>

    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/good-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/daniela-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "home/daniela-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "home/daisy-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "home/daisy-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "home/livie-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "home/girls-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "home/iva-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "home/iva-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "home/type-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "home/type-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "home/easy-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
