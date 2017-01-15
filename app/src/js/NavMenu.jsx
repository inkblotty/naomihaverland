import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/Nav.css';
import arrowDown from '../images/arrow.png';

class NavMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showGalleryMenu: false,
    }
  }

  toggleGalleryMenu = (e) => {
    e.preventDefault();

    this.setState({
      showGalleryMenu: !this.state.showGalleryMenu,
    });
  }

  render() {
    return (
      <nav className="four columns navigation-primary">
          <h1><Link to='/' className='u-unstyled-link'>Naomi Haverland</Link></h1>
          <hr/>
          <ul id="nav">
            <li className="menu-column" id="gal">
              <a className="tab" onClick={ this.toggleGalleryMenu } href='#'>
                Galleries
                <img id="arrowdown" src={ arrowDown } alt='expand this menu' />
              </a>
              <div id="gal-sub" className='tab-content submenu'>
                <ul id='submenu' className={ this.state.showGalleryMenu ? 'is-open' : '' }>
                  <li>
                    <Link to='gallery/portraits'>Portraits</Link>
                  </li>
                  <li>
                    <Link to='gallery/chalk'>Chalk Art</Link>
                  </li>
                  <li>
                    <Link to='gallery/misc'>Other Work</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to='bio'>Bio</Link>
            </li>
            <li>
              <Link to='commissions'>Commissions</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
          <footer>
            <small>2017  |  <a href="http://inkblotty.github.io">Katie Foster</a></small>
          </footer>
      </nav>
    )
  }
}

export default NavMenu;