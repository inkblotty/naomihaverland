import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../css/Animations.css';
import '../css/Colors.css';
import '../css/Main.css';
import '../css/portrait.css';

import NavMenu from './NavMenu';

class App extends Component {
  render() {
    return (
      <div className={ `App row ${window.innerWidth < window.innerHeight ? 'portrait' : ''}` } id='top'>       
        <NavMenu />
          <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            { this.props.children ?
              React.cloneElement(this.props.children, {
                key: this.props.location.pathname
              })
              : '' }
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

// fade between gallery and main content smoothly

export default App;
