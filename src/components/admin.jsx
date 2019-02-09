import React, { Component } from 'react';
import '../stylesheets/admin.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <Navbar/>
        <div className="row">
            <div className="col-12 text-center">
            <form id="signIn">
                <h2 className="pb-5">Admin Login</h2>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">Enter your email</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Sign-In</button>
            </form>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Admin;