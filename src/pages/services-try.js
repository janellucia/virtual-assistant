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
          <p>I design digital products and experiences that are beautifully simple, reassuringly smart and full of brand personality. Check out my services below &amp; let’s make something together.</p>
        </div>
      </section>
      <section className="services-navigation">
        <div className="about-wrap">
          <p><a href="#brand-values" className="">Brand Values</a></p>
          <p><a href="#brand-identity" className="">Brand Identity</a></p>
          <p><a href="#ux-design" className="">User Experience Design</a></p>
          <p><a href="#web-design" className="">Web Design</a></p>
          <p><a href="#web-development" className="">Web Development</a></p>
          <p><a href="#site-audit" className="">Design/Website Audit</a></p>
          <p><a href="#social-media" className="">Social Media Marketing</a></p>
        </div>
        <div class="tab-content">
          <p>Brand values are the foundations that shape every aspect of your brand. They’re placed at the very core of decision making and are there to dictate your brand message, identity and personality. They inform the choices you make and the actions you take and are the main reason customers will connect with your brand.</p>
          <ul>
            <li><span className="bold">User Persona(s)</span> — Define your audience, who are you talking to?</li>
            <li><span className="bold">Design Principles</span> — Define a set of 5+ values that will help create a consistent brand across all platforms.</li>
            <li><span className="bold">Positioning</span> — Defining your brand positioning is very similar to creating a mission statement, it's where we check in to ensure authenticity.</li>
          </ul>
          <p>We refer to these values throughout the design process and beyond to ensure clear and informed design and decisions. Defining your values is the core to all of my services, I believe in creating informed design with a clear message and goal.</p>
          <a href="mailto:hello@janellucia?subject=Building Design Values" className="get-started-link">Get Started Today</a>
        </div>
      </section>
      <section className="about-page">

        <div id="brand-values" className="services-block">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Brand Values</h2>
            <p>Brand values are the foundations that shape every aspect of your brand. They’re placed at the very core of decision making and are there to dictate your brand message, identity and personality. They inform the choices you make and the actions you take and are the main reason customers will connect with your brand.</p>
            <ul>
              <li><span className="bold">User Persona(s)</span> — Define your audience, who are you talking to?</li>
              <li><span className="bold">Design Principles</span> — Define a set of 5+ values that will help create a consistent brand across all platforms.</li>
              <li><span className="bold">Positioning</span> — Defining your brand positioning is very similar to creating a mission statement, it's where we check in to ensure authenticity.</li>
            </ul>
            <p>We refer to these values throughout the design process and beyond to ensure clear and informed design and decisions. Defining your values is the core to all of my services, I believe in creating informed design with a clear message and goal.</p>
            <a href="mailto:hello@janellucia?subject=Building Design Values" className="get-started-link">Get Started Today</a>
          </div>
        </div>

        <div id="brand-identity" className="services-block services-reverse">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Brand Identity</h2>
            <p>Brand identity includes logos, typography, colors, packaging, and messaging, and it complements and establishes or reinforces the reputation of a brand. Brand identity attracts new customers to a brand while making existing customers feel at home. It's both outward- and inward-facing.</p>
            <p>It's vital that brand identity be consistent because it's representing and reinforcing the emotions of a brand, the message portrayed by brand identity components needs to be clear, and it needs to be the same no matter where it's displayed.</p>
            <p>Invest in a brand identity that helps you stay consistent while still having the flexibility and speed necessary to succeed in today's market.</p>
            <a href="mailto:hello@janellucia?subject=Building a Brand Identity" className="get-started-link">Get Started Today</a>
          </div>
        </div>

        <div id="ux-design" className="services-block">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>User Experience Design</h2>
            <p>Using best practices and techniques, with a thorough understanding of all the latest technology tools, my UX strategy can create solutions that are both intuitive to use, and tailored to match specific user tasks and business goals.</p>
            <p>I ensure that the end user is at the heart of design considerations, offering  a range of design services from UX research to interaction design, as well as full usability audits. </p><p>My UX design approach is rooted in collaborative and iterative design, coupled with an open communication approach. I believe that the key to success rests upon data-driven user insights, clearly defined goals, and solid validation.</p>
            <a href="mailto:hello@janellucia?subject=User Experience Design Inquiry" className="get-started-link">Get Started Today</a>
          </div>
        </div>

        <div id="web-design" className="services-block services-reverse">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Web Design</h2>
            <p>Your site is where your audience connects to your brand — where your brand connects to their needs, and where your audience gets that feeling that they finally found the solutions they've been looking for.</p>
            <p>Successful design not only means it looks good, it has to be functional, easy to navigate so users find what they need. Use of clear crisp images, text spacing, color scheme, typography, accessibility are all elements in satisfying site design. Success looks different for every business, and that's why it's important to make sure your message is clearly defined and coming through clear for users.</p>
            <a href="mailto:hello@janellucia?subject=Website Design" className="get-started-link">Get Started Today</a>
          </div>
        </div>

        <div id="web-development" className="services-block">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Web Development</h2>
            <p>Whether you’re launching a new site, need an site/ecommerce audit to learn how you can grow your business, are looking to migrate from one platform to another, or need a bespoke site with unique functionality, I will work with you to ensure your site acheives all your business goals and meets WCAG sccessibility standards.</p>
            <ul>
              <li><span className="bold">Shopify</span> — Basic theme set up or fully custom theme with sections</li>
              <li><span className="bold">Squarespace</span> — Basic theme set up or fully custom theme</li>
              <li><span className="bold">Wordpress</span> — Basic theme set up or fully custom theme, woocommerce setup</li>
            </ul>
            <a href="mailto:hello@janellucia?subject=Website Build" className="get-started-link">Get Started Today</a>
          </div>
        </div>

        <div id="site-audit" className="services-block services-reverse">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Design/Site Audit</h2>
            <p>An audit is a complete and in-depth analysis of your website's conversion factors. Is your brand story clear and shining through? Do prospective customers know instantly what you can do for them? Is your necessary above-the-fold content maximizing its potential? Is your site accessible according to WCAG 2.0 standards?</p>
            <p>I will analyze your site's first impressions on users, connect with potential customers who have never been exposed to your brand before, and get real insights — the make-or-break insights from the people that matter.</p>
            <p>Detailed and actionable recommendations to improve your website immediately, as well as suggested long-term strategies for continued success, including content and promotional planning.</p>
            <a href="mailto:hello@janellucia?subject=Website Audit" className="get-started-link">Get Started Today</a>
          </div>
        </div>

        <div id="social-media-marketing" className="services-block">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Social Media Marketing</h2>
            <p>Your customers are meeting each other, sharing ideas, and talking about your brand online. Give them a great first impression. I will work with you to create strong social media designs, we will take the look and feel of your website/brand to every social part of the web and get you interacting online in style.</p>
            <p>Good social media marketing is all about high quality content and consistent branding. Neither is possible without proper design work, simply because social media is a visual platform for your company.</p>
            <a href="mailto:hello@janellucia?subject=Social Media Design" className="get-started-link">Get Started Today</a>
          </div>
        </div>

      </section>

      <section className="values">
        <h2>My Values</h2>
        <div className="category">
          <h3>Know the Goals</h3>
          <p>When designing at any level the work should always reflect the product goals. Design Thinking begins with ‘why’ and creates the process for innovation.</p>
        </div>
        <div className="category">
          <h3>Promote Empathy</h3>
          <p>Use research to better understand the user, such as their behaviors, expectations, values, motivations, and needs. Design for friendliness, be sensitive to the context a design lives. Aim for approachable and respectful.</p>
        </div>
        <div className="category">
          <h3>Keep it Simple</h3>
          <p>Design purposeful interfaces that favor usability, while also infusing delight through color, animation and language.</p>
        </div>
        <div className="category">
          <h3>Reduce Risks</h3>
          <p>Do not be afraid of risks, but find a way to minimize potential failures. Identify elements in the development ecosystem, such as technology, the market, competitors, and customers.</p>
        </div>
        <div className="category">
          <h3>Learn & learn again</h3>
          <p>Know the data surrounding your product well enough to discuss, describe and deeply inform your design work. Grow from each experience.</p>
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
