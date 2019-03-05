import React, { Component } from 'react';
import '../stylesheets/gallery.css';
import '../stylesheets/hover-min.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

import flower from '../assets/flower.jpg';
import practice from '../assets/practice.jpg';
import practice2 from '../assets/practice2.jpg';
import practice3 from '../assets/practice3.jpg';

import newpic1 from '../assets/newpic1.jpg';
import newpic2 from '../assets/newpic2.jpg';
import newpic3 from '../assets/newpic3.jpg';
import newpic4 from '../assets/newpic4.jpg';
import newpic5 from '../assets/newpic5.jpg';
import newpic6 from '../assets/newpic6.jpg';
import newpic7 from '../assets/newpic7.jpg';
import newpic8 from '../assets/newpic8.jpg';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.openModal = this.openModal.bind(this);
}

  openModal(id){
    document.getElementById('modalPicture').src = document.getElementById(id).src;
  }

  render() {
    return (
      <div className="Gallery">
        <Navbar/>
        <br/>
        <h1 className="ml-5">Gallery</h1>
        <br/>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img1" onClick={() => this.openModal("img1")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={flower} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img2" onClick={() => this.openModal("img2")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={practice} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img3" onClick={() => this.openModal("img3")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={practice2} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img4" onClick={() => this.openModal("img4")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={practice3} alt="img"></img>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img5" onClick={() => this.openModal("img5")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic1} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img6" onClick={() => this.openModal("img6")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic2} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img7" onClick={() => this.openModal("img7")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic3} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img8" onClick={() => this.openModal("img8")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic4} alt="img"></img>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img9" onClick={() => this.openModal("img9")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic5} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img10" onClick={() => this.openModal("img10")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic6} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img11" onClick={() => this.openModal("img11")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic7} alt="img"></img>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
            <img id="img12" onClick={() => this.openModal("img12")} data-toggle="modal" data-target="#exampleModal" className="img-fluid shadow hvr-grow" src={newpic8} alt="img"></img>
          </div>
        </div>

        <br/>

        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Picture</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img id="modalPicture" src="" alt="modalPicture"/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default Gallery;