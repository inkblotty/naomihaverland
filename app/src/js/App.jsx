import React, { Component } from 'react';

import '../css/Animations.css';
import '../css/Colors.css';
import '../css/Main.css';
import '../css/portrait.css';

import NavMenu from './NavMenu';
import TransitionWrapper from './TransitionWrapper';

class App extends Component {
  render() {
    return (
      <div className={ `App row ${window.innerWidth < window.innerHeight ? 'portrait' : ''}` } id='top'>       
        <NavMenu />
          <TransitionWrapper>
            { this.props.children ?
              React.cloneElement(this.props.children, {
                key: this.props.location.pathname
              })
              : '' }
          </TransitionWrapper>
      </div>
    );
  }
}

export default App;
