import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout name="home-page">
    <SEO title="Product Designer" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>I'm a Product Designer (UX/UI) in Toronto crafting meaningful and strategic design with a clear voice and vision. Specializing in brand identity, human centered design &amp; research.</p>
        </div>
      </section>
      <section className="portfolio">
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="sneek peek at The Good Ones Academy" />
            <Link to="/good-ones-academy/" className="home-project-info good-info">
              <h3>The Good Ones</h3>
              <p className="category">— UX/UI, Branding, Research, App Design</p>
            </Link>
        </div>
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="sneek peek at The Next Step Forward" />
            <Link to="/next-step-forward/" className="home-project-info next-step-info">
              <h3>Next Step Forward</h3>
              <p className="category">— UX/UI, Branding, Research, Front End Build</p>
            </Link>
        </div>
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="screenshot od desktop landing page shacasing logo and image of home interiors" />
            <Link to="/type-design/" className="home-project-info type-info">
              <h3>Type Design</h3>
              <p className="category">— Typography</p>
            </Link>
        </div>
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="colourful display of kindred academy logo's" />
            <Link to="/kindred-academy/" className="home-project-info wicked-info">
              <h3>Kindred Academy</h3>
              <p className="category">— UX/UI, Branding, Research, Presentation</p>
            </Link>
        </div>
        <div className="project-wrap" tabIndex="0">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="4 screenshots of easy rider app" />
            <Link to="/easy-rider/" className="home-project-info easy-info">
              <h3>Easy Rider</h3>
              <p className="category">— UX/UI, Branding, Research, App Design</p>
            </Link>
        </div>
      </section>
      <section className="process">
        <div className="step-title">
          {/* <h2>Defining the <i>process</i> is key!</h2> */}
          <p>It's important to be flexible when defining process, I tackle each design challenge unique to the project needs. I use empathy, preparedness, research, collaboration, and feedback as my secret weapons. <br></br>This is how I typically approach UX design challenges:</p>
        </div>
        <div className="step step-1">
          <h3>Define the challenges —</h3>
          <p>Gain an empathetic understanding of the goals, aspirations, and intentions for the product at large by engaging with users and stakeholders to understand their experiences.</p>
        </div>
        <div className="step step-2">
          <h3>Research &amp; Validate —</h3>
          <p>Conduct both quantitative and qualitative research with user interviews, surveys, industry research, and competitive analysis and use that information to build user personas and journeys. This way we can make informed design decisions once the sketching begins.</p>
        </div>
        <div className="step step-3">
          <h3>Sketch competing solutions —</h3>
          <p>Using all the data from earlier steps (including research, personas, sitemap, and user flows) it's time to design multiple solutions to the site architecture, content structure, user flows, and interactions.</p>
        </div>
        <div className="step step-4">
          <h3>Vote &amp; Storyboard —</h3>
          <p>Now that we have multiple sketches to choose from we need to facilitate a structured critique with a discussion and weighted voting to select the best solutions. We then take the winning sketches and ideas and string them together into a storyboard.</p>
        </div>
        <div className="step step-5">
          <h3>Prototype &amp; Test —</h3>
          <p>Now, we take our storyboards and create active prototypes, giving us the opportunity to showcase product features and animations for user testing. The test phase is critical to the process, as it allows us to observe user behaviour in real time, and analyse insights for better functionality and usability.</p>
        </div>
        <div className="step step-6">
          <h3>Evaluate &amp; Iterate —</h3>
          <p>Once the test phase has been completed and insights collected, necessary iterations can be implemented (and re-tested) and the next phase of the design life cycle can begin.</p>
        </div>
      </section>

    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/headshot-inspo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/good-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "home/next-step-home-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "home/type-home-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "home/easy-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "home/kindred-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
