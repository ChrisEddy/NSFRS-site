import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">N.S.F.R.S</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About Us</Link>
              <Link to="/calendar" className="nav-item nav-link">Calendar</Link>
              <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
              <Link to="/donations" className="nav-item nav-link">Donations</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;