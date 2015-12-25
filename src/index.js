import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Router, Route } from 'react-router'
import Login from './components/Login'
import Signup from './components/Signup'

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('root'));
