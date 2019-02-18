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
            userDescription: '',
            events: ''
        };
        this.signIn = this.signIn.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.uploadPicture = this.uploadPicture.bind(this);
        this.saveMVP = this.saveMVP.bind(this);
        this.loadEvents = this.loadEvents.bind(this);
    }

    componentDidMount(){
        document.getElementById('loginView').hidden = false;
        document.getElementById('adminView').hidden = true;
        this.loadEvents();
    }

    onChangeEmail(event){
        this.setState({email: event.target.value});
        document.getElementById('email').style.borderColor = '#ced4da';
        document.getElementById('password').style.borderColor = '#ced4da';
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
        document.getElementById('email').style.borderColor = '#ced4da';
        document.getElementById('password').style.borderColor = '#ced4da';
    }

    onChangeName(event){
        this.setState({userName: event.target.value});
    }

    onChangeDescription(event){
        this.setState({userDescription: event.target.value});
    }

    signIn(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
            document.getElementById('loginView').hidden = true;
            document.getElementById('adminView').hidden = false;
        })   
        .catch(function(error) {
            document.getElementById('email').style.borderColor = 'red';
            document.getElementById('password').style.borderColor = 'red';
        });
    }

    uploadPicture(){
        const uploadPictureInput = document.getElementById('uploadPictureInput');
        const uploadPictureLabel = document.getElementById('uploadPictureLabel');
        uploadPictureLabel.innerText = uploadPictureInput.files[0].name;
    }

    loadEvents(){
        const db = firebase.firestore();
        var docRef = db.collection("data").doc("3dxcxftejADMxR9xFLJq");
        console.log('grabbing events')
    
        docRef.get().then(function(doc) {
            if (doc.exists) {
                document.getElementById('events').value = JSON.stringify(doc.data().eventJSON);
                console.log(doc.data().eventJSON);
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    editEvents(){
        
    }

    saveMVP(e){
        e.preventDefault();

        const userPicture = document.getElementById('uploadPictureInput').files[0];
        if(userPicture){
            const storageRef = firebase.storage().ref();
            const ref = storageRef.child('mvpPicture');
            ref.put(userPicture);
        }

        const db = firebase.firestore();
        db.collection("data").doc("3dxcxftejADMxR9xFLJq").set({
            mvpName: this.state.userName,
            mvpDescription: this.state.userDescription,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
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
                                <input onChange={this.uploadPicture} type="file" className="custom-file-input" id="uploadPictureInput"/>
                                <label id="uploadPictureLabel" className="custom-file-label">Upload Picture</label>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={this.onChangeName} id="nameInput" type="text" className="form-control" placeholder="Name of person"/>
                        </div>
                        <p>Description</p>
                        <div className="input-group">
                            <textarea onChange={this.onChangeDescription} id="descriptionInput" className="form-control"></textarea>
                        </div>
                        <button onClick={this.saveMVP} type="submit" className="btn btn-primary mt-3">Save</button>
                    </form>
                </div>
                <br/>
                <div className="col-12 text-center">
                    <form>
                        <h2 className="pb-5">Edit Calendar Events</h2>
                        <div className="input-group">
                            <textarea id="events" className="form-control"></textarea>
                        </div>
                        <button onClick={this.editEvents} type="submit" className="btn btn-primary mt-3">Save</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default Admin;