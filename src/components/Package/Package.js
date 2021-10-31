import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const {_id,place,img,country,duaration,cost} = props.package;
    return (
        <div className="pack-card">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="my-3">
                <h4>Destination: {place}</h4>
                <h4>Country: {country}</h4>
                <h5>Duaration: <strong>{duaration}days</strong></h5>
                <h5>Price: <strong>BDT {cost}</strong></h5>
                <Link to={`/booking/${_id}`}><button className="btn btn-warning mt-3">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Package;