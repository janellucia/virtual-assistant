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
            <p>I specialize in brand identity, logo design, type-led graphic design and web design. I work with businesses to design unique experiences that connect to their audience with my Conscious Design System <a href="/services">(CDS)</a>.</p>
            <p>I’ve been designing since 2016 and I've worked for companies like Official Community, designing and building websites for musical legends like Celine Dion, Elton John & George Michael. I had a role in the design department of ITRG where I designed countless reports, webpages and slide decks. Then the team at The Good Ones Academy saw my work and liked it, so they hired me to create an app experience for their online hair academy. That's when I became interested in working for myself. Since then I’ve been working with businesses to design experiences that are beautiful & full of brand personality.</p>
            <p>As a designer, I love colours, layouts, images, and of course, sometimes more than anything, typography. It's what transforms design into a beautiful work of art. It gives the design character. It evokes a feeling. My obsession with typography and layouts became the basis for my visual language and the way I solve problems. Getting the right message and the right tone to your audience is crucial and sometimes it's effortless, sometimes complicated, but good design can express a certain feeling. It connects and creates community.</p>
            {/* <p>That's why I think personality is important to any project, it might be that it's representing the architecture of a building, a restaurant or the whole spirit of a large, not-for-profit organisation or a bank – they're all different things that become expressed, but they're related by something that exists externally from the design.</p> */}
            <p>My ideal client has a love for what they are doing—and is excited to create something that inspires and connects. For business inquiries, collaborations, press features or to simply say hi, please email <a href="mailto:hello@janellucia.com">hello@janellucia.com</a>.</p>
          </div>
        </div>

        <div className="resume">
          <div className="each-section experience">
            <h3>Around the web —</h3>
            <div>
              <p><a href="https://www.conceivedspace.com/digital-nature" target="new"><strong>Digital Nature</strong></a></p>
              <p>Conceived Space</p>
            </div>
            <div>
              <p><a href="https://ilovecreatives.com/creative-profiles/janel-lucia?rq=janel" target="new"><strong>Designers to watch</strong></a></p>
              <p>I love Creatives</p>
            </div>
          </div>

          <div className="each-section professional">
            <h3>Professional Skills —</h3>
            <div>
              <p><strong>UX Methodologies</strong></p>
              <p>Design Thinking, Design Sprint, Emotional Design, Content Strategy, Information Architecture, Prototyping</p>
            </div>
            <div>
              <p><strong>Creative Tools</strong></p>
              <p>Abode Creative Suite, Sketch, InVision, Figma, Canva, Blender</p>
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
