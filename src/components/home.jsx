import React, { Component } from 'react';
import '../stylesheets/home.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar/>
        <h1>Home Page</h1>
        <Footer/>
      </div>
    );
  }
}

export default Home;