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
        <div className="image-wrap">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="janel lucia headshot" />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
        </div>
        <div className="panel">
          <div className="category">
            <h3>Podcasts &mdash;</h3>
            <ul>
              <li><a href="https://podcasts.apple.com/ca/podcast/framework/id1373741352">Framework</a> <p>Rob Hayes &amp; Tom Creighton</p></li>
              <li><a href="https://podcasts.apple.com/ca/podcast/dollars-to-donuts/id956673263">Dollars to Donuts</a> <p>Steve Portigal</p></li>
              <li><a href="https://podcasts.apple.com/ca/podcast/design-details/id947191070">Design Details</a> <p>Spec</p></li>
              <li><a href="https://podcasts.apple.com/ca/podcast/hidden-brain/id1028908750">Hidden Brain</a> <p>NPR</p></li>
            </ul>
          </div>
          <div className="category">
            <h3>Books &mdash;</h3>
            <ul>
              <li><a href="https://www.amazon.ca/UX-Strategy-Innovative-Digital-Products/dp/1449372864/ref=sr_1_1?gclid=Cj0KCQjwi43oBRDBARIsAExSRQEAiXUVTbdLqhLrKwMow5Q2qWZ0jeasLpCFzkEQHIYBRZQu9pgrzSUaAjezEALw_wcB&hvadid=229988316235&hvdev=c&hvlocphy=9061009&hvnetw=g&hvpos=1t1&hvqmt=b&hvrand=13822767144517731540&hvtargid=kwd-297141217425&hydadcr=16925_10237806&keywords=ux+strategy&qid=1560550223&s=gateway&sr=8-1">UX Strategy</a> <p>Jaime Levy</p></li>
              <li><a href="https://www.amazon.ca/Discussing-Design-Improving-Communication-Collaboration/dp/149190240X/ref=sr_1_1?keywords=discussing+design&qid=1560550281&s=gateway&sr=8-1">Discussing Design</a> <p>Adam Conor &amp; Aaron Irizarry</p></li>
              <li><a href="https://www.amazon.ca/Sprint-Solve-Problems-Test-Ideas/dp/150112174X/ref=sr_1_1?crid=2X9OJ9K18S2VA&keywords=sprint&qid=1560550391&s=gateway&sprefix=sprint%2Caps%2C155&sr=8-1">Sprint</a> <p>Jake Knapp</p></li>
              <li><a href="https://www.amazon.ca/Ruined-Design-Designers-Destroyed-World/dp/1090532083/ref=sr_1_1?keywords=ruined+by+design&qid=1560550343&s=gateway&sr=8-1">Ruined by Design</a> <p>Mike Monteiro</p></li>
            </ul>
          </div>
          <div className="category">
            <h3>Articles &mdash;</h3>
            <ul>
              <li><a href="https://www.ideou.com/pages/design-thinking-resources">Design Thinking resources</a> <p>IDEO</p></li>
              <li><a href="https://rangle.io/blog/facilitating-design-getting-to-the-why-on-your-projects/">Facilitating Design: Getting to the 'Why' on Your Projects</a> <p>Naomi Bower</p></li>
              <li><a href="https://uxplanet.org/how-lego-run-design-sprints-at-scale-47bf56b785f7">How LEGO runs design sprints</a> <p>Jonathan Courtney</p></li>
              <li><a href="https://uxplanet.org/6-principles-for-inclusive-design-3e9867f7f63e">Principles for Inclusive Design</a> <p>Lillian Xiao</p></li>
            </ul>
          </div>
        </div>
        <div className="about-wrap">
          <h2>Hi, I’m Janel &mdash; a UX/UI Designer</h2>
          <div className="text">
            <p>I am to create design and well-informed products people feel connected to. I specialize in human centered design, branding, website design, editorial design (books &amp; magazines), and type-led graphic design. I follow emotional design principles to put users at ease and understand their needs. My core values are “Love More” and “Lead with Simplicity”, these values provide a motivational foundation for all the work I produce.</p>
            <p>I’ve been designing since 2016, I started creating logos and websites for people in my network and after designing for a year, I became interested in coding, I completed Hacker You’s full time front-end bootcamp and then their UX course. Then, I got some great opportunities to work under some amazing designers where I learned so much about simplicity, elegance, and telling a story through design. Now, my clients and I work as a team to deliver compelling brands &amp; products through collaboration and storytelling. </p>
            <p>I love connecting with other designers, there's so much to learn&mdash;I find that speaking with others in my field can be enlightening. I'm always looking to collaborate, specifically on brand and product related work. My most positive past relationships have been born out of honest collaboration. My ideal client has a love for what they are doing—and is excited to create a brand that inspires.</p>
            <p>When I'm not designing, I'm usually with friends and family, going to art galleries, restaurants and taking my dog Marvin for walks at Trinity Bellwoods. <br></br>Send me an email if you're interested in working together. If you're in Toronto, let's get coffee (or tea) <a href="mailto:hello@janellucia.com">hello@janellucia.com</a>.</p>
          </div>
        </div>
        <div className="resume">
          <div className="each-section experience">
            <h3>Experience —</h3>
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
