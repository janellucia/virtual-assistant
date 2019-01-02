import React from 'react'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
      <section className="landing">
            <h1>Janel Lucia</h1>
            <p className="sub-title">ux designer. developer. a11y enthusiast</p>
      </section>
    </ScrollAnimation>
    <section className="about">
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' >
        <h2>Hello.</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <p>I am a UX Designer and Front-End Developer in Toronto. I tell stories through the products I create, my goal is to make smart digital experiences people enjoy using again and again.<br></br>
        On top of ongoing independent study I’ve completed Hacker You’s full time bootcamp and UX course. Right now I am learning more about design and facilitation techniques for making group discussions more timely and effective.
        <br></br><br></br>
        I’m also passionate about accessibility and inclusivity<br></br>
        — so feel free to AMA!</p>
      </ScrollAnimation>
    </section>
    <section className="portfolio">
      <div className="project-wrap" tabIndex="0">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <div className="project-info">
            <p>UX | design | sketch | invision</p>
            <h3>The Good Ones</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id leo ipsum. Suspendisse ut risus vehicula, vehicula tortor non, dictum nisi. Praesent eu pretium risus, non ullamcorper lacus. Mauris eget nibh vitae quam sollicitudin cursus. Vestibulum mollis egestas libero, cursus ullamcorper nisl sollicitudin quis. Etiam a diam.</p>
            <Link to="/good-ones-academy/" className="button">case study</Link>
          </div>
        </ScrollAnimation>
      </div>
      <div className="project-wrap" tabIndex="0">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <div className="project-info">
            <p>UX | design | sketch | invision</p>
            <h3>Wicked Problem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id leo ipsum. Suspendisse ut risus vehicula, vehicula tortor non, dictum nisi. Praesent eu pretium risus, non ullamcorper lacus. Mauris eget nibh vitae quam sollicitudin cursus. Vestibulum mollis egestas libero, cursus ullamcorper nisl sollicitudin quis. Etiam a diam.</p>
            <Link to="/wicked-problem/" className="button">case study</Link>
          </div>
        </ScrollAnimation>
      </div>
      <div className="project-wrap" tabIndex="0">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' >
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <div className="project-info">
            <p>UX | design | sketch | invision</p>
            <h3>Easy Rider</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id leo ipsum. Suspendisse ut risus vehicula, vehicula tortor non, dictum nisi. Praesent eu pretium risus, non ullamcorper lacus. Mauris eget nibh vitae quam sollicitudin cursus. Vestibulum mollis egestas libero, cursus ullamcorper nisl sollicitudin quis. Etiam a diam.</p>
            <Link to="/easy-rider/" className="button">case study</Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
    <section className="contact">
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <h2>get in touch.</h2>
        <p>Have advice, need advice? Want to collaborate, brainstorm or just want to say hey…<br></br>
          Drop me a line and let’s talk!</p>
        <a href="mailto:thejanellucia@gmail.com">thejanellucia@gmail.com</a>
      </ScrollAnimation>
    </section>
    <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' className="top">
      <a href="#">back to top</a>
    </ScrollAnimation>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "good-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "wicked-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "easy-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
