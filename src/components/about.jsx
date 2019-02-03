import React, { Component } from 'react';
import '../stylesheets/about.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Navbar/>
        <h1>About Page</h1>
        <Footer/>
      </div>
    );
  }
}

export default About;