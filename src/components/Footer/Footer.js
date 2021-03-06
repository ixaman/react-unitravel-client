import React from 'react';
import './Footer.css';

  const Footer = () => {
      return (
          <div>
          <div className="footer-container mt-5">
            <div className="container">
              <div className="row">
              <div className="col-md-6 col-lg-4">
                  <div className="left-container text-start">
                    <h1 className="logo"><span className="logo-part">UNI</span>TRAVEL</h1>
                    <p className="mt-4 ">
                      <small>
                      Plan your next tour with us. <br /> 
                        Get exciting offers on various packages. <br /> Chose your destination and let us know.
                      </small>
                    </p>
    
                    <p className="mt-5">
                      <small>UniTravel<br /> ©All rights reserved.</small>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 img-clss">
                  <h4>Follow Us</h4>
                  <img src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_1280.png" alt="" />
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="right-footer-container">
                    <h3>Sign up for the newsletter</h3><br />
                    <input
                      className="footer-input"
                      type="text"
                      placeholder="Your Email"
                    /><button className="btn btn-success">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };
  
  export default Footer;