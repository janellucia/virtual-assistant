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
          <p>I aim to create design people feel connected to, my values are “Love More” and “Lead with Simplicity” these provide the foundation for all the work I produce.</p>
        </div>

        <div className="about-wrap">
          <h2>Hi, I’m Janel &mdash; <br></br>a UX/UI Designer</h2>
          <div className="text">
            <p>I specialize in logo design, brand identity, type-led graphic design and web design. I work with businesses to design unique experiences that connect to their audience with my Lean & Collaborative Design System (LCDS).</p>
            <p>Your content should be original and fulfil a need and LCDS focuses on your business goals and objectives while having a deep understanding of your audience, what they need, what they value, their abilities, and their limitations. My intentions are to improve the quality of the user’s interactions and perceptions of your business through design.</p>
            <p>At the core of LCDS is ensuring that users find value in what you’re providing them. In order for there to be a meaningful and valuable user experience, information must be useful, usable, desirable, findable, accessible, credible & valuable. Each facet of LCDS can transform how we see what we do and enabling us to explore beyond conventional boundaries.</p>
            <p>LCDS hits the sweet spot by serving several purposes at once. It’s a great tool for advancing the conversation beyond usability and for helping you and your team understand the need to define priorities. Is it more important for your design to be desirable or accessible? How about usable or credible? The truth is, it depends on your unique balance of values, goals and user needs, and the required tradeoffs are better made explicitly than unconsciously. For me, design is a big hive: a dynamic, multi-dimensional space where there’s still plenty of room to build new boxes and draw new arrows.</p>
            <p>I love connecting with people who are passionate about what they do, my ideal client has a love for what they are doing—and is excited to create something that inspires and connects. For business inquiries, collaborations, press features or to simply say hi, please email <a href="mailto:hello@janellucia.com">hello@janellucia.com</a></p>
            <p>Based in Toronto, Canada</p>
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
