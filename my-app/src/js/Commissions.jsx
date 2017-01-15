import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/Content.css';
import fourPortraits from '../images/comPortraits-min.jpg';

class Commissions extends Component {
  render() {
    return (
      <div id="com" className="eight columns main-content">
        <h4>Commissions</h4>
        <article>
          <div className="half-com" id="com-info">
            <p>
              If you wish to commission Naomi to create a custom portrait, please <Link to='contact'>contact</Link> her with your request. She prefers to paint from her own photographs, but may make exceptions if necessary.
            </p>
            <p>16"x20" one person portrait = $500</p>
          </div>
          <div className="half-com" id="com-photo">
            <img src={ fourPortraits } alt="4 portraits by Naomi Haverland" />
          </div>
        </article>
        <br />
        <a id="to-top" href="#top">Back to Top</a>
      </div>
    )
  }
}

export default Commissions;