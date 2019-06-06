import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase';
import './stylesheets/global.css';
import * as serviceWorker from './serviceWorker';

import Home from './components/home.jsx';
import About from './components/about.jsx';
import Calendar from './components/calendar.jsx';
import Gallery from './components/gallery.jsx';
import Donations from './components/donations.jsx';
import Admin from './components/admin.jsx';
import Clinic from './components/clinic.jsx';

var config = {
  apiKey: "AIzaSyAp6tscsqBecmVV1R1i5mTmSCe4BBueoaU",
  authDomain: "nsfrs-98ae2.firebaseapp.com",
  databaseURL: "https://nsfrs-98ae2.firebaseio.com",
  projectId: "nsfrs-98ae2",
  storageBucket: "nsfrs-98ae2.appspot.com",
  messagingSenderId: "281881814471"
};
firebase.initializeApp(config);

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/calendar" component={Calendar}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/donations" component={Donations}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/clinic" component={Clinic}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
