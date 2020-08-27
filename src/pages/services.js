import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'

const Services = (props) => (
  <Layout name="about-page-wrap services-page-wrap">
    <SEO title="Services" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>Hello, I design digital products and experiences that are beautifully simple, reassuringly smart and full of brand personality. Check out my services below &amp; let’s make something together.</p>
        </div>
      </section>
      <section className="about-page">
        <div className="panel">
          <h3>My Values</h3>
          <div className="category">
            <h4>Know the Goals</h4>
            <p>When designing at any level the work should always reflect the product goals. Design Thinking begins with ‘why’ and creates the process for innovation.</p>
          </div>
          <div className="category">
            <h4>Promote Empathy</h4>
            <p>Use research to better understand the user, such as their behaviors, expectations, values, motivations, and needs. Design for friendliness, be sensitive to the context a design lives. Aim for approachable and respectful.</p>
          </div>
          <div className="category">
            <h4>Keep it Simple</h4>
            <p>Design purposeful interfaces that favor usability, while also infusing delight through color, animation and language.</p>
          </div>

          <div className="category">
            <h4>Reduce Risks</h4>
            <p>Do not be afraid of risks, but find a way to minimize potential failures. Identify elements in the development ecosystem, such as technology, the market, competitors, and customers.</p>
          </div>
          <div className="category">
            <h4>Learn & learn again</h4>
            <p>Know the data surrounding your product well enough to discuss, describe and deeply inform your design work. Grow from each experience.</p>
          </div>

        </div>

        <div className="about-wrap">
          <h2>My Services</h2>
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="chck1" />
              <label class="tab-label" for="chck1">Brand Values</label>
              <div class="tab-content">
                <p>Brand values are the foundations that shape every aspect of your brand. They’re placed at the very core of decision making and are there to dictate your brand message, identity and personality. They inform the choices you make and the actions you take and are the main reason customers will connect with your brand.</p>
                <ul>
                  <li><span className="bold">User Persona(s)</span> — Define your audience, who are you talking to?</li>
                  <li><span className="bold">Design Principles</span> — Define a set of 5+ values that will help create a consistent brand across all platforms.</li>
                  <li><span className="bold">Positioning</span> — Defining your brand positioning is very similar to creating a mission statement.</li>
                </ul>
                <p>We refer to these values throughout the design process and beyond to ensure clear and informed design and decisions. Defining your values is the core to all of my services, I believe in creating informed design with a clear message and goal.</p>
                <a href="mailto:hello@janellucia?subject=Building Design Values" className="get-started-link">Get Started Today</a>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck2" />
              <label class="tab-label" for="chck2">Brand Identity</label>
              <div class="tab-content">
                {/* <p>Brand identity is the face of a brand. While brand values are the emotional and even philosophical concepts, brand identity is the visual component of a brand that represents those larger ideas.</p> */}
                <p>Brand identity includes logos, typography, colors, packaging, and messaging, and it complements and establishes or reinforces the reputation of a brand. Brand identity attracts new customers to a brand while making existing customers feel at home. It's both outward- and inward-facing.</p>
                <p>It's vital that brand identity be consistent because it's representing and reinforcing the emotions of a brand, the message portrayed by brand identity components needs to be clear, and it needs to be the same no matter where it's displayed.</p>
                <p>Invest in a brand identity that helps you stay consistent while still having the flexibility and speed necessary to succeed in today's market.</p>
                <a href="mailto:hello@janellucia?subject=Building a Brand Identity" className="get-started-link">Get Started Today</a>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck3" />
              <label class="tab-label" for="chck3">User Experience Design</label>
              <div class="tab-content">
                <p>Using best practices and techniques, with a thorough understanding of all the latest technology tools, my UX strategy can create solutions that are both intuitive to use, and tailored to match specific user tasks and business goals.</p>
                <p>I ensure that the end user is at the heart of design considerations, offering  a range of design services from UX research to interaction design, as well as full usability audits. </p><p>My UX design approach is rooted in collaborative and iterative design, coupled with an open communication approach. I believe that the key to success rests upon data-driven user insights, clearly defined goals, and solid validation.</p>
                <a href="mailto:hello@janellucia?subject=User Experience Design Inquiry" className="get-started-link">Get Started Today</a>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck4" />
              <label class="tab-label" for="chck4">Web Design</label>
              <div class="tab-content">
                <p>Your site is where your audience connects to your brand — where your brand connects to their needs, and where your audience (hopefully) gets that feeling that they finally found the solutions they've been looking for.</p>
                <p>Successful design not only means it looks good, it has to be functional, easy to navigate so users find what they need. Use of clear crisp images, text spacing, color scheme, typography, accessibility are all elements in successful site design. Success looks different for every business, and that's why it's important to make sure your message is coming through crystal clear.</p>
                <a href="mailto:hello@janellucia?subject=Website Design" className="get-started-link">Get Started Today</a>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck5" />
              <label class="tab-label" for="chck5">Web Development</label>
              <div class="tab-content">
                {/* <p>Get your website up and running, with options ranging from basic theme setup (Wordpress/Shopify/Squarespace) to completely custom web solutions, I will work with you to ensure your site acheives all your business goals.</p> */}
                <p>Whether you’re launching a new site, need an site/ecommerce audit to learn how you can grow your business, are looking to migrate from one platform to another, or need a bespoke site with unique functionality, I will work with you to ensure your site acheives all your business goals and meets WCAG sccessibility standards.</p>
                <ul>
                  <li><span className="bold">Shopify</span> — Basic theme set up or fully custom theme with sections</li>
                  <li><span className="bold">Squarespace</span> — Basic theme set up or fully custom theme</li>
                  <li><span className="bold">Wordpress</span> — Basic theme set up or fully custom theme, woocommerce setup</li>
                </ul>
                <a href="mailto:hello@janellucia?subject=Website Build" className="get-started-link">Get Started Today</a>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck6" />
              <label class="tab-label" for="chck6">Design/Site Audit</label>
              <div class="tab-content">
                <p>An audit is a complete and in-depth analysis of your website's conversion factors. Is your brand story clear and shining through? Do prospective customers know instantly what you can do for them? Is your necessary above-the-fold content maximizing its potential? Is your site accessible according to WCAG 2.0 standards?</p>
                <p>I will analyze your site's first impressions on users, connect with potential customers who have never been exposed to your brand before, and get real insights — the make-or-break insights from the people that matter.</p>
                <p>Detailed and actionable recommendations to improve your website immediately, as well as suggested long-term strategies for continued success, including content and promotional planning.</p>
                <a href="mailto:hello@janellucia?subject=Website Audit" className="get-started-link">Get Started Today</a>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck7" />
              <label class="tab-label" for="chck7">Social Media Design</label>
              <div class="tab-content">
                <p>Your customers are meeting each other, sharing ideas, and talking about your brand online. Give them a great first impression. I will work with you to create strong social media designs, we will take the look and feel of your website/brand to every social part of the web and get you interacting online in style.</p>
                <p>Good social media marketing is all about high quality content and consistent branding. Neither is possible without proper design work, simply because social media is a visual platform for your company.</p>
                <a href="mailto:hello@janellucia?subject=Social Media Design" className="get-started-link">Get Started Today</a>
              </div>
            </div>
          </div>


        </div>
      </section>
      <Testimonials />
    </div>
  </Layout>
)

export default Services

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
