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
      if (!err) {
        window.localStorage.setItem('sessionToken', res.body.sessionToken)
        window.localStorage.setItem('currentUser', JSON.stringify(res.body))
      }

      this.setState({
        response: res.body
      })

    }
    api.login(params, callback)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <em>NOTE: Logging does not automatically rerender the DOM</em>
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
