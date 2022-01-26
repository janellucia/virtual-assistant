import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'


const IndexPage = (props) => (
  <Layout name="about-page-wrap">
    <SEO title="About" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'website designer', 'squarespace designer', 'social media design', 'editorial design', 'print design']} />
    <div className="wrapper">
      <section className="about-page">
        <div className="about-panel">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <p>I aim to create design people feel connected to, my values are “Love More” and “Lead with Simplicity” these provide the foundation for all the work I produce.</p>
        </div>

        <div className="about-wrap">
          <h2>Hi, I’m Janel &mdash; <br></br>a Graphic Designer</h2>
          <div className="text">
            <p>I specialize in brand identity, logo design, type-led graphic design and illustration. I work with businesses to design unique experiences that connect to their audience.</p>
            <p>I’ve been designing since 2016 and I've worked for companies like Official Community, designing and building websites for musical legends like Celine Dion, Elton John & George Michael. I had a role in the design department of ITRG where I designed countless reports, webpages and slide decks. Then the team at The Good Ones Academy saw my work and liked it, so they hired me to create an app experience for their online hair academy. That's when I became interested in working for myself. Since then I’ve been working with businesses to design experiences that are beautiful & full of brand personality.</p>
            <p>As a designer, I love colours, layouts, images, and of course, sometimes more than anything, typography. It's what transforms design into a beautiful work of art. It gives the design character. It evokes a feeling. My obsession with typography and layouts became the basis for my visual language and the way I solve problems. Getting the right message and the right tone to your audience is crucial and sometimes it's effortless, sometimes complicated, but good design can express a certain feeling. It connects and creates community.</p>
            <p>My ideal client has a love for what they are doing—and is excited to create something that inspires and connects. For business inquiries, collaborations, press features or to simply say hi, please email <a href="mailto:hello@janellucia.com">hello@janellucia.com</a>.</p>
          </div>
        </div>


      </section>
      <Testimonials />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "about/about-bw.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "about/about-bw.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
