import React, { Component } from 'react';
import '../stylesheets/home.css';
import * as firebase from 'firebase';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

import teamImg from '../assets/team.jpg';
import logo from '../assets/logo.png';

import {Pie} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

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

    const pieData = {
      datasets: [{
          data: [10, 20, 40],
          backgroundColor: ['red', 'green', 'yellow'],
      }],
      labels: [
          'Red',
          'Green',
          'Yellow'
      ]
    };

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
            <div className="row pb-5 pt-5" id="firstRow">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Our Story</h2>
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Our Values</h2>
                    <div className="row">
                      <div className="col-6 pt-2">
                        <ul>
                          <li><p className="lead">Passion</p></li>
                          <li><p className="lead">Teamwork</p></li>
                          <li><p className="lead">Determination</p></li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li><p className="lead">Passion</p></li>
                          <li><p className="lead">Teamwork</p></li>
                          <li><p className="lead">Determination</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5 pb-5" id="secondRow">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                <h2>Our Team</h2>
                <br/>
                <img src={teamImg} alt="teamPhoto" id="teamPhoto" className="img-fluid shadow"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                <h3>Member of the Month</h3>
                <br/>
                <img src='' className="memberMonth shadow" alt="memberOfMonth" id="mvpPicture"/>
                <p className="lead" id="mvpName"></p>
                <p id="mvpDescription"></p>
              </div>
            </div>
            <div className="row pt-4 pb-4">
              <div className="col-12 pb-4">
                <h2>Our Statistics</h2>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3 pb-3">
                <Pie
                  data={pieData}
                  width={300}
                  height={300}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3 pb-3">
                <Doughnut
                  data={pieData}
                  width={300}
                  height={300}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3 pb-3">
                <Bar
                  data={pieData}
                  width={300}
                  height={300}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
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