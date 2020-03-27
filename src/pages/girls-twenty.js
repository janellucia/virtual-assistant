import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'



const GirlsTwenty = (props) => (

  <Layout name="project-page">
    <SEO title="Girls 20" />
    <section className="title">
      <div className="wrapper">
        <h1>G(irls)20</h1>
        <p className="subtitle">Transforming tomorrow by building a generation of female leaders.</p>
      </div>
    </section>

    <div id="lettering-archive" className="wrapper">
      <section className="project-info">
        <div className="project-copy">
          <h2>Creating a web presence for a non-profit organization with a great cause</h2>
          <p>Launched in 2009 at the Clinton Global Initiative, G(irls)20 places young women at the centre of decision-making processes through their signature programs, Global Summit and Girls on Boards, they make strategic investments in young women through education and training, building networks, and access to unparalleled opportunities at home and abroad.</p>
          <h3>Role</h3>
          <p>I was the lead designer/developer on this project. I worked with stakeholders to create G(irls)20's style guide &amp; website.</p>
          <h3>The Challenge</h3>
          <p>The challenge was to take an existing non-profit brand and update their online presence and platform and create marketing materials to grow with the brand over the next few years.</p>
          <h3>The Solution</h3>
          <p>The solution was to deliver a well strategized website &amp; style guide. Success in this project will be measured by growth in program participants, and a new market of sponsors.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Brand Strategy</li>
              <li>Style Guide</li>
              <li>Web Design</li>
              <li>Marketing Assets</li>
              <li>Squarespace Build</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info intro">
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <h2>Developing a Strategy</h2>
        <div className="project-copy project-steps">
          <p>G(irls)20 is advocating for change at the global level through their annual G(irls)20 Global Summit, they are invested in changing the status quo for women at decision-making tables in communities across Canada by placing Girls on Boards.</p>
          <p>When developing the strategy we surfaced the challenges G(irls)20 is facing as a non-profit organization, we prioritized the needs and goals of the business and its participants & sponsors. This became the foundation for the style guide and marketing plans for G(irls)20.</p>
          <p className="large-text">So, how might we create a meaningful web presence and style guide for brand consistancy?</p>
        </div>
      </section>
      <section className="project-info intro">
        <h2>Understanding the Users</h2>
        <div className="project-copy project-steps">
          <p>For G(irls)20's we have 3 user groups in mind. We are speaking to young girls ages 18 - 25 who are looking to participate in G(irls)20's programs like the Global Summit and Girls on Boards, we are speaking to young professional women who are looking to volunteer their time by supporting a young female leader's journey, and we are also spaking to companies that are interested in sponsoring programs and events, sponsors are how programs and events are possible.</p>
          <p>Each one of these user groups is equally important to the growth of G(irls)20, we want to value and honour each group and make sure their main CTA's are easy to find, easy to understand, and easy to act on. Another layer we must consider in our communications is the fact that G(irls)20 is a global brand speaking to all countries looking to make a positive impact on the world stage. Diversity & inclusion will play a large role in the decision making process.</p>
        </div>
      </section>
      <section className="project-info">
        <h2>Defining the Brand</h2>
        <div className="project-copy project-steps-full">
          <p>Through a series of exercises in the strategy session, we were able to extract and refine the key pillars of the brand. This defined the brand’s personality: how it should look, sound, act, and feel.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Positioning</h2>
        <div className="project-copy project-steps-full">
          <p>Understanding what the G(irls)20 brand is and who they are a champion for helped define the positioning statement of the brand.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Brand Style Guide</h2>
        <p>G(irls)20's style guide is made up of 4 core elements.</p>
        <div className="brand-elements">
          <a href="#type">
            <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
            <p>01 Typography</p>
          </a>
          <a href="#colour">
            <Img fluid={props.data.imageTen.childImageSharp.fluid} />
            <p>02 Colour</p>
          </a>
          <a href="#imagery">
            <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
            <p>03 Imagery</p>
          </a>
          <a href="#logo">
            <Img fluid={props.data.imageNine.childImageSharp.fluid} />
            <p>04 Website</p>
          </a>
        </div>
      </section>
      <section className="project-info" id="type">
        <h2>01 Typography</h2>
        <div className="project-copy project-steps">
          <p>When exploring fonts for G(irls)20 we knew that we wanted an interesting font pairing that remains minimal for general copy and marketing purposes. Our first defined font is Brandon Grotesque, which is a geometric sans-serif typeface, a good choice to spice up any sans-serif choices we've all seen before.</p>
          <p>FF Tisa has a large x-height which offers it excellent legibility, I think it’s a great choice for setting long passages of text on the web. G(irls)20 as a brand is offering so much information at any given time and we wanted to make sure that users are able to comfortably read through any amount of text on our site. </p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="colour">
        <h2>02 Colour</h2>
        <div className="project-copy project-steps-full">
          <p>G(irls)20's brand colours are bright and bold, originally having defined one gold and one blue I wanted to expand that palette to offer more flexibility in the designing process. This stays true to G(irls)20's roots and allows them to move forward into the future with confidence.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
        </div>
        <h3>Colour Defined</h3>
        <div className="project-copy project-steps-full">
          <p>Through many stages of possible colour palette's we landed on pulling tones and tints from the original palette. We also added some functional colours that will be helpful when creating the website. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="imagery">
        <h2>03 Imagery</h2>
        <div className="project-copy project-steps-full">
          <p>The text/image blocks across the site require a square image, and left aligned text. The square images have a gold drop shadow that ranges from 100% hight to 75% height and 50% height, this allows to keep it youthful and legible at the same time. Below is an example of the images and also a look at the image blocks in the wild. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
        </div>
        <h3>Banner/Blog Images</h3>
        <div className="project-copy project-steps">
          <p>When posting images as page banners and blog post thumbnails, I wanted to define an easy approach to using images that keeps a consistant feel across content and that it fits all the possible ways an image can be shared from their site. For these images we must use images wit 16:9 dimensions (1920px x 1080px) and on top of that we must make sure that aspects of the image that are important to the context don't get cut off.</p>
          <p>My solution to this problem was to create a guide for the G(irls)20 team that will help them approve and post content. The red rectangles represent images with 16:9, 4:3 and 1:1 size ratois, as long as the image looks appealing in all circumstances it is safe to post.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentytwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentythree.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="logo">
        <h2>04 Website</h2>
        <div className="project-copy project-steps-full">
          <p>For the website for G(irls)20 we chose to go for an easy layout that favours flow over flashy design, telling the story of G(irls)20 remains the most important factor when creating online content. The website is simple, bold and unique. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentyfour.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyfive.childImageSharp.fluid} />
        </div>
        <h3>Design Explorations</h3>
        <div className="project-copy project-steps-full">
          <p>We went through multiple variations of what the site could look like and in the end we decided to go with option 1. This was chosen by the team because they felt it portrays the main message and has just the right amount of trendy web design without running the risk of becoming outdated in a year.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentysix.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyseven.childImageSharp.fluid} />
        </div>
        <h3>Final Design</h3>
        <div className="project-copy project-steps-full">
          <p>When arriving at the final design we gathered all of the most important information to tell the story of G(irls)20. This is the perfect balance of legacy design principles and new refined principles we set through this process.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <section className="project-links">
      <div className="wrapper">
        <p className="thank-you">—Thank you </p>
      </div>
    </section>
    <section className="more-projects">
      <div className="wrapper">
        <h2 className="thank-you">Other Projects</h2>
        <a className="menu-item" href="/good-ones-academy">Good Ones Academy</a>
        <a className="menu-item" href="/daniela-bosco">Daniela Bosco</a>
        <a className="menu-item" href="/atria-coaching">Atria Coaching</a>
        <a className="menu-item" href="/bad-girls">Bad Girls Collective</a>
        <a className="menu-item" href="/livie-jewelry">Livie Jewelry</a>
        <a className="menu-item" href="/ivawithaneye">Iva with an eye</a>
        <a className="menu-item" href="/lettering-archive">Lettering Archive</a>
        <a className="menu-item" href="/girls-twenty">Girls 20</a>
      </div>
    </section>
  </Layout>
)

