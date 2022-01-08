import React, { Component } from 'react';
import Picture2 from '../../../static/assets/images/about-me.jpg'


class About extends Component {
  render() {
    return (
      <div className='about-wrapper'>

          <div className='about-content'>
                <div className='left-column'>
                    <h1>IMG1</h1>
                </div>
                <div className='right-column'>
                    <div
                        className="img"
                        style={{
                            backgroundImage: `url(${Picture2})`
                        }}
                    />
                </div>
            </div>

          <div className='about-conatiner-content'>

          </div>

      </div>
    );
  }
}

export default About;
