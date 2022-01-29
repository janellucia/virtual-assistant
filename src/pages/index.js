import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'

import ash from '../images/home/ash-home.gif';
import atria from '../images/home/atria-logo-mobile.gif';

const IndexPage = (props) => (
  <Layout name="home-page">
    <SEO title="Graphic Designer" keywords={[`Branding Designer`, `Brand Identity`, `Logo Designer`, `Graphic Designer`, `Illustration`, `illustrator`, `Design Accessibility`, 'website designer', 'squarespace designer', 'social media design', 'editorial design', 'print design', 'typography']} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>I help businesses design logos, brands &amp; websites that are beautifully simple, reassuringly smart and full of brand personality.</p>
        </div>
      </section>
      <section className="portfolio">
        <Link to="/anne-sophie-huot/" className="project-wrap">
          <img src={ash} alt="Anne-Sophie Huot logo animation" />
          <div className="home-project-info">
            <h3>Anne-Sophie Huot</h3>
            <p className="category">— Brand Identity, Logo Design, Squarespace Design &amp; Build</p>
          </div>
        </Link>
        <Link to="/lorangerie-photographie/" className="project-wrap">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} alt="L'Orangerie Photographie logo" />
          <Img fluid={props.data.imageTen.childImageSharp.fluid} alt="L'Orangerie Photographie logo" />
          <div className="home-project-info">
            <h3>L'Orangerie Photographie</h3>
            <p className="category">— Brand Identity, Logo Design, Squarespace design &amp; build, Social Media Design</p>
          </div>
        </Link>
        <Link to="/spirit-luxe/" className="project-wrap">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="spirit luxe logo" />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="spirit luxe logo" />
          <div className="home-project-info">
            <h3>Spirit Luxe</h3>
            <p className="category">— Brand Identity, Logo Design, Wordpress Build, Social Media Design</p>
          </div>
        </Link>
        <Link to="/floral-illustration/" className="project-wrap">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="Custom floral illustration" />
          <div className="home-project-info">
            <h3>Floral Dreams</h3>
            <p className="category">— Illustrations</p>
          </div>
        </Link>
        <Link to="/stephanie-boridy/" className="project-wrap">
          <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="Stephanie Boridy logo" />
          <div className="home-project-info">
            <h3>Stephanie Boridy</h3>
            <p className="category">— Brand Identity, Logo Design, Shopify design & build, Social Media Design</p>
          </div>
        </Link>
        <Link to="/clearly-thuy-doan/" className="project-wrap">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} alt="clearly, ThuyDoan logo" />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} alt="clearly, ThuyDoan logo" />
          <div className="home-project-info perceived-info">
            <h3>clearly, Thuy Doan</h3>
            <p className="category">— Brand Identity, Logo Design, Web Design, Social Media Design</p>
          </div>
        </Link>
        <Link to="/jo-rodrigues/" className="project-wrap">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Jo Rodrigues logo" />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="Jo Rodrigues logo" />
          <div className="home-project-info">
            <h3>Jo Rodrigues</h3>
            <p className="category">— Brand Identity, Logo Design, Wordpress build, Social Media Design</p>
          </div>
        </Link>
        <Link to="/bad-girls/" className="project-wrap">
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} alt="Bad Girls Collective logo" />
          <div className="home-project-info">
            <h3>Bad Girls Collective</h3>
            <p className="category">— Shopify Website Build</p>
          </div>
        </Link>
        <Link to="/atria-coaching/" className="project-wrap">
          <img src={atria} alt="Atria Coaching logo animation" />
          <div className="home-project-info">
            <h3>Atria Coaching</h3>
            <p className="category">— Brand Identity, Logo Design, Social Media Design</p>
          </div>
        </Link>
        <Link to="/livie-jewelry/" className="project-wrap">
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} alt="Livie Jewelry logo" />
          <div className="home-project-info">
            <h3>Livie Jewelry</h3>
            <p className="category">— Brand Identity, Logo Design, Shopify site design</p>
          </div>
        </Link>
        <Link to="/conceived-space/" className="project-wrap">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} alt="Conceived Space logo" />
          <div className="home-project-info">
            <h3>Conceived Space</h3>
            <p className="category">— Brand Identity, Logo Design, Squarespace Design &amp; Build, Social Media, Print Design</p>
          </div>
        </Link>
        <Link to="/lettering-archive/" className="project-wrap">
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} alt="lettering archive logo" />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} alt="lettering archive logo" />
          <div className="home-project-info">
            <h3>Typography Posters</h3>
            <p className="category">— Graphic Design</p>
          </div>
        </Link>
        <Link to="/qube-properties/" className="project-wrap">
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} alt="Qube logo" />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} alt="Qube logo" />
          <div className="home-project-info">
            <h3>Qube Properties</h3>
            <p className="category">— Brand Identity, Logo Design, Graphic Design, Print Design, Signage</p>
          </div>
        </Link>
      </section>
      <Testimonials />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/jo-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home/jo-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "home/sl-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "home/sl-home-mobile.jpg" }) {
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
    imageSix: file(relativePath: { eq: "home/sb-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "home/ctd-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "home/ctd-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "home/lop-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "home/lop-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "home/cs-home-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "home/livie-home-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "home/bgc-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "home/type-posters.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "home/type-posters-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "home/qube-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "home/qube-home-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`



