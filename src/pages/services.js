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
          <p>Hello, I design digital products and experiences that are beautifully simple, reassuringly smart and full of brand personality. Let’s make something together.</p>
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
          <h2>Design Services</h2>
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="chck1" />
              <label class="tab-label" for="chck1">Brand Values</label>
              <div class="tab-content">
                <p>Brand values are a set of guiding principles that shape every aspect of your business. They’re placed at the very core of your brand and are there to dictate your brand message, identity and personality. They affect the choices you make and the actions you take and are the main reason customers will connect with you over the competition. Investing in your brand is crucial if you want your business to be unique.</p>
                <ul>
                  <li><span className="bold">User Persona(s)</span> — define your audience, who are you talking to?</li>
                  <li><span className="bold">Values</span> — define a set of 5+ values that will help create a consistent brand across all platforms.</li>
                  <li><span className="bold">Positioning</span> — Defining your brand positioning is very similar to creating a mission statement.</li>
                </ul>
                <p>We refer to this throughout the design process and beyond to ensure clear and informed design and decisions throughout. Defining your values is the core to all of my services, I believe in creating informed design.</p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck2" />
              <label class="tab-label" for="chck2">Brand Identity</label>
              <div class="tab-content">
                <p>Brand identity is the face of a brand. While brand values are the emotional and even philosophical concepts, brand identity is the visual component of a brand that represents those larger ideas.</p>
                <p>Brand identity includes logos, typography, colors, packaging, and messaging, and it complements and reinforces the existing reputation of a brand. Brand identity attracts new customers to a brand while making existing customers feel at home. It's both outward- and inward-facing.</p>
                <p>It's vital that brand identity be consistent. Because it's representing and reinforcing the emotions of a brand, the message portrayed by brand identity components needs to be clear, and it needs to be the same no matter where it's displayed.</p>
                <p>To manage brand identity, organizations should invest in a brand identity that helps them stay consistent while still having the flexibility and the speed necessary to succeed in today's market.</p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck3" />
              <label class="tab-label" for="chck3">User Experience Design</label>
              <div class="tab-content">
                <p>Delivering a complete digital experience is like glue binding together all touch points, connecting devices, and creating omni-channel experiences. Using best practices and techniques, with a thorough understanding of all the latest technology tools, my UX strategy can create solutions that are both intuitive to use, and tailored to match specific user tasks and business goals.</p>
                <p>I always ensure that the end user is at the heart of design considerations, offering  a range of design services from UX research to interaction design, as well as full usability audits. My UX design approach is rooted in collaborative and iterative design, coupled with an open communication approach. I believe that the key to success rests upon data-driven user insights, clearly defined goals, and solid validation.</p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck4" />
              <label class="tab-label" for="chck4">Site Design</label>
              <div class="tab-content">
                <p>Your site is where your audience should feel connected to your brand — that you understand their needs, and that they've finally found the solutions they've been looking for.</p>
                <p>Good site design does not only mean the website looks good. It has to make sure that the website is functional, easy to navigate, users find what they are looking for and key elements like Call-to-actions (CTA) are prominently placed. Use of clear crisp images, text spacing, color scheme, typography, accessibility are all elements in a good website design.</p>
                <p>A successful site can look different for every business, and that's why it's important to make sure your message is coming through crystal clear.</p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck5" />
              <label class="tab-label" for="chck5">Site Build</label>
              <div class="tab-content">
                <p>Get your website up and running, with options ranging from basic theme setup (Wordpress/Shopify/Squarespace) to completely custom solutions for your brand or business.</p>
                <p>Whether you’re launching a site, need an ecommerce audit to learn how you can grow your business, are looking to migrate from one platform to another, or need a bespoke site with unique functionality, I will work with your team to achieve the results you need. With over 5 years experience building websites, I know my stuff when it comes to design and the development of competitive websites of the highest calibre.</p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck6" />
              <label class="tab-label" for="chck6">Design/Site Audit</label>
              <div class="tab-content">
                <p>An audit comes with a complete and in-depth analysis of your website's conversion factors. Is your brand story clear and shining through? Do prospective customers know instantly what you can do for them? Is your necessary above-the-fold content maximizing its potential?</p>
                <p>I will analyze your site's first impressions on users, connect with potential customers who have never been exposed to your brand before, and get real insights — the make-or-break insights from the people that matter.</p>
                <p>Detailed and actionable recommendations to improve your website immediately, as well as suggested long-term strategies for continued success, including content and promotional planning.</p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck7" />
              <label class="tab-label" for="chck7">Social Media Design</label>
              <div class="tab-content">
                <p>Good social media marketing is all about high quality content and consistent branding. Neither is possible without proper design work, simply because social media is a visual platform for your company.</p>
                <p>Your customers are meeting each other, sharing ideas, and talking about your brand online. Give them a great first impression. I will work with you to create strong social media designs, we will take the look and feel of your website/brand to every social part of the web and get you interacting with your customers.</p>
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
