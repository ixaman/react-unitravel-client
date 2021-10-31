import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
    <div className="banner-container ">
        <div className="">
            <div className="row d-flex banner align-items-center justify-content-center">
            <div className="col-md">
                <h1 className="title">
                Plan Your Next Trip With Us
                </h1>
                <h3 className="title">Get Exciting Offers On Hotels And Resorts</h3>
                <strong className="text-white text-center mt-3">
                BACKPACK FOR YOUR NEXT DESTINATION !
                </strong><br />
                <button className="mt-3 about-btn"><strong>Book Now</strong></button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;