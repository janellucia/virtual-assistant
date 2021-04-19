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
          <p>I help businesses design products and experiences that are beautifully simple, reassuringly smart and full of brand personality with my Conscious Design System.</p>
        </div>
      </section>
      <section className="services-navigation">
        <div className="wrapper service-nav-wrap">
          <p><a href="#brand-identity" className="">Brand Identity</a></p>
          <p><a href="#logo-design" className="">Logo Design</a></p>
          <p><a href="#web-design" className="">Website Design</a></p>
          <p><a href="#editorial-design" className="">Editorial Design</a></p>
          <p><a href="#social-media" className="">Social Media Design</a></p>
          <p><a href="#web-development" className="">Website Build</a></p>
          <p><a href="#cds" className="">Concious Design System</a></p>
        </div>
      </section>

      <section className="sticky-services-navigation">
        <div className="sticky-nav-wrap">
          <h3 class="open">Service List</h3>
          <label class="trigger" for="stickyNav">
            <input type="checkbox" class="checkbox checkbox--red" id="stickyNav" />
            <div className="wrapper service-nav-wrap">
              <p><a href="#brand-identity" className="">Brand Identity</a></p>
              <p><a href="#logo-design" className="">Logo Design</a></p>
              <p><a href="#web-design" className="">Website Design</a></p>
              <p><a href="#editorial-design" className="">Editorial Design</a></p>
              <p><a href="#social-media" className="">Social Media Design</a></p>
              <p><a href="#web-development" className="">Website Build</a></p>
              <p><a href="#cds" className="">Concious Design System</a></p>
            </div>
          </label>
        </div>
      </section>

      <section className="service-descriptions-wrap">

        <div id="brand-identity" className="services-block services-reverse">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="brandidentity collage" />
          <div className="service-info">
            <h2>Brand Identity</h2>
            <p>Brand identity includes logos, typography, colors, packaging, and messaging, and it complements and establishes or reinforces the reputation of a brand. Brand identity attracts new customers to a brand while making existing customers feel at home. It's both outward- and inward-facing.</p>
            <p>It's vital that brand identity be consistent because it's representing and reinforcing the emotions of a brand, the message portrayed by brand identity components needs to be clear, and it needs to be the same no matter where it's displayed.</p>
            <p>Invest in a brand identity that helps you stay consistent while still having the flexibility and speed necessary to succeed in today's market.</p>
          </div>
        </div>

        <div id="logo-design" className="services-block">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="logo collage" />
          <div className="service-info">
            <h2>Logo Design</h2>
            <p>Your logo identifies your business in its simplest form using a logo mark, typographic solution, or a combination of both. That’s all there is to it. A logo is used as a signifier. It communicates something; a message, a feeling, or a story. It resonates with something in your brain and tells a story.</p>
            <p>People recognise logos. And that’s one of the major things your logo design should do for you. Build recognition and trust. In my opinion, your logo should be five key things, it should be memorable, simple, versatile, appropriate & timeless.</p>
            <p>Let's work together today and make your brand recognisable.</p>
          </div>
        </div>

        <div id="web-design" className="services-block services-reverse">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="a look at a web design project" />
          <div className="service-info">
            <h2>Website Design</h2>
            <p>Your site is where your audience connects to your brand — where your brand connects to their needs, and where your audience gets that feeling that they finally found the solutions they've been looking for.</p>
            <p>Successful design not only means it looks good, it has to be functional, easy to navigate so users find what they need. Use of clear crisp images, text spacing, color scheme, typography, accessibility are all elements in satisfying site design. Success looks different for every business, and that's why it's important to make sure your message is clearly defined and coming through clear for users.</p>
          </div>
        </div>

      </section>

      <section className="services-navigation">
        <div className="wrapper service-nav-wrap pull-quote">
          <h2>For a peak at my design work, please take a look at my <a href="/">portfilio page</a></h2>
        </div>
      </section>

      <section className="service-descriptions-wrap">

        <div id="editorial-design" className="services-block">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="image of site wireframes" />
          <div className="service-info">
            <h2>Editorial Design <br></br>(Books & Magazines)</h2>
            <p>Editorial design is the layout and visual aesthetics of books, newspapers, magazines, reports, online publications and other media. Good design has a big impact on how written information is understood. My goal is to make publications attractive, visually interesting, and easy to read.</p> <p>Good design is cohesive, clear, and draws readers in. Ultimately, good design increases your business' value, boosts sales, and puts your business in a better growth trend. Through building trust, making strong first impressions, building customer relationships, and even executing successful campaigns, good design helps make your business more profitable.</p>
          </div>
        </div>

        <div id="social-media" className="services-block">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="social media tiles collage" />
          <div className="service-info">
            <h2>Social Media Design</h2>
            <p>Your customers are meeting each other, sharing ideas, and talking about your brand online. Give them a great first impression. I will work with you to create strong social media designs, we will take the look and feel of your website/brand to every social part of the web and get you interacting online in style.</p>
            <p>Good social media design is all about high quality content and consistent branding. Neither is possible without proper design work, simply because social media is a visual platform for your company.</p>
          </div>
        </div>

        <div id="web-development" className="services-block">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Website Build</h2>
            <p>Whether you’re launching a new site, need an site/ecommerce audit to learn how you can grow your business, are looking to migrate from one platform to another, or need a bespoke site with unique functionality, I will work with you to ensure your site acheives all your business goals and meets WCAG sccessibility standards.</p>
            <ul>
              <li><span className="bold">Shopify</span> — Basic theme set up or fully custom theme with sections</li>
              <li><span className="bold">Squarespace</span> — Basic theme set up or fully custom theme</li>
              <li><span className="bold">Wordpress</span> — Basic theme set up or fully custom theme, woocommerce setup</li>
            </ul>
          </div>
        </div>

        {/* <div id="site-audit" className="services-block services-reverse">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} alt="janel lucia headshot" />
          <div className="service-info">
            <h2>Design/Site Audit</h2>
            <p>An audit is a complete and in-depth analysis of your website's conversion factors. Is your brand story clear and shining through? Do prospective customers know instantly what you can do for them? Is your necessary above-the-fold content maximizing its potential? Is your site accessible according to WCAG 2.0 standards?</p>
            <p>I will analyze your site's first impressions on users, connect with potential customers who have never been exposed to your brand before, and get real insights — the make-or-break insights from the people that matter.</p>
            <p>Detailed and actionable recommendations to improve your website immediately, as well as suggested long-term strategies for continued success, including content and promotional planning.</p>
          </div>
        </div> */}

      </section>

      <section id="cds" className="services-navigation lcds-wrap">
        <div className="wrapper service-nav-wrap pull-quote">
          <h2>So what is my <br></br>Conscious Design System?</h2>
          <p>My Conscious Design System (CDS) focuses on your business goals and personality while having a deep understanding of your audience, what they need, what they value, their abilities, and their limitations — my intentions are to improve the quality of the user’s interactions and perceptions of your business through beautiful and intuitive design.</p>
          <p>In order for there to be a meaningful and valuable user experience, information must be authentic, useful, usable, desirable, findable, accessible, credible & valuable. Each facet of CDS can transform how we see what we do and enabling us to explore our brand beyond conventional boundaries.</p>
          <p>It’s a great tool for advancing the conversation beyond usability and for helping you and your team understand the need to define priorities. Is it more important for your design to be desirable or accessible? How about usable or credible? This all depends on your unique balance of values, goals and user needs, and the required tradeoffs are better made explicitly than unconsciously. </p>
          <p>For me, design is a big hive: a dynamic, multi-dimensional space where there’s still plenty of room to build new boxes and draw new arrows and create a new space for your brand.</p>
        </div>
      </section>


      <Testimonials />
    </div>
  </Layout >
)

export default Services

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "services/logo-service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "services/brand-service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "services/web-design-service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "services/editorial-service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "services/social-media-service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "services/web-dev-service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "services/audit-service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
