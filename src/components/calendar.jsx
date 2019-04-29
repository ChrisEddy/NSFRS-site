import React, { Component } from 'react';
import '../stylesheets/calendar.css';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../events.js';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

const localizer = BigCalendar.momentLocalizer(moment) 

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        events: []
    };
}
  render() {
    return (
      <div className="Calendar">
        <Navbar/>
        <div id="calendarContainer">
          <BigCalendar
            localizer={localizer}
            events={events}
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