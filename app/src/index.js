import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import App from './js/App';
import Bio from './js/Bio';
import Commissions from './js/Commissions';
import Contact from './js/Contact';
import FourOhFour from './js/FourOhFour';
import Gallery from './js/Gallery';

function AppRouter() {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ App } >
        <Route path='bio' component={ Bio } />
        <Route path='commissions' component={ Commissions } />
        <Route path='contact' component={ Contact } />
      </Route>
      <Route path='gallery' component={ Gallery } >
        <IndexRoute to='portraits' />
        <Route path=':group' />
      </Route>
      <Route path="/**" component={ FourOhFour } />
    </Router>
  )
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
