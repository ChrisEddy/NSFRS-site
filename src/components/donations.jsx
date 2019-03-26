import React, { Component } from 'react';
import '../stylesheets/donations.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Donations extends Component {
  render() {
    return (
      <div className="Donations">
        <Navbar/>
        <div className="spacer">
          <div className="row mt-4 ml-5">
            <div className="col-12 text-left">
              <h1>Donations</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h5>If you would like to support the North Shuswap First Responders Society, you can make donations to our email address.</h5>
              <br/>
              <a href="mailto: email@email.com"><h3>Email@Email.com</h3></a>
              <br/>
              <i className="fas fa-hand-holding-usd fa-3x"></i>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-center p-5">
              <h4>Are you looking for to purchase reflective house numbers and signs?</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-center p-5">
              <h4>Are you looking to borrow or rent equipment?</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Donations;