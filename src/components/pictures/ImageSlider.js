import React, { useState } from 'react';
import { SliderData } from './SliderData';


// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

// fontawesome.library.add(faCheckSquare, faCoffee);

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <button icon='check-square' className='left-arrow' onClick={prevSlide}>Back</button>
      <button icon='coffee' className='right-arrow' onClick={nextSlide}>Next</button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;