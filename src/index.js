import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import NavbarWeb from './components/navbar';


const Routing = (
  <Router history={browserHistory}>
    <Route path="/" component={NavbarWeb} />
  </Router>
);

ReactDOM.render(Routing, document.getElementById('root'));
