import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/Content.css';
import naomiPic from '../images/bioimg.jpg';

class Bio extends Component {
  render() {
    return (
      <div id="bio" className={ `eight columns main-content ${window.innerWidth < window.innerHeight ? 'portrait' : ''}` }>
        <h4>Bio</h4>
        <article>
          <img id="bio-img" src={ naomiPic } alt="Naomi Haverland" />
          <p>Naomi Haverland is a painter living in Denver, Colorado. Born in 1981, she is a native to the state. She enjoys painting, making crafts with her sweet children and dogs, as well as participating in religious activities and watching reality tv shows. She draws inspiration for her artwork from children, Jesus, and garbage.  She works in many mediums, but primarily acrylics, oils, and chalk.</p>
          <p>She participates in the annual Denver Chalk art festival and has won three awards. In 2012 Naomi won the award for "Best Color", in 2015, "Most Whimsical", and in 2013, 2014, and 2015 she won the "People's Choice" award.</p>
          <p>Her most recognizable piece of art, “Hello, My Name is Awsum,” was recreated onto a 30 foot tall building and can be seen for blocks near the 16th street mall in downtown Denver.  You can often find Naomi's work displayed in galleries and restaurants in the Denver area, including a current exhibit of her prints at Sally Centigrade.</p>
          <p>Currently, Naomi is creating a series of portraits of children entitled “The New Masters of Dada” which explores the combination of realism and Dadaism.  She hopes to unveil the series in 2016.</p>
        </article>
        <br />
        <Link to='/' id='to-top'>Back to Menu</Link>
      </div>
    )
  }
}

export default Bio;