import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {p_id} = useParams();
    const [pakage, setPakage] = useState([]);
    const {place,country,season,duaration,cost,img} = pakage;
    const {user} = useAuth();
    
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        const orderedProduct = pakage;
        data.status = "Pending";
        data.order = orderedProduct;

        fetch('https://damp-cove-24866.herokuapp.com/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
                alert("Ordered placed successfully !")
                reset();
            }
        })

    };



    const url = `https://damp-cove-24866.herokuapp.com/packages/${p_id}`

    useEffect( ()=> {
        fetch(url)
        .then(res=> res.json())
        .then(data => setPakage(data));
    },[url])

    return (
        <div>
            <h1 className="  my-5">Process Order</h1>
                <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 my-5 py-5"> 
                                <div className="mb-3 row full-container">
                                    <div className="">
                                        <img className="img-fluid" src={img} alt="" />
                                    </div>
                                    <div className="mt-5">
                                        <h4>Destination: {place}</h4>
                                        <h5>Country: {country}</h5>
                                        <h5>Season: {season}</h5>
                                        <h5>Duaration: <strong>{duaration} days</strong></h5>
                                        <h5>Cost: <strong>BDT {cost}</strong></h5>
                                        <br />
                                     
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 order-form mb-3 row ">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <h5 className="pb-3">Fill Up the Form</h5>

                                {/* register your input into the hook by invoking the "register" function */}
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input defaultValue={user.email} {...register("email")} />
                                <input placeholder="Address" {...register("address")} />
                                <input placeholder="Phone" {...register("Phone")} />
                                
                                <input className="btn btn-primary" type="submit" />
                                </form>
                            </div>
                       </div>
                </div>
        </div>
    );
};

export default Booking;