import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <nav className="clearfix">
        <span className="brand-logo">Architects Of Fate</span>
        <ul className="right">
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
