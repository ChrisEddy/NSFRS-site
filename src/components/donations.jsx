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
          <div className="row mt-4 ml-4">
            <div className="col-12 text-left">
              <h1>Donations</h1>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
              <h4>If you would like to support the North Shuswap First Responders Society, you can make donations to our email address.</h4>
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
          <div className="row mt-2">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
              <h4>Are you looking for to purchase reflective house numbers and signs?</h4>
              <br/>
              <p>We who are fortuante enough to live or at least spend time in the North Shuswap know that a few inconviences are worth the joy our lifestyle provides.</p>
              <p>
                Quick response to an emergency of any kind is essential to a good outcome. In a medical emergency of any kind is essential to a good outcome.
              </p>
              <p>
                In a medical emergency the North Shuswap First Resonders will typically be the first on the scene. To help get the Response team to your location, it is necessary to be able to find you or your guests.
              </p>
              <ol>
                <li>Have the address visible in a prominent location within your dwelling (People get flustered and can forget the basics).</li>
                <li>Have the address clearly marked at the street entrance to your property.</li>
                <li>If possible, assign a person to direct the team to the location of your emergency.</li>
              </ol>
              <p>
                You can order Green and White reflective address signs made for your location from the North Shuswap First Responders by visiting us at a number of summer events or by contacting Margaret Needham at <a href="tel:250-679-2334">250-679-2334</a> or <a href = "mailto: ma.needham49@gmail.com">ma.needham49@gmail.com </a>
              </p>
              <p>
                The cost is $30.00 per sign.
              </p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
              <h4>Are you looking to borrow or rent equipment?</h4>
              <p>If you are in need of medical equipment, please contact Don Devine, leave your information with him and we will do our best to provide you with what you need free of cost.</p>
              <h5>Don Devine`s contact info:</h5>
              <p>
                <a href="tel:250-572-7735">250-572-7735</a> or <a href = "mailto: donedevine@gmail.com">donedevine@gmail.com </a>
              </p>
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