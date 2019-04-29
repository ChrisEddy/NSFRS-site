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
          <div className="row mt-3">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
              <h5>If you would like to support the North Shuswap First Responders Society, you can make donations to our email address.</h5>
              <br/>
              <p>Donations go towards equipment used on calls, such as medical supplies, oxygen tanks, and radios. Donations also help with training costs, each certified First Responder goes through standard red cross training, and we have three trainers on our team that keep us up to date and refreshed with our learning. </p>
              <br/>
              <div className="text-center">
                <a href="mailto: email@email.com"><h3>nsfrtreas@gmail.com</h3></a>
                <br/>
                <i className="fas fa-hand-holding-usd fa-4x"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
              <h4>Are you looking for to purchase reflective house numbers and signs?</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
              <h4>Are you looking to borrow or rent equipment?</h4>
              <p>If you are in need of medical equipment, please contact Don Devine, leave your information with him and we will do our best to provide you with what you need free of cost.</p>
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