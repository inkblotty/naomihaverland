import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../css/Colors.css';
import '../css/Main.css';
import '../css/App.css';
import '../css/Animations.css';

import NavMenu from './NavMenu';

class App extends Component {
  render() {
    return (
      <div className='App row' id='top'>       
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

export default App;
