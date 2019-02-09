import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../stylesheets/admin.css';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userPicture: '',
            userName: '',
            userDescription: ''
        };
        this.signIn = this.signIn.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.uploadPicture = this.uploadPicture.bind(this);
    }

    componentDidMount(){
        var config = {
            apiKey: "AIzaSyAp6tscsqBecmVV1R1i5mTmSCe4BBueoaU",
            authDomain: "nsfrs-98ae2.firebaseapp.com",
            databaseURL: "https://nsfrs-98ae2.firebaseio.com",
            projectId: "nsfrs-98ae2",
            storageBucket: "nsfrs-98ae2.appspot.com",
            messagingSenderId: "281881814471"
        };
        firebase.initializeApp(config);

        document.getElementById('loginView').hidden = true;
        document.getElementById('adminView').hidden = false;
    }

    onChangeEmail(event){
        this.setState({email: event.target.value});
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
    }

    signIn(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
            console.log('Login Success');
            document.getElementById('loginView').hidden = true;
        })   
        .catch(function(error) {
            console.log(error.code);
            console.log(error.message);
        });
    }

    uploadPicture(){
        const userPicture = document.getElementById('userPicture').files[0];
        var storageRef = firebase.storage().ref();
        var ref = storageRef.child('mvpPicture');
        ref.put(userPicture);
    }

  render() {
    return (
        <div className="Admin">
            <Navbar/>
            <div className="row" id="loginView">
                <div className="col-12 text-center">
                <form onSubmit={this.signIn} id="signIn">
                    <h2 className="pb-5">Admin Login</h2>
                    <div className="form-group">
                        <label>Email address</label>
                        <input onChange={this.onChangeEmail} value={this.state.email} type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email"/>
                        <small id="email" className="form-text text-muted">Enter your email</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.onChangePassword} value={this.state.password} type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign-In</button>
                </form>
                </div>
            </div>
            <div className="row" id="adminView">
                <div className="col-12 text-center">
                    <form>
                        <h2 className="pb-5">Create New Employee of The Month</h2>
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input onChange={this.uploadPicture} type="file" className="custom-file-input" id="userPicture"/>
                                <label className="custom-file-label">Upload Picture</label>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Name of person"/>
                        </div>
                        <p>Description</p>
                        <div className="input-group">
                            <textarea className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Save</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default Admin;