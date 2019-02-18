import React, { Component } from 'react';
import '../stylesheets/calendar.css';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import * as firebase from 'firebase';

import myEventsList from '../events.js';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

const localizer = BigCalendar.momentLocalizer(moment) 

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        events: []
    };
    this.loadEvents = this.loadEvents.bind(this);
}

  componentDidMount(){
    console.log(myEventsList[0])
    this.loadEvents();
  }

  loadEvents(){
    const db = firebase.firestore();
    var docRef = db.collection("data").doc("3dxcxftejADMxR9xFLJq");
    console.log('grabbing events')

    docRef.get().then(function(doc) {
        if (doc.exists) {
            const events = doc.data().json;
            console.log(JSON.stringify(events, null, 2));
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

  render() {
    return (
      <div className="Calendar">
        <Navbar/>
        <div id="calendarContainer">
          <BigCalendar
            localizer={localizer}
            events={this.state.events}
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