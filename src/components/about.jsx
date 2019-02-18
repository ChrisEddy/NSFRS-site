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
          <div className="col-12 pl-4 pt-5">
            <h1>About Us</h1>
          </div>
          <div className="col-12 pt-5 pb-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lead">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <p className="lead">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="lead">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <p className="lead">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 pl-4">
          <div className="col-12">
            <h2>Our Team</h2>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center pb-2 pt-2">
                <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPerson mb-3" alt="aboutPerson"/>
                <h4>George Lucas</h4>
                <h5>Minister of Finance</h5>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center pb-2 pt-2">
                <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPerson mb-3" alt="aboutPerson"/>
                <h4>George Lucas</h4>
                <h5>Minister of Finance</h5>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center pb-2 pt-2">
                <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPerson mb-3" alt="aboutPerson"/>
                <h4>George Lucas</h4>
                <h5>Minister of Finance</h5>
              </div>
            </div>
          </div>
          <div className="col-12 pt-5 pb-5">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center pb-2 pt-2">
                <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPersonMini mb-3" alt="aboutPerson"/>
                <h4>George Lucas</h4>
                <h5>Minister of Finance</h5>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center pb-2 pt-2">
                <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPersonMini  mb-3" alt="aboutPerson"/>
                <h4>George Lucas</h4>
                <h5>Minister of Finance</h5>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center pb-2 pt-2">
                <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPersonMini  mb-3" alt="aboutPerson"/>
                <h4>George Lucas</h4>
                <h5>Minister of Finance</h5>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center pb-2 pt-2">
                <img src="https://www.geek.com/wp-content/uploads/2010/01/GeorgeLucas-350x352.jpg" className="aboutPersonMini  mb-3" alt="aboutPerson"/>
                <h4>George Lucas</h4>
                <h5>Minister of Finance</h5>
              </div>
            </div>  
          </div>
        </div>
        <div className="row pt-5 pl-4">
          <div className="col-12">
            <h2>Who We Work With</h2>
          </div>
        </div>
        <div className="row pt-4 pl-4 pb-5">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
        </div>
        <div className="row pt-4 pl-4 pb-5">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb8HeRplFM5Ly-V2BqE6bAkRBCufWh-Fih4Fpatvi-eN7Z3iK" alt="whoWeWork"/>
            <p>Visit ~Company~</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
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