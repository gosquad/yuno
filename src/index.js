import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Router, Route } from 'react-router'
import Login from './components/Login'
import Signup from './components/Signup'
import Squad from './components/Squad'

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="squad" component={Squad} />
    </Route>
  </Router>
), document.getElementById('root'));
