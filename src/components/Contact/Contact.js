import { faMailBulk, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="my-5">Contact Us</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 contact-info">
                        <h2><FontAwesomeIcon icon={faMapMarker} /> Address: Dhaka, Bangladesh </h2><br />
                        <h2> <FontAwesomeIcon icon={faPhone} /> Phone: +0 2454 654656</h2><br />
                        <h2> <FontAwesomeIcon icon={faMailBulk} /> Email: iasadxaman@gmail.com </h2>
                    </div>
                    <div className="col-md-6 contact-form">
                        <form action="">
                            <h2>Send us a message</h2>
                            <div className="input-box">
                                <input  type="text" />
                                <span>Full Name</span>
                            </div>
                            <div className="input-box">
                                <input type="text" />
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <span>Type your message..</span>
                            </div>
                            <div>
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Contact;