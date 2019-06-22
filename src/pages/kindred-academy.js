import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'



const Easy = (props) => (

  <Layout name="project-page">
    <SEO title="Project | Wicked Problem" />
    <section className="title wicked-title">
      <div className="wrapper">
        <h1>Kindred Academy</h1>
        <p className="subtitle">Exploring healthy emotional development for youth through user research</p>
        <div className="button-wrap">
          <a href="https://drive.google.com/file/d/1Z0o78m80WI0TZSK1xX2-Zu3RdLTSxMiW/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">View Presentation</a>
        </div>
      </div>
    </section>
    <div id="wicked-problem" className="wrapper">
    <section className="project-info intro">
        <div className="project-copy">
          <h2>Solving the wicked problem of youth mental health</h2>
          <p>In the advanced portion of Hacker You’s UX course we were asked to define a wicked problem and use research to explore solutions, which is no easy task and often found there are wicked problems within wicked problems, this expanded my creativity and helped me embrace discomfort in an analytical way.</p>
          <p>I took a systematic approach to this project, a process based off of design thinking principals, this works best when the problem hasn’t been defined yet.</p>
          <h3>Role</h3>
          <p>I was the lead designer/researcher on this project. I created the Kindred Academy style guide &amp; product strategy.</p>
          <h3>The Challenge</h3>
          <p>The challenge was to define a wicked problem and use research, divergence &amp; transformation, and convergence &amp; solution to explore solutions. </p>
          <h3>The Solution</h3>
          <p>The solution was to come up with a product to help improve youth mental health and showcase my findings in a presentation.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
              <li>User Research</li>
              <li>Design Thinking</li>
              <li>Product Strategy</li>
              <li>Product Identity</li>
              <li>Presentation</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-info intro">
          <h2>Definition</h2>
        <div className="project-copy project-steps">
          <p>In the definition stage, I worked on clearly understanding the situation and context of youth mental health. I started off with some high-level research to prove that the state of youth mental health is a significant problem.</p>
          <p>I found a growing body of scientific evidence showing that emotional development begins early in life, that it is a critical aspect of the development of overall brain architecture, and that it has enormous consequences over the course of a lifetime.</p>
          <p>Approximately 1 in 5 youth worldwide will experience a mental illness before they turn 25.2 This makes youth & adolescence a critical time for mental health promotion, prevention, early identification, and intervention. </p>
          {/* <p>Children are the most adaptable, their brains are sponges absorbing everything around them and it’s our responsibility to contribute in a positive way. </p> */}
          <p>When it comes to young people in extreme distress or at risk of suicide, effective crisis services and access to support is essential, but so is preventing young people from reaching a crisis in the first place. So, I want to find out:</p>
          <p className="large-text">How might we offer intervention &amp; prevention solutions for youth mental health?</p>
        </div>
      </section>
      <section className="project-info">
        <h2>Discovery</h2>
        <div className="project-copy project-steps">
          <p>In the discovery stage, I need to understand youth mental health on a deeper level through compiling quantitative &amp; qualitative data, user research, design values, and empathy maps.</p>
          <p>When researching I found that key factors contributing to stress and anxiety in kids today are technology usage, lack of creativity, social anxiety and emotional neglect. With the negative effects technology is having on kids the solution cannot be technology based, there is a need for human to human interactions in a safe environment where kids are free to express themselves. </p>
          <p>I chose to interview a mix of kids &amp; parents from different cities and towns and different economic and educational backgrounds. In all groups, I found that families are experiencing similar frustrations, anxiety, stress and lack of communication and confidence. Though the children I interviewed were incredibly smart and adaptable they expressed feelings of social isolation and a pressure to succeed academically, stressing over classes, grades and tests.</p>
          <p>Understanding youth mental health is extremely complex, to be successful I need to create and follow well thought out design values to act as my north star, a guiding light in the midst of all the uncertainty. While researching and defining the design values, I also defined an empathy map so I have a clear understanding of the people on the other end of this wicked problem.</p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
        <h2>Divergence</h2>
        <div className="project-copy project-steps">
          <p>At the beginning of the divergence stage I asked myself two questions:</p> 
          <ul className="informative-list">
            <li>How do organizations empower youth in their communities?</li>
            <li>How do caregivers encourage a positive mindset?</li>
          </ul>
          <p>I was able to explore all sorts of industries. Not all of my findings held much value and sometimes I felt like I was going backwards and getting further away from a solution but I did find some great companies offering impactful services.</p>
          <p>Forest Schools look to promote social skills and creative learning while focusing a great deal on teamwork and problem-solving outdoors. High-quality outdoor learning experiences are proven to develop reflective and inquisitive thinking along with problem-solving  and develop resilience and adaptability.</p>
          <p>Bright Horizons offer families assistance in the form of child care, counselling, and academic coaches. In their annual report, they analyze the needs of families and they believe imaginative and creative play is how children learn about the world. They encourage families and kids to spend time outdoors, invent scenarios, verbal activities, encouraging art, limit screen time, and allow for downtime.</p>
          <p>Sick Kids has a program for their patients that explores the positive effects of music and art. They believe art is a natural language for children and by giving them the tools needed to express themselves can improve their state of mind. Through the process of creating art and working with an art therapist, a child can explore their feelings, process emotional conflicts, build self-awareness and increase self-esteem, reduce stress and anxiety.</p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
        <h2>Convergence</h2>
        <div className="project-copy project-steps">
          <p>Convergence is the final stage in systematic design, it's where I narrow down and blend insights collected from research, divergence &amp; transformation.</p>
          <p>I explored the wicked problem of youth mental health using design thinking to capture the mindsets and needs of the people I'm creating for and let the data to lead me to a new innovative solution.</p>
          <p>I explored organizations offering many different types of support and services, promoting a sense of community was a noticeable trend in all my research, this helps us relate through stories to encourage a healthy sense of self, compassion & empathy for people around us.</p>
          <ul className="informative-list">
            <h3>Inspiration I took from divergence</h3>
            <li>The music and art programs offered at Sick Kids to build self-awareness and increase self-esteem</li>
            <li>The tips suggested by Bright Horizons including verbal activities, open-ended group discussions, and exercising the imagination by inventing scenarios.</li>
            <li>The connection with the outdoors while building teamwork and problem-solving skills, in Forest Schools</li>
          </ul>
        </div>
      </section>
      <section className="project-info">
        <h2>Solution – Kindred Academy</h2>
        <div className="project-copy project-steps">
          <p>Kindred Academy offers after school and Saturday programs, counselling services, and online options offering curriculum would allow schools or families to implement the program in their own environment. Kindred Academy hope’s to encourage imagination and team building.</p>
          <p>The program will have a strong focus on outdoor learning, creative arts therapy and team building, creating a community that leads by example and shows children to not give up easily, to be resilient, determined and to see things through. </p>
          <p>Programs like this currently exist such as Forest Schools, Montessori Schools and many other private schools specializing creativity. The goal I have in this project is to make Kindred Academy as accessible for all families from different backgrounds as possible.</p>
          <p>The curriculum will offer 8 levels that grow with your child for them to explore themselves through group-based activities and self-care. The Academy’s classrooms will be a device-free zone, encouraging children to explore with their imagination, create together and think unconventionally.</p>
          <p>Kindred Academy will operate out of a location with plenty of land and close proximity to a forest or a natural area of exploration so that weather permitting caregivers can organize group activities outdoors and children can enjoy the many benefits of group outdoor time. </p>
          <p>The purpose of this program is to help children learn to lead adaptively with confidence. The curriculum will be developed by child development experts, scientists,  psychologists, creative arts therapists, music teachers, and nutritionists.  With a major focus on group learning and creative arts.</p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          {/* <Img fluid={props.data.imageEleven.childImageSharp.fluid} /> */}
        </div>
      </section>
      <section className="project-info">
        <h2>Future Considerations</h2>
        <div className="project-copy project-steps">
          <p>This case study requires more research and user interviews before making this a reality. I envision this to be a for-profit social enterprise with funding from federal and provincial governments and donations from organizations willing to invest in the next generation of the workforce. </p>
          <p>I would like to see this program be as accessible and inclusive as possible so ideally, this would be a free program for all however if that is not possible then I foresee a tuition cost based on what families can afford to ensure lower-income families equal opportunities. Funding would be the biggest factor when acting on next steps.</p>
          <p>Another important goal for Kindred Academy is creating an inclusive space in an environment that fully supports children with autism, Asperger’s syndrome, ADHD, and learning disabilities, such as dyslexia, dysgraphia and dyscalculia. For this, I would need to locate and interview children and parents who experience this first hand to better understand their needs. I also think this is important for all children to be exposed to all types of human experiences to promote empathy and compassion for everyone.</p>
          <p>Take a look at my presentation to see my research in further detail and my process coming up with my solution, Kindred Academy.</p>
          <a href="https://drive.google.com/file/d/1Z0o78m80WI0TZSK1xX2-Zu3RdLTSxMiW/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">view presentation</a>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <section className="project-links wicked-links">
      <div className="wrapper">
        <p className="category">UX | UI | user research | design | presentation</p>
        <p className="subtitle">Kindred Academy offers after school and Saturday programs to support youth into a more confident and compassionate future.</p>
        <div className="button-wrap">
          <a href="https://drive.google.com/file/d/1Z0o78m80WI0TZSK1xX2-Zu3RdLTSxMiW/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">view presentation</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Easy

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "wicked-problem/kindred-definition-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "wicked-problem/kindred-definition-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "wicked-problem/kindred-discovery-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "wicked-problem/kindred-discovery-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "wicked-problem/kindred-divergence-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "wicked-problem/kindred-divergence-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "wicked-problem/kindred-solution-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "wicked-problem/kindred-future-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "wicked-problem/kindred-solution-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "wicked-problem/kindred-solution-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEleven: file(relativePath: { eq: "wicked-problem/kindred-future-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "wicked-problem/kindred-future-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
