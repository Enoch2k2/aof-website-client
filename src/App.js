import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-image clearfix">
          <NavBar />
          <div className="content">
            <h1>Welcome To The Architects Of Fate Website</h1>
            <p>Register today and join the family!</p>
          </div>
        </div>
          
        <div className="container">
          <div className="card no-border">
            <h1 className="center shadow">Website Coming Soon!!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus quibusdam alias unde possimus quas reprehenderit a tempora! Repellendus voluptatibus hic ab sint fugit laudantium eaque quaerat porro quasi at?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus quibusdam alias unde possimus quas reprehenderit a tempora! Repellendus voluptatibus hic ab sint fugit laudantium eaque quaerat porro quasi at?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus quibusdam alias unde possimus quas reprehenderit a tempora! Repellendus voluptatibus hic ab sint fugit laudantium eaque quaerat porro quasi at?</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
