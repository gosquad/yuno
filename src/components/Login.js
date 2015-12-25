import React from 'react'
import Response from './Response'
import * as api from '../api'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: null
    }
  }

  handleLogin(event) {
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value
    let params = { username, password }
    let callback = (err, res) => {
      this.setState({
        response: res.body
      })
    }
    api.login(params, callback)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin.bind(this)}>
          Username:
          <input type="text" name="username"/>
          <br/>
          Password:
          <input type="password" name="password"/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
          <br/>
        <Response response={this.state.response}/>
      </div>
    )
  }
}
