import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="center">Hello World!</h1>
      </div>
    );
  }
}

export default App;
