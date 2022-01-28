import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'


const Services = (props) => (
  <Layout name="about-page-wrap services-page-wrap">
    <SEO title="Design Services" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'website designer', 'squarespace designer', 'social media design', 'editorial design', 'print design']} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p class="text-center">Beautiful &amp; Intelligent Design <br></br>for the modern business</p>
        </div>
      </section>
      <section className="services-navigation">
        <div className="wrapper service-nav-wrap">
          <p><a href="#brand-identity" className="">Brand Identity</a></p>
          <p><a href="#logo-design" className="">Logo Design</a></p>
          <p><a href="#web-design" className="">Website Design &amp; Build</a></p>
          <p><a href="#social-media" className="">Social Media Design</a></p>
          <p><a href="#illustration" className="">Floral Illustrations</a></p>
          <p><a href="#editorial-design" className="">Editorial Design (Print)</a></p>
        </div>
      </section>

      <section className="sticky-services-navigation">
        <p className="book-button"><a href="mailto:hello@janellucia.com?subject=Let's Work Together!">Inquire Now</a></p>
        <div className="sticky-nav-wrap">
          <p class="open">View Service List</p>
          <label class="trigger" for="stickyNav">
            <input type="checkbox" class="checkbox checkbox--red" id="stickyNav" />
            <div className="wrapper service-nav-wrap">
              <p><a href="#brand-identity" className="">Brand Identity</a></p>
              <p><a href="#logo-design" className="">Logos</a></p>
              <p><a href="#web-design" className="">Site Design</a></p>
              <p><a href="#social-media" className="">Social Media</a></p>
              <p><a href="#illustration" className="">Illustrations</a></p>
              <p><a href="#editorial-design" className="">Editorial Design</a></p>
            </div>
          </label>
        </div>
      </section>

      <section className="service-descriptions-wrap">

        <div id="brand-identity" className="services-block services-reverse">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="brand identity collage" />
          <div className="service-info">
            <h2>Brand Identity</h2>
            <p>Brand identity establishes your brand values and includes logos, typography, colours, packaging, and messaging based on your brand's needs. It complements and establishes or reinforces the look and feel of a brand. A well-designed brand identity attracts customers while making existing customers feel at home. It's both outward- and inward-facing.</p>
          </div>
        </div>

        <div id="logo-design" className="services-block">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="brand identity collage" />
          <div className="service-info">
            <h2>Logo Design</h2>
            <p>A logo identifies your brand in its simplest form using a logo mark, typographic solution, a text ring, or a combination of all of the above. That’s all there is to it. A logo is used as a signifier. It visually communicates who your brand is. Build recognition and trust with consistent branding and design.</p>
          </div>
        </div>

        <div id="web-design" className="services-block services-reverse">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="a look at a web design project" />
          <div className="service-info">
            <h2>Website Design &amp; Build</h2>
            <p>Your site is where your audience connects to your brand — where your brand connects to their needs. The use of clear crisp images, text spacing, colour scheme, typography, and accessibility are all elements in satisfying site design.</p>
            <p>Success looks different for every brand, and that's why it's important to make sure your message is clearly defined and coming through for your users. We can build a completely custom site from scratch or we can customize a Squarespace or Shopify site to fit your needs.</p>
          </div>
        </div>

      </section>

      <section className="services-navigation">
        <div className="wrapper service-nav-wrap pull-quote">
          <h2>For a peak at my design work, please take a look at my <a href="/">portfilio page</a></h2>
        </div>
      </section>

      <section className="service-descriptions-wrap">

        <div id="social-media" className="services-block">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="a look at a web design project" />
          <div className="service-info">
            <h2>Social Media Design</h2>
            <p>Give your customers a great first impression. I will work with you to create strong social media designs, we will take the look and feel of your brand to every social part of the web and get you interacting online in style.</p>
            <p>Good social media design is all about high quality content and consistent branding. We can work together to create a template you can update or we can work together consistently to make ensure clean, clear design. </p>
          </div>
        </div>

        <div id="illustration" className="services-block">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="social media tiles collage" />
          <div className="service-info">
            <h2>Floral Illustrations</h2>
            <p>Bring your brand to life with custom illustrations, it's a great way to enrich a brand's visual language and say more nuanced things that a logo, color scheme, typeface, or even words cannot convey alone. </p>
            <p>Illustrations have the ability to reimagine reality in a way that is familiar yet delightfully uncommon, which makes it particularly useful when an idea is difficult to explain. It’s a powerful way to cut through distractions and relate complex emotions quickly.</p>
          </div>
        </div>


        <div id="editorial-design" className="services-block">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="a look at a web design project" />
          <div className="service-info">
            <h2>Editorial Design <br></br>(Books & Magazines)</h2>
            <p>They say don't judge a book by its cover but everyone does, ensure success on your next print project with a smart and satisfying layout. Good design has a big impact on how written information is understood. </p>
            <p>My goal is to make publications attractive, visually interesting, and easy to read. Let's work together to bring your newspapers, magazines, reports, online publications to life. </p>
          </div>
        </div>

        <div className="thank-you-msg">
          <h1>Let's work together today and make your brand recognisable.</h1>
        </div>
      </section>

      <Testimonials />
    </div>
  </Layout >
)

export default Services

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "services/brand-identity.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "services/logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "services/site.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "services/social-media.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "home/floral-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "services/editorial.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
