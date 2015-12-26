import React from 'react'
import { Link } from 'react-router'



export default class Navigation extends React.Component {
  render() {
    return (
      <div className='lab-navigation'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Create User</Link>
          </li>
          <li>
            <Link to='/squad'>Create/Join Squad</Link>
          </li>
          <li>
            <Link to='#'>Polls</Link>
          </li>
          <li>
            <Link to='#'>Lists</Link>
          </li>
          <li>
            <Link to='#'>Events</Link>
          </li>
        </ul>
      </div>
    )
  }
}
