import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

import '../css/Gallery.css';

const images = {
  portraits: [
    { url: '../images/portraits/1Clives_pencil_trick.jpg', description: 'Clive\'s Pencil Trick, Portrait of Naomi\'s neighbor, Clive, with a pencil in his nose' },
    { url: '../images/portraits/1Ring_Pop.jpg', description: 'Ring Pop, Portrait of Naomi\'s daughter with ring pop on finger' }
  ],
  chalk: [],
  misc: []
}

class Gallery extends Component {
  render() {
    let currImages = images[this.props.params.group];

    var sliderSettings = {
        arrows: true,
        customPaging: function(i) {
          return <a><img src={ currImages[i+1].url } alt={ currImages[i+1].description }/></a>
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    currImages = currImages.map((img, i) => {
      return (
        <div key={ `slider-img-${i}` }>
          <img src={ img.url } alt={ img.description } />
        </div>
      )
    })

    return (
      <div className='gallery'>
        <nav className='gallery-nav'>
          <div>
            <span className='u-sr-only'>Naomi Haverland's </span>Gallery<span className='u-sr-only'> of work</span>
          </div>
          <div className='center-nav'>
            <Link to='/gallery/portraits'>Portraits</Link>
            <Link to='/gallery/chalk'>Chalk Art</Link>
            <Link to='/gallery/misc'>Other work</Link>
          </div>
          <Link to='/'>Go back</Link>
        </nav>
        <Slider {...sliderSettings}>
          { currImages }
        </Slider>
      </div>
    )
  }
}

export default Gallery;