import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <nav className="container clearfix">
        <span className="brand-logo shadow">Architects Of Fate</span>
        <ul className="right">
          <li className="shadow">Login</li>
          <li className="shadow">Signup</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
