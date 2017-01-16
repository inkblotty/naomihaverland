import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import App from './js/App';
import Bio from './js/Bio';
import Commissions from './js/Commissions';
import Contact from './js/Contact';
import FourOhFour from './js/FourOhFour';
import Gallery from './js/Gallery';
import TransitionWrapper from './js/TransitionWrapper';

function AppRouter() {
  return (
    <Router history={ browserHistory }>
      <TransitionWrapper>
        <Route path="/" component={ App } key='app-route'>
          <Route path='bio' component={ Bio } />
          <Route path='commissions' component={ Commissions } />
          <Route path='contact' component={ Contact } />
        </Route>
        <Route path='gallery' component={ Gallery } key='gallery-route'>
          <IndexRoute to='portraits' />
          <Route path=':group' />
        </Route>
        <Route path="/**" component={ FourOhFour } key='four-oh-four-route' />
      </TransitionWrapper>
    </Router>
  )
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
