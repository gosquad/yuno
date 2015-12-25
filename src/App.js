import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { Link } from 'react-router'
import * as api from './api'

import Login from './components/Login';

let currentUser = null

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Squad Lab</h1>
        <p>Small components to test out the API</p>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>
        <hr/>
        { this.props.children }
      </div>
    );
  }


}
