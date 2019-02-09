import React, { Component } from 'react';
import '../stylesheets/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="row">
          <div className="col-3 text-center">
            <i className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-twitter-square fa-2x ml-3"></i>
          </div>
          <div className="col-6 text-center">
            <p>North Shuswap First Responder Society &copy; 2019</p>
          </div>
          <div className="col-3 text-center">
            <a href="https://www.chris-eddy.ca/"><p>Chris Eddy</p></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;