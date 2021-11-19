import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'

const IndexPage = (props) => (
  <Layout name="home-page">
    <SEO title="Designer" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Graphic Design`, `Brand Identity`, `Brand Designer`, `Typography`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>I help businesses design logos, brands &amp; websites that are beautifully simple, reassuringly smart and full of personality</p>
          {/* <p>I'm a UX/UI Designer crafting meaningful and strategic design with a clear voice and vision. I specialize in logo design, brand identity <span className="amp">&amp;</span> graphic design.</p> */}
        </div>
      </section>
      <section className="portfolio">
        <Link to="/girls-twenty/" className="project-wrap">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} alt="Girls 20 logo" />
          <div className="home-project-info girls-info">
            <h3>Girls 20</h3>
            <p className="category">— Branding, Sub-Branding, Squarespace Build</p>
          </div>
        </Link>
        <Link to="/daniela-bosco/" className="project-wrap">
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="Daniela Bosco logo" />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="Daniela Bosco logo" />
          <div className="home-project-info daniela-info">
            <h3>Daniela Bosco</h3>
            <p className="category">— Web Design, Squarespace build</p>
          </div>
        </Link>
        <Link to="/spirit-luxe/" className="project-wrap">
          <Img fluid={props.data.imageTen.childImageSharp.fluid} alt="spirit luxe logo" />
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} alt="spirit luxe logo" />
          <div className="home-project-info spirit-info">
            <h3>Spirit Luxe</h3>
            <p className="category">— Branding, Graphic Design, Wordpress Build, Social Media Design</p>
          </div>
        </Link>
        <Link to="/qube-properties/" className="project-wrap">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} alt="qube properties logo" />
          <div className="home-project-info qube-info">
            <h3>Qube Properties</h3>
            <p className="category">— Branding, Graphic Design, Print Design, Signage</p>
          </div>
        </Link>
        <Link to="/conceived-space/" className="project-wrap">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="conceived space logo" />
          <div className="home-project-info conceived-info">
            <h3>Conceived Space</h3>
            <p className="category">— Branding, Graphic Design, Squarespace build</p>
          </div>
        </Link>
        <Link to="/ivawithaneye/" className="project-wrap">
          <Img fluid={props.data.imageEight.childImageSharp.fluid} alt="perceived space logo" />
          <Img fluid={props.data.imageNine.childImageSharp.fluid} alt="perceived space logo" />
          <div className="home-project-info perceived-info">
            <h3>Iva with an Eye</h3>
            <p className="category">— Branding, Graphic Design</p>
          </div>
        </Link>
        <Link to="/good-ones-academy/" className="project-wrap">
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} alt="good ones academy logo" />
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} alt="good ones academy logo" />
          <div className="home-project-info good-info">
            <h3>Good Ones Academy</h3>
            <p className="category">— Research, App Design, Invision prototype</p>
          </div>
        </Link>
        <Link to="/jo-rodrigues/" className="project-wrap">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="Jo Rodrigues logo" />
          <div className="home-project-info jo-info">
            <h3>Jo Rodrigues</h3>
            <p className="category">— Branding, Graphic Design, Wordpress build</p>
          </div>
        </Link>
        <Link to="/bad-girls/" className="project-wrap">
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} alt="Bad Girls Collective logo" />
          <div className="home-project-info bad-girls-info">
            <h3>Bad Girls Collective</h3>
            <p className="category">— Shopify Website Build</p>
          </div>
        </Link>
        <Link to="/livie-jewelry/" className="project-wrap">
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} alt="Livie Jewelry logo" />
          <div className="home-project-info livie-info">
            <h3>Livie Jewelry</h3>
            <p className="category">— Branding, Graphic Design, Shopify Build</p>
          </div>
        </Link>
        <Link to="/atria-coaching/" className="project-wrap">
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} alt="Atria Coachign logo" />
          <div className="home-project-info atria-info">
            <h3>Atria Coaching</h3>
            <p className="category">— Branding, Graphic Design, Social Media Design</p>
          </div>
        </Link>
        <Link to="/lettering-archive/" className="project-wrap">
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} alt="lettering archive logo" />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} alt="lettering archive logo" />
          <div className="home-project-info type-info">
            <h3>Lettering Archive</h3>
            <p className="category">— Lettering, Instagram</p>
          </div>
        </Link>
        <Link to="/essential-courses/" className="project-wrap">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="Essential Courses logo" />
          <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="Essential Courses logo" />
          <div className="home-project-info essential-info">
            <h3>Essential Courses</h3>
            <p className="category">— Branding, Graphic Design, Web Design, Shopify Build</p>
          </div>
        </Link>
      </section>
      <section className="service-descriptions-wrap home-services">
        <div className="services-block home-service-wrap">
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} alt="janellucia headshot" />
          <Img fluid={props.data.imageTwentyOne.childImageSharp.fluid} alt="logo, branding, web design text-ring" className="text-ring" />
          <div className="service-info">
            <h1>Graphic Design Services</h1>
            <p>My design approach focuses on your business goals and personality while having a deep understanding of your audience, what they need and what they value — my goal is to improve the quality of the user’s interactions and perceptions of your business through beautiful and intuitive design.</p>
            <p>In order for there to be a meaningful and valuable user experience, information must be beautiful, authentic, useful &amp; usable.</p>
            <p><a href="/services">Learn More about my Services</a></p>
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
    imageOne: file(relativePath: { eq: "home/conceived-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/daniela-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "home/daniela-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "home/es-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "home/es-home-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "home/jo-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "home/qube-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "home/iva-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "home/iva-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "home/sl-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "home/sl-home-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "home/girls-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "home/livie-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "home/bgc-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "home/atria-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "home/la-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "home/la-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEighteen: file(relativePath: { eq: "home/good-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNineteen: file(relativePath: { eq: "home/good-home-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwenty: file(relativePath: { eq: "home/about-services.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwentyOne: file(relativePath: { eq: "home/text-ring.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`



