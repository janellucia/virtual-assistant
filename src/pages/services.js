import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'


const Services = (props) => (
  <Layout name="about-page-wrap services-page-wrap">
    <SEO title="Design Services" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
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
        <div className="sticky-nav-wrap">
          <h3 class="open">Service List</h3>
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
            <p>Brand identity establishes your brand values and includes logos, typography, colors, packaging, and messaging based on your brands needs. It complements and establishes or reinforces the look and feel of a brand. A smart brand identity attracts customers while making existing customers feel at home. It's both outward- and inward-facing.</p>
            {/* <p>It's vital that brand identity be consistent because it's representing and reinforcing the emotions of a brand, the message portrayed by brand identity components needs to be clear, and it needs to be the same no matter where it's displayed.</p> */}
          </div>
        </div>

        <div id="logo-design" className="services-block">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="brand identity collage" />
          <div className="service-info">
            <h2>Logo Design</h2>
            <p>A logo identifies your brand in its simplest form using a logo mark, typographic solution, a text ring, or a combination of all three. That’s all there is to it. A logo is used as a signifier. It visually communicates who your brand is. Build recognition and trust with consistent branding and design.</p>
          </div>
        </div>

        <div id="web-design" className="services-block services-reverse">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="a look at a web design project" />
          <div className="service-info">
            <h2>Website Design &amp; Build</h2>
            <p>Your site is where your audience connects to your brand — where your brand connects to their needs. Use of clear crisp images, text spacing, color scheme, typography, and accessibility are all elements in satisfying site design. </p>
            <p>Success looks different for every business, and that's why it's important to make sure your message is clearly defined and coming through clear for users. We can build a completely custom site from scratch or we can customize a Squarespace or Shopify site to your needs.</p>
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
            <p>Since I’ve been illustrating my style has been pretty consistent in that I’ve always been drawing flowers. I illustrate realistically most of the time, but sometimes I create abstract floral illustrations where I overlay different flowers so they’re merging together and have quite a translucent quality.</p>
            <p>I’m still in the early stages of establishing my style and I’m happy to see how it evolves from this point. At the moment I use procreate but when I have more space I’d like to explore other avenues of digital design.</p>
          </div>
        </div>


        <div id="editorial-design" className="services-block">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="a look at a web design project" />
          <div className="service-info">
            <h2>Editorial Design <br></br>(Books & Magazines)</h2>
            <p>They say don't judge a book by it's cover but everyone does, ensure success on your next print project with a smart layout. Good design has a big impact on how written information is understood. </p>
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
    imageFive: file(relativePath: { eq: "home/floral-home.jpg" }) {
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
