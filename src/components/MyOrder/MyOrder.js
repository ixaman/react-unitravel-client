import React from 'react';
import useAuth from '../../hooks/useAuth';
import useOrders from '../../hooks/useOrders';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MyOrder.css';
const MyOrder = () => {
    const {orders, setOrders} = useOrders();
    const {user} = useAuth();
    const myOrders =  orders.filter( order => order.email === user.email);


    // DELETING ORDER
    const handleDeleteOrder = id =>{
       const proceed = window.confirm('Are you sure, you want to delete?');
       if(proceed){
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('Deleted Successfully');
                const remainingOrder = myOrders.filter( order => order._id !== id);
                setOrders(remainingOrder);
            }
        })
       }
    }

    return (
        <div>
            <Header></Header>
            <h2 className="my-5">Your Current Order Count : {myOrders.length} </h2>
            {
                myOrders.map( order => <div className="container"
                    key={order._id}
                >
                    <div className="row  order-container">
                        <div className="col col-lg-4 mt-5">
                            <p>Name: {order.name}</p> 
                            <p>Email: {order.email} </p>
                            <p>Shipping Address: {order.address}</p><br />
                            <button onClick={ ()=>handleDeleteOrder(order._id)} className="btn btn-danger">Delete Order</button>
                        </div>
                        <div className="col col-lg-4"> 
                            <div  className="img-container mt-3">
                            <img src={order.order.img} alt="" />
                            </div>
                            <div className="mt-3">
                                <h5>{order.order.place}</h5>
                            </div>
                        </div>
                        <div className="col col-lg-4 pt-5 mt-5">
                            <h5>Status: <strong>{order.status}</strong></h5>
                        </div>
                    </div>

                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;