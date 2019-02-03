import React, { Component } from 'react';
import '../stylesheets/calendar.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <Navbar/>
        <h1>Calendar Page</h1>
        <Footer/>
      </div>
    );
  }
}

export default Calendar;