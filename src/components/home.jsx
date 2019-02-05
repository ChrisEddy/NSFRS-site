import React, { Component } from 'react';
import '../stylesheets/home.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

import memberOfMonth from '../assets/me.jpg';
import teamImg from '../assets/team.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar/>
        <div className="row">
          <div className="col-12 pr-0 pl-0">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">North Shuswap First Responders Society</h1>
                <p className="lead">We support the emergency medical assistant first responders who promote, care for, and preserve the general health and well-being of residents of the north Shuswap by providing emergency medical health services, when and where needed.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <img src={teamImg} alt="teamPhoto" id="teamPhoto" className="img-fluid"/>
                    <h5>Our Team</h5>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <h2>Mission Statements</h2>
                    <br/>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h4>Kindness</h4>
                        <ul>
                          <li>Hello there</li>
                          <li>Be great people</li>
                          <li>Do your thing</li>
                          <li>Live a good life</li>
                          <li>Everything will be ok</li>
                          <li>Try a little harder</li>
                          <li>Tough it out and you will be good</li>
                          <li>Love your people</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h4>Movement</h4>
                        <ul>
                          <li>Be yourself</li>
                          <li>Let go of the past</li>
                          <li>Try a little harder</li>
                          <li>Tough it out and you will be good</li>
                          <li>Love your people</li>
                          <li>Try a little harder</li>
                          <li>Tough it out and you will be good</li>
                          <li>Love your people</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4 text-center">

              </div>
              <div className="col-4 text-center">

              </div>
              <div className="col-4 text-center">
                <h3>Member of the Month</h3>
                <br/>
                <img src={memberOfMonth} className="memberMonth" alt="memberOfMonth"/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;