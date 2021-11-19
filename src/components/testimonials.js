import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
  { name: 'Jo Rodrigues', testimonial: "What first drew me to Janel was her emphasis on human-centred design. She didn’t disappoint. Her first step was to work with me to build clarity on what I wanted. She took the time to understand the vision and mission of my business, my clients’ needs and our shared values. I trusted her completely when it came to design and branding and she surpassed my expectations!" },
  { name: 'Faith @ Atria Coaching', testimonial: "Working with Janel was extremely beneficial for the branding and design aspect of my new business. Her creative process provided me with clarity and direction - ultimately helping me move forward with my vision. She took the time to understand me, my goals and aspirations for the business, and who I was serving and touching base frequently to ensure our objectives aligned." },
  { name: 'Tati @ MoonSign Supplies', testimonial: "Working with Janel has been amazing! I can’t recommend her enough. She was able to help problem-solve and trouble-shoot a lot of issues I was facing when developing my Services page. She is such a pleasure to work with. I definitely will be working with her again!" }
  //{ name: 'Marcel @ J.R & Associates', testimonial: "Janel was able to understand everything that was important to my business and designed a comprehensive website with a style that represents our brand.  Janel made the process so easy. She will be my first call for all my web and brand needs." },
  //{ name: 'Taylor @ GIRLS20', testimonial: "Our organization was looking for a designer to help us transform our website and Janel delivered an exceptional service and continues to offer assistance and advice. Janel is a fantastic graphic designer and web developer and always delivers above and beyond." },
  //{ name: 'Oliveira @ Kids Wish Network', testimonial: "Janel is an exceptional UX professional. She has the right balance between big picture thinking and attention to detail." },
  //{ name: 'Clare @ TNSF', testimonial: "Janel's design, ideas and expertise have been instrumental in making my site accessible and user friendly! I highly recommend Janel and her services, she was a pleasure to work with and I have total confidence in her!" }
];

const Testimonials = () => (
  <section className="testimonials">
    <Slider autoplay="8000ms">
      {slides.map((slide, index) => <div key={index}>
        <p>{slide.testimonial}</p>
        <h2>&mdash; {slide.name} &mdash;</h2>
      </div>)}
    </Slider>
  </section>
)


export default Testimonials