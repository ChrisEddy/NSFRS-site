import React, { Component } from 'react';
import '../stylesheets/clinic.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Clinic extends Component {
  render() {
    return (
      <div className="Clinic">
        <Navbar/>
        <div className="row mt-4 ml-5">
            <div className="col-12 text-left">
                <h1>Clinic</h1>
            </div>
            <div className="row spacer">
                <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">

                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 p-2">
                    <div className="text-center mb-5">
                        <i className="fas fa-clinic-medical fa-4x"></i>
                    </div>
                    <h4>The North Shuswap Health Center is a community-run clinic that serves the areas of Scotch Creek, Lee Creek, Celista, Magna Bay, Anglemont, St. Ives and Seymour Arm. 
                    </h4>
                    <br/>
                    <h5>Located in Scotch Creek, the clinic is staffed by regular locum physicians and a public health nurse with whom you can make an appointment. 
                    </h5>
                    <br/>
                    <h5>The clinic also offers a variety of services including:</h5>
                    <ul>
                        <li>Liquid Nitrogen treatments</li>
                        <li>Flu shots</li>
                        <li>Holter Monitor</li>
                        <li>Manual Osteopathy</li>
                        <li>Dental Hygiene</li>
                        <li>Foot Care</li>
                        <li>Lab Services – Blood Collection and ECG</li>
                    </ul>
                    <br/>
                    <h3>Clinic Location:</h3>
                    <div className="text-center">
                        <div style={{"width": "100%"}}><iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%232%20%E2%80%93%203874%20Squilax%20Anglemont%20%20Rd+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a></iframe></div><br />
                    </div>
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

export default Clinic;