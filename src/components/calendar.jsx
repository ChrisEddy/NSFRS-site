import React, { Component } from 'react';
import '../stylesheets/calendar.css';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import myEventsList from '../events.js';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

const localizer = BigCalendar.momentLocalizer(moment) 

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <Navbar/>
        <div id="calendarContainer">
          <BigCalendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Calendar;