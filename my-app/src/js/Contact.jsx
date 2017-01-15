import React, { Component } from 'react';

import '../css/Content.css';
import '../css/Contact.css';

import phone from '../images/whitephone.png';
import envelope from '../images/whiteemail.png';
import instagramLogo from '../images/whiteinstagram.png';
import flickrLogo from '../images/whiteflickr.png';
import facebookLogo from '../images/whitefacebook.png';

class Contact extends Component {
  render() {
    return (
      <div className="eight columns main-content">
        <h4>Contact Naomi</h4>
        <p>To inquire about commissions or artwork availability</p>
        <p>
          <img className="soc-icon" src={ phone } alt='phone' aria-role='presentation' />
          (303) 349-4833
        </p>
        <p>
          <img className="soc-icon" src={ envelope } alt="email icon" aria-role='presenation' />
          mnhaverland@msn.com
        </p>
        <p>
          <a href="https://instagram.com/naomihaverland/">
            <img className="soc-icon" src={ instagramLogo } alt="Naomi Haverland's instagram page" aria-role='presentation' />
            Instagram @naomihaverland
          </a>
        </p>
        <p>
          <a href="https://www.flickr.com/photos/131931192@N06/">
            <img className="soc-icon" src={ flickrLogo } alt="Naomi Haverland's flickr" aria-role='presentation' />
            Photostream
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/NaomiHaverland">
          <img className="soc-icon" src={ facebookLogo } alt="see Naomi Haverland art on facebook" aria-role='presentation' />
          Facebook Page
          </a>
        </p>
        <br />
        <a id="to-top" href="#top">Back to Top</a>
      </div>
    )
  }
}

export default Contact;