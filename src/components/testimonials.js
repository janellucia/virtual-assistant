import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
  // { name: 'Faith @ ATRIA COACHING', testimonial: "Lorem ipsum" },
  { name: 'Taylor @ GIRLS20', testimonial: "Our organization was looking for a designer to help us transform our website and Janel delivered an exceptional service and continues to offer assistance and advice. Janel is a fantastic graphic designer and web developer and always delivers above and beyond." },
  { name: 'Marcel @ J.R & Associates', testimonial: "Janel was able to understand everything that was important to my business and designed a comprehensive website with a style that represents our brand.  Janel made the process so easy. She will be my first call for all my web and brand needs." },
  { name: 'Oliveira @ Kids Wish Network', testimonial: "Janel is an exceptional UX professional. She has the right balance between big picture thinking and attention to detail." },
  { name: 'Clare @ TNSF', testimonial: "Janel's design, ideas and expertise have been instrumental in making my site accessible and user friendly! I highly recommend Janel and her services, she was a pleasure to work with and I have total confidence in her!" }
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