export default GirlsTwenty

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "girls/girls-intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "girls/girls-intro-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "daisy/daisy-user-personas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "daisy/daisy-user-personas-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "girls/girls-design-principles.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "girls/girls-design-principles-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "girls/girls-positioning.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "girls/girls-positioning-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "girls/girls-brand-website.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "girls/girls-brand-colour.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEleven: file(relativePath: { eq: "girls/girls-brand-typography.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwelve: file(relativePath: { eq: "girls/girls-brand-imagery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirteen: file(relativePath: { eq: "girls/girls-type-tisa.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFourteen: file(relativePath: { eq: "girls/girls-colour-intro.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFifteen: file(relativePath: { eq: "girls/girls-colour-intro-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSixteen: file(relativePath: { eq: "girls/girls-colour-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSeventeen: file(relativePath: { eq: "girls/girls-colour-final-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEighteen: file(relativePath: { eq: "girls/girls-imagery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageNineteen: file(relativePath: { eq: "girls/girls-imagery-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwenty: file(relativePath: { eq: "girls/girls-imagery-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyone: file(relativePath: { eq: "girls/girls-imagery-two-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentytwo: file(relativePath: { eq: "girls/girls-imagery-three.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentythree: file(relativePath: { eq: "girls/girls-imagery-three-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfour: file(relativePath: { eq: "girls/girls-website-one.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfive: file(relativePath: { eq: "girls/girls-website-one-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentysix: file(relativePath: { eq: "girls/girls-website-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyseven: file(relativePath: { eq: "girls/girls-website-two-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }
`
