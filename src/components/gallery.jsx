import React, { Component } from 'react';
import '../stylesheets/gallery.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <Navbar/>
        <h1>Gallery Page</h1>
        <Footer/>
      </div>
    );
  }
}

export default Gallery;