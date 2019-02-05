import React, { Component } from 'react';
import '../stylesheets/about.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Navbar/>
        <div className="row">
          <div className="col-12 pt-5 pl-5 pb-4">
            <h1>About Us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-center">
            <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPerson mb-3" alt="aboutPerson"/>
            <h4>George Lucas</h4>
            <h5>Minister of Finance</h5>
          </div>
          <div className="col-4 text-center">
            <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPerson mb-3" alt="aboutPerson"/>
            <h4>George Lucas</h4>
            <h5>Minister of Finance</h5>
          </div>
          <div className="col-4 text-center">
            <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPerson mb-3" alt="aboutPerson"/>
            <h4>George Lucas</h4>
            <h5>Minister of Finance</h5>
          </div>
        </div>
        <div className="row pt-5 pl-4">
          <div className="col-12">
            <h2>Who We Work With</h2>
          </div>
        </div>
        <div className="row pt-4 pl-4 pb-5">
          <div className="col-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;