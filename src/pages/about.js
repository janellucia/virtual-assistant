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
            <p>I specialize in human centered design, branding, website design, editorial design for books and magazines and type-led graphic design. I love to learn about people and their behaviours and apply that knowledge to create beautiful and well-informed products people feel connected to. I follow emotional design principles to put users at ease and understand their needs. My core values are “Love More” and “Lead with Simplicity”, these values provide a motivational foundation for all the work that I produce.</p>
            <p>I have been practicing as a designer for four years and before that I was in the hair and beauty industry working as a business manager. Hair studios can be a lot like start-ups as they are extremely fast paced, and you tend to wear many hats, I would mainly focus on the financials, business strategy, marketing and team building. A huge part of my role was to curate an online and social media presence and I grew a huge passion for understanding the customer needs and creating well informed marketing campaigns that connect us to our customers.</p>
            <p>I've always been obsessed with type, the different moods of colour and how to communicate through emotion. I started off creating webpages for people in my network and immediately everything felt right. After designing for a few months, I also became quit interested in coding as a design tool, I completed Hacker You’s full time front-end bootcamp and then their UX course. Fast forward four years later and I work with my clients as a team to deliver compelling brands and products they can stand behind. To continue my learning, I like to read books, articles and listen to podcasts but my most reliable tool for growth has always been working with other amazing designers – I learn so much by working with others and seeing how they approach design challenges.</p>
            <p>All these experiences have only propelled my love for design, I can't wait to continue to learn and grow with my projects and peers. When I'm not working, I'm surrounding myself with friends and family, going to art galleries, and taking my dog Marvin Gaye for walks at Trinity Bellwoods.</p>
            {/* <a href="">Download my Resumé</a> */}
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
