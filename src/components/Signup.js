import React from 'react'
import * as api from '../api'

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  handleSignup(event) {

    event.preventDefault()
    let username = event.target.username.value
    let email = event.target.email.value
    let password = event.target.password.value
    let confirm = event.target.confirm.value
    let firstName = event.target.firstName.value
    let lastName = event.target.lastName.value
    
    if (password !== confirm) {
      this.setState({
        error: "Passwords don't match"
      })
    }

    let params = {
      username, 
      password,
      email,
      firstName,
      lastName,
    }

    let callback = (err, res) => {
      this.setState({
        response: res.body
      })
    }

    api.signup(params, callback)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignup}>
          First Name:
          <input type="text" name="firstName"/>
          <br/>
          Last Name:
          <input type="text" name="lastName"/>
          <br/>
          Username:
          <input type="text" name="username"/>
          <br/>
          Email:
          <input type="text" name="email"/>
          <br/>
          Password:
          <input type="password" name="password"/>
          <br/>
          Confirm:
          <input type="password" name="confirm"/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

