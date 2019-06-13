import React from 'react'
import { graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="About" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
        <section className="about-page">
        <div className="image-wrap">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="image of yayoi kusama infinity room" />
        </div>
        <div className="about-wrap">
            <h2>Hello, I’m Janel – a Product (UX/UI)<br></br> Designer in Toronto.</h2>
            <div className="text">
                <p>I love what I do because I get to learn about people and their behaviours everyday, I get to apply that knowledge to create beautiful and well-informed products people enjoy using and I feel extremely lucky for the privilege. I follow emotional design principles to put users at ease and understand their needs! My core values are “Love More” and “Lead with Simplicity”. These values provide a motivational foundation for all the work that I produce.</p>
                <p>I have been practicing as a UX designer for the past three years, but before that I was working in the hair and beauty industry as a business manager to various studios across the city. During my time there a huge part of my role was to curate an online and social media presence for the studios I worked with. I grew a huge passion for understanding the customer needs and creating well informed marketing campaigns. I loved my time there but when I was ready to switch careers it was clear that my next move would be in tech.</p>
                <p>Originally self-taught I was eager to gain the neccessary skills to get started in tech. I started by completing Hacker You’s full time front-end bootcamp before moving on to their UX course. I also read books, articles and listen to podcasts but my most reliable tool for growth has always been working with other dope designers – I learn so much by working with others and seeing how they approach design challenges.</p> 
                <p>Right now I'm learning new research &amp; facilitation techniques as a Side x Side mentee and all these experiences have only propelled my love for UX, I can't wait to continue to learn and grow from my projects and peers.</p>
                <p>I’m an all around chill girl powered by the soft tones of Solange and Blood Orange. I love surrounding myself with friends and family, going to art galleries, and taking my dog Marvin Gaye for walks at Trinity Bellwoods. On the weekends I struggle to keep my plants alive and frequent local coffee shops.</p>
                <p>Feel free to contact me if you have an idea you want to explore, brainstorm or collaborate on. I love hearing from new people and exploring new ideas.</p>
            </div>
        </div>
        <div className="resume">
            <div className="each-section experience">
                <h3>Experience</h3>
                <div>
                    <p><strong>Product Designer @ the good ones academy</strong></p>
                    <p>Jan 2019 - Present</p>
                </div>
                <div>
                    <p><strong>UX Designer &amp; Developer @ Janel Lucia</strong></p>
                    <p>Feb 2016 - Present</p>
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
                <h3>Professional Skills</h3>
                <div>
                    <p><strong>Experience Design</strong></p>
                    <p>Methodologies: Design Thinking, 5 Planes of UX, Lean UX. Emotional Design, User Research, Content Strategy, Information Architecture, Prototyping</p>
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
                <h3>Education</h3>
                <div>
                    <p><strong>Intro &amp; Advanced UX Design</strong></p>
                    <p>Hacker You – 2018</p>
                </div>
                <div>
                    <p><strong>Front End Development Bootcamp</strong></p>
                    <p>Hacker You – 2016</p>
                </div>
                <div>
                    <p><strong>BA Business Administration</strong></p>
                    <p>Durham College – 2009</p>
                </div>
            </div>


        </div>
      </section>

        <section className="contact">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <h2>get in touch.</h2>
          {/* <p>Have a cool idea you want to explore? Want to collaborate, brainstorm or just want to say hey…<br></br>
            Drop me a line and let’s talk!</p> */}
            <p>Feel free to reach out for collaborations or just a friendly hello <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="smiley face" /></p>
          <a href="mailto:thejanellucia@gmail.com">thejanellucia@gmail.com</a>
        </ScrollAnimation>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "happy.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "home/hex-shape.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageNine: file(relativePath: { eq: "home/dode-shape.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTen: file(relativePath: { eq: "home/octo-shape.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }
`
