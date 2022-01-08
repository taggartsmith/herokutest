import React, { Component } from 'react';
import ImageSlider from '../pictures/ImageSlider';
import { SliderData } from '../pictures/SliderData'


class Blog extends Component {
  render() {
    return (
      <div className='blog-wrapper'>

        <ImageSlider slides={SliderData} />;
        


      </div>
    );
  }
}

export default Blog;
