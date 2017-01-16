import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TransitionWrapper extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName='fade'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        { this.props.children }
      </ReactCSSTransitionGroup>
    )
  }
}

export default TransitionWrapper;