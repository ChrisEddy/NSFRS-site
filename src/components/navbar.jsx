import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.changeActive = this.changeActive.bind(this);
  }

  componentDidMount(){
    const url = window.location;
    console.log(url.pathname);
    switch(url.pathname){
      case '/':
      document.getElementById('homeLink').style.color = '#fff900';
      break;
      case '/about':
      document.getElementById('aboutLink').style.color = '#fff900';
      break;
      case '/calendar':
      document.getElementById('calendarLink').style.color = '#fff900';
      break;
      case '/gallery':
      document.getElementById('galleryLink').style.color = '#fff900';
      break;
      case '/donations':
      document.getElementById('donationsLink').style.color = '#fff900';
      break;
      case '/clinic':
      document.getElementById('clinicLink').style.color = '#fff900';
      break;
      default:
      break;
    }
  }

  changeActive(id){
    document.getElementById(id).style.fontSize = 'black !important';
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">N.S.F.R.S</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link" onClick={() => this.changeActive('homeLink')}><span id="homeLink">Home</span></Link>
              <Link to="/about" className="nav-item nav-link" onClick={() => this.changeActive('aboutLink')}><span id="aboutLink">About Us</span></Link>
              <Link to="/calendar" className="nav-item nav-link" onClick={() => this.changeActive('calendarLink')}><span id="calendarLink">Calendar</span></Link>
              <Link to="/gallery" className="nav-item nav-link" onClick={() => this.changeActive('galleryLink')}><span id="galleryLink">Gallery</span></Link>
              <Link to="/donations" className="nav-item nav-link" onClick={() => this.changeActive('donationsLink')}><span id="donationsLink">Donations</span></Link>
              <Link to="/clinic" className="nav-item nav-link" onClick={() => this.changeActive('clinicLink')}><span id="clinicLink">Clinic</span></Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;