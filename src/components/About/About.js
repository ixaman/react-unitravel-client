import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header><br /><br />
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="col-md">
                        <h2 className="title">
                        WE ARE CONNECTING THE WHOLE WORLD <br /> BY <br /> TRAVELLING !
                        </h2>
                        
                    </div>
                </div>
                <h1 className="text-primary my-5">Our Mission</h1><hr />
                <div className="container">
                    <div className=" row info-container">
                        <div className="col-md-6 p-5">
                            <h2 className="text">The main purpose of <strong><span className="text-danger">UNI</span>TRAVEL</strong> is to make travel affordable !</h2><br />
                            <h5 className="text">We believe only wer are going to give the a price that no can give you</h5>
                            <h5  className="text"><br />
                            The specific objectives of the company include: To manage all the travel requirements of the companies while providing ease and sort of convenience to the customers. To add value to the travel sector of different companies. To offer the traveling services at very reasonable prices.
                            </h5><br />
                            <h5 className="text">
                            <strong>"Our goal is to connect the wordl by traveling"</strong>
                            </h5><br />
                        </div>
                        <div className="col-md-6 p-5">
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2019/06/06/17/07/airplane-4256362_640.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <h1 className="text-primary my-5">Our Management Team</h1><hr />
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                            <img src="https://www.travelprofessionalnews.com/wp-content/uploads/2019/04/We-Book-Travel-feature-article-for-Travel-Agents.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Christina Jonas</h5>
                                <small>FOUNDER, CHAIRMAN, & CEO</small>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://www.caribbean-flights.com/img/travel-professionals.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Keren paul</h5>
                                <small>CUstomer Executive</small>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://glider.ai/content/uploads/sites/8/2017/10/glider-chief-technology-officer.png" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Mark Henry</h5>
                                <small>CHIEF TECHNOLOGY & PRODUCT OFFICER</small>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://www.travelweek.ca/wp-content/uploads/2019/05/Suppliers-say-%E2%80%98Thank-You%E2%80%99-with-long-list-of-Travel-Agent-Day-incentives.jpg" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Wuang cheng</h5>
                                <small>SENIOR DIRECTOR</small>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;