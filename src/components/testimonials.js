import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
  { name: 'Ashley Mac', testimonial: "I love working with this Janel. She is fast, efficient, and always communicates well throughout the process. Definitely highly recommend." },
  { name: 'Sarah Walker', testimonial: "Great social media posts. Thank you for making the project enjoyable. I'm looking forward to having you help on future porjects" },
  { name: 'Steph Ward', testimonial: "Janel was great - communicative, fast and produced great content! Thanks a bunch!" }
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