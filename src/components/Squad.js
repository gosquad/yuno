import React from 'react'
import * as api from '../api'

export default class Squad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: null
    }
  }

  handleLogin(event) {
    event.preventDefault()
    let name = event.target.username.value
    let description = event.target.password.value
    let params = { username, password }
    let callback = (err, res) => {
      window.localStorage.setItem('sessionToken', res.body.sessionToken)
      window.localStorage.setItem('currentUser', JSON.stringify(res.body))
      this.setState({
        response: res.body
      })
    }
    api.login(params, callback)
  }

  render() {
    return (
      <div>
        <h1>Create Squad</h1>
        <em>Creates a Squad and automatically joins it</em>
        <form onSubmit={this.handleLogin.bind(this)}>
          Squad Name:
          <input type="text" name="name"/>
          <br/>
          Description (optional):
          <input type="text" name="description"/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
        <br/>

        <h1>Join a Squad</h1>
        <em>Need batch loading before this can work</em>
        <form>
        { /*<select value="B">
            <option value="A">Apple</option>
          </select> */ }
        </form>

      </div>
    )
  }
}

