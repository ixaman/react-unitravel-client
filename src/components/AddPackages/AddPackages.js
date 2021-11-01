import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AddPackages.css';

const AddPackages = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data)
        axios.post('https://damp-cove-24866.herokuapp.com/packages', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Package added successfully !');
                reset();
            }
        })

    };
    return (
        <div>
            <Header></Header>
            <h2 className="my-5">Add a Package</h2>
            <div className="add-package-form container mt-5">
            <h4>Package Details Form</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Destination" {...register("destination")} />
                    <input placeholder="Country" {...register("country")} />
                    <input placeholder="Duaration" type="number" {...register("duaration")} />
                    <input placeholder="Price" type="number" {...register("cost")} />
                    <input  placeholder="Image Url" {...register("img")} />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddPackages;