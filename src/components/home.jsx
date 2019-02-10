import React, { Component } from 'react';
import '../stylesheets/home.css';
import * as firebase from 'firebase';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

import teamImg from '../assets/team.jpg';
import logo from '../assets/logo.png';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mvpPicture: '',
        mvpName: '',
        mvpDescription: ''
    };
  }

  componentDidMount(){
    const storage = firebase.storage();
    const mvpPictureRef = storage.ref('mvpPicture');
    mvpPictureRef.getDownloadURL().then(function(url) {
      document.getElementById('mvpPicture').src = url;
    })

    const db = firebase.firestore();
    var docRef = db.collection("data").doc("3dxcxftejADMxR9xFLJq");

    docRef.get().then(function(doc) {
        if (doc.exists) {
            document.getElementById('mvpName').innerText = doc.data().mvpName;
            document.getElementById('mvpDescription').innerText = doc.data().mvpDescription;
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  render() {
    return (
      <div className="Home">
        <Navbar/>
        <div className="row">
          <div className="col-12 pr-0 pl-0">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <div className="text-center">
                  <img src={logo} alt="logo" id="headerLogo"/>
                </div>
                <div id="headerBackground">
                  <h1 className="display-4">North Shuswap First Responders Society</h1>
                  <p className="lead">We support the emergency medical assistant first responders who promote, care for, and preserve the general health and well-being of residents of the north Shuswap by providing emergency medical health services, when and where needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" id="firstRow">
              <div className="col-12">
                <h2>Our Mission Statement</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <br/>
                    <ul>
                      <li><h4>Power</h4></li>
                      <li><h4>Kindness</h4></li>
                      <li><h4>Hello</h4></li>
                      <li><h4>Courage</h4></li>
                      <li><h4>Get that shit</h4></li>
                      <li><h4>Get that shit</h4></li>
                    </ul>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h4>Our Story</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h4>Our Team</h4>
                        <div className="text-center">
                          <img src={teamImg} alt="teamPhoto" id="teamPhoto" className="img-fluid"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5" id="secondRow">
              <div className="col-4 text-center">

              </div>
              <div className="col-4 text-center">
                <h3>Member of the Month</h3>
                <br/>
                <img src='' className="memberMonth" alt="memberOfMonth" id="mvpPicture"/>
                <p id="mvpName"></p>
                <p id="mvpDescription"></p>
              </div>
              <div className="col-4 text-center">

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