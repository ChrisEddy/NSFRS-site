import React, { Component } from 'react';
import '../stylesheets/donations.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Donations extends Component {
  render() {
    return (
      <div className="Donations">
        <Navbar/>
        <h1>Donations Page</h1>
        <Footer/>
      </div>
    );
  }
}

export default Donations;