import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'


const IndexPage = (props) => (
  <Layout name="about-page-wrap">
    <SEO title="About" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="about-page">
        <div className="about-panel">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <p>I help businesses design products and experiences that are beautifully simple, reassuringly smart and full of brand personality with my lean and collaborative design process.</p>
        </div>

        <div className="about-wrap">
          <h2>Hi, I’m Janel &mdash; <br></br>a UX/UI Designer</h2>
          <div className="text">
            <p>I specialize in human-centred design, branding, website design, and type-led graphic design. I aim to create design people feel connected to and I follow emotional design principles to put users at ease and understand their needs. My values are “Love More” and “Lead with Simplicity” these provide the foundation for all the work I produce.</p>
            <p>I’ve been designing since 2016, I started by creating logos and websites for people in my network and when I was ready to go full time, I completed Juno’s (formerly Hacker You) full-time front-end boot camp &amp; UX course. Along the way, I’ve had amazing opportunities to work with some great designers where I learned so much about simplicity, elegance, and how to effectively tell a story through design.</p>
            <p>I love connecting with people who are passionate about what they do—I find hearing their stories to be enlightening. I’m always looking to collaborate, my most positive past relationships have been born out of honest collaboration. My ideal client has a love for what they are doing—and is excited to create a something that inspires and connects.</p>
            <p>When I'm not designing, I like to spend time with people I love, go to art galleries, restaurants, binge my fave series, and take my dog Marvin out for walks.</p> <p>Send me an email if you're interested in working together. If you're in Toronto, let's grab a social distanced coffee <a href="mailto:hello@janellucia.com">hello@janellucia.com</a></p>
          </div>
        </div>

        <div className="resume">
          <div className="each-section experience">
            <h3>Experience —</h3>
            <div>
              <p><strong>UX Designer &amp; Developer @ Janel Lucia</strong></p>
              <p>Feb 2016 - Present</p>
            </div>
            <div>
              <p><strong>Product Designer @ the good ones academy</strong></p>
              <p>Jan 2019 - June 2019</p>
            </div>
            <div>
              <p><strong>UX Designer &amp; Developer @ ITRG</strong></p>
              <p>April 2018 - April 2019</p>
            </div>
            <div>
              <p><strong>Designer &amp; Developer @ Official Community</strong></p>
              <p>Jan 2017 - April 2018</p>
            </div>
          </div>

          <div className="each-section professional">
            <h3>Professional Skills —</h3>
            <div>
              <p><strong>UX Methodologies</strong></p>
              <p>Design Thinking, Design Sprint, 5 Planes of UX, Lean UX. Emotional Design, User Research, Content Strategy, Information Architecture, Prototyping, Usability Testing, A/B Testing</p>
            </div>
            <div>
              <p><strong>Creative Tools</strong></p>
              <p>Sketch, InVision, Studio, Figma, Abode Creative Suite</p>
            </div>
            <div>
              <p><strong>Development</strong></p>
              <p>Accessibility Best Practices, HTML, SCSS, JS, ES6, React, Vue</p>
            </div>
          </div>

          <div className="each-section education">
            <h3>Education —</h3>
            <div>
              <p><strong>Product Design</strong></p>
              <p>Bridge School – 2020</p>
            </div>
            <div>
              <p><strong>Intro &amp; Advanced UX Design</strong></p>
              <p>Juno – 2018</p>
            </div>
            <div>
              <p><strong>Front End Development Bootcamp</strong></p>
              <p>Juno – 2016</p>
            </div>
            <div>
              <p><strong>BA Business Administration</strong></p>
              <p>Durham College – 2009</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "about/about.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "about/about-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
