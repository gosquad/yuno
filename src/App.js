import React, { Component } from 'react';

import Navigation from './components/Navigation';

let currentUser = JSON.parse(window.localStorage.getItem('currentUser'))

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser : currentUser
    }
  }

  componentWillMount() {
    // Set default environment if it hasn't been set already
    window.localStorage.setItem('environment', 'local')
  }

  handleLogout(event) {
    window.localStorage.removeItem('currentUser')
    window.localStorage.removeItem('sessionToken')
    this.setState({
      currentUser: null
    })
  }

  handleEnvironmentChange(event) {
    let newEnvironment = event.target.value
    window.confirm('Are you sure you would like to change environment to: ' +  newEnvironment)
    window.localStorage.setItem('environment', newEnvironment)
  }

  render() {
    return (
      <div>
        <h1>Squad Lab</h1>

        <span>API Environment </span>
        <select onChange={this.handleEnvironmentChange.bind(this)}>
          <option value='local'>Local</option>
          <option value='staging'>Staging</option>
          <option value='production'>Production</option>
        </select>

        <p><b>Current User:</b> {this.state.currentUser ? this.state.currentUser.username : null}</p>
        { this.state.currentUser ? 
          <button onClick={this.handleLogout.bind(this)}>Logout</button> 
          : null 
        }
        <p>Small components to test out the API</p>
        <Navigation />
        <hr/>
        { this.props.children }
      </div>
    );
  }


}
