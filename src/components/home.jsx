import React, { Component } from 'react';
import '../stylesheets/home.css';
import * as firebase from 'firebase';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

import teamImg from '../assets/team.jpg';
import logo from '../assets/logo.png';

import {Pie} from 'react-chartjs-2';

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

    const incomeData = {
      datasets: [{
          data: [27000, 4500, 2000, 100, 600, 1070],
          backgroundColor: ['#FFCAB1', '#69A2B0', '#659157', '#A1C084', '#E05263', '#D3C1D2'],
      }],
      labels: [
          'CSRD Grant',
          'Donations',
          'Signs',
          'Dues',
          'Rebate GST',
          'Balance from 2018'
      ]
    };

    const expenseData = {
      datasets: [{
          data: [2500, 1000, 3580, 6500, 5100, 5000, 900, 300, 5000, 1000, 550, 2000, 1800, 40],
          backgroundColor: ['#FFCAB1', '#69A2B0', '#659157', '#A1C084', '#E05263', '#D3C1D2', '#222E50', '#007991', '#439A86', '#BCD8C1', '#E9D985', '#70161E', '#596F62', '#1C3144'],
      }],
      labels: [
          'Jump Kits',
          'Oxygen',
          'AED',
          'Radios/Pagers',
          'Interconnect/Repeater',
          'Insurance',
          'Radio/Pager License',
          'Bi-Weekly Training',
          'Certification Training',
          'Promotions',
          'Operational Expenses',
          'Training Payout',
          'Reflective Signs',
          'Service Charge'
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
                    <p className="lead">The North Shuswap First Responders has been a volunteer organization since 1995. Bringing together volunteers, for 23 years with the goal of serving our community with compassion, pride, and love. We are an organization dedicated to helping our neighbors, friends, and loved ones in their time of need. Do you have what it takes to be hands on in your community? Join us and see for yourself if being a First Responder is right for you!</p>
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
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center mt-4">
                <h2>Our Team</h2>
                <br/>
                <img src={teamImg} alt="teamPhoto" id="teamPhoto" className="img-fluid shadow"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center mt-4">
                <h3>Member of the Month</h3>
                <br/>
                <img src='' className="memberMonth shadow" alt="memberOfMonth" id="mvpPicture"/>
                <p className="lead" id="mvpName"></p>
                <p className="text-left" id="mvpDescription"></p>
              </div>
            </div>
            <div className="row pt-4 pb-4">
              <div className="col-12 pb-4">
                <h2>Our Statistics</h2>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3 pb-3 text-center">
              <h3>Our Income</h3>
              <br/>
                <div>
                  <Pie
                    data={incomeData}
                    width={300}
                    height={400}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              <h5>Total Income: $35270.00</h5>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3 pb-3 text-center">
              <h3>Our Expenses</h3>
              <br/>
                <div>
                  <Pie
                    data={expenseData}
                    width={300}
                    height={400}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              <h5>Total Expenses: $35270.00</h5>
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