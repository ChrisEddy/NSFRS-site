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
            // document.getElementById('mvpName').innerText = doc.data().mvpName;
            // document.getElementById('mvpDescription').innerText = doc.data().mvpDescription;
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
                    <div className="p-2">
                      <p>
                        The North Shuswap First Responders has been a volunteer organization since 1995. Bringing together volunteers, for 23 years with the goal of serving our community with compassion, pride, and love. We are an organization dedicated to helping our neighbors, friends, and loved ones in their time of need. With around the clock dispatchers, always listening for a call, and a group of our First Responders always on hand, we are prepared to attend any medical scenario on the North Shuswap.
                      </p>
                      <p>
                        All of our certified First Responders have standard EMR training, and meet twice monthly to continue to learn, practice, and prepare for how we can best help you in a crisis. If you would like to be a part of this first hand medical training, join us at a practice, the first and third Thursday of every month, at the Celista fire hall, at 7 pm. We look forward to continue to grow and work within our community. 
                      </p> 
                      <p>
                        Thank You,
                        The NSFR
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>News</h2>
                    <div className="p-2">
                      <p>
                        Due to a change in BCEHS (BC Emergency Health Services) protocol, our North Shore communities have experienced a decline in the number of times our First Responders are dispatched to emergency calls. Unfortunately for our communities, this means we are no longer being called to assist you in every case. We need your help to correct this situation.  
                        If you have called 911 requesting an ambulance, and if NSFR (North Shuswap First Responders) does not arrive before the ambulance, we would like to know.
                      </p>
                      <p>
                        Please contact Don Devine at <a href="tel:250-572-7735">250-572-7735</a> or email him at <a href = "mailto: donedevine@gmail.com">donedevine@gmail.com </a>
                        and be assured any information shared with us will remain confidential!
                        We want to be there for you! Thank you for helping us to keep our community safe.
                      </p>
                      <p>
                        Together, 'We Make a Difference.'
                      </p>
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
                <p className="lead" id="mvpName">
                  Don Devine
                </p>
                <p className="text-left" id="mvpDescription">
                  Don has lived in the North Shuswap for four years, and has been a First Responder, dispatcher, and vice president of our Society for three years.
                  Before coming to the Shuswap, Don was a paramedic in Vancouver and Vernon for 32 years, before officially retiring in 2004. He also worked for CUPE for 17 years, as a National Representative!
                  Don started volunteering with the North Shuswap First Responders as a way to give back to the community for their welcoming and ongoing support.
                </p>
                <p>
                  Contact Don at: <a href="tel:250-572-7735">250-572-7735</a> or <a href = "mailto: donedevine@gmail.com">donedevine@gmail.com </a>
                </p>
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