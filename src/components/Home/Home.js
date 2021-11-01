import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Package from '../Package/Package';
import './Home.css';

const Home = () => {
    const [packages, setPackages] = useState([]);

    useEffect( ()=>{
        fetch('https://damp-cove-24866.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data => setPackages(data));
    },[])

    return (
        <div>
            <Header></Header>
            <Banner></Banner><br /><br />
            <h1>Available Packages</h1>
            <div className="container my-5 grid-cls">
                {
                    packages.map( pk => <Package
                        key={pk._id}
                        package = {pk}
                    ></Package>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;