import React from 'react';
import useOrders from '../../hooks/useOrders';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ManageAllOrder.css';

const ManageAllOrder = () => {
    const {orders, setOrders} = useOrders();

    const handleDeleteOrder = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
         const url = `https://damp-cove-24866.herokuapp.com/orders/${id}`;
         fetch(url, {
             method: 'DELETE'
         })
         .then(res=> res.json())
         .then(data => {
             if(data.deletedCount > 0) {
                 alert('Deleted Successfully');
                 const remainingOrder = orders.filter( order => order._id !== id);
                 setOrders(remainingOrder);
             }
         })
        }
     }

     const handleUpdateStatus = id => {
         const updated = { status: "Approved" }
        const url = `https://damp-cove-24866.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Staus update successfull !')
                window.location.reload();
            }
        })
     }


    return (
        <div>
            <Header></Header>
            <h2 className="my-5">Total Orders : {orders.length} </h2>
            {
                orders.map( order => <div className="container"
                    key={order._id}
                >
                    <div className="row  order-container">
                        <div className="col col-lg-4 pt-3 mt-5">
                            <h6>Name: {order.name}</h6> 
                            <h6>Email: {order.email} </h6>
                            <p>Shipping Address: {order.address}</p><br />
                        </div>
                        <div className="col col-lg-4"> 
                            <div  className="img-container mt-3">
                            <img src={order.order.img} alt="" />
                            </div>
                            <div className="mt-3">
                                <h5>{order.order.place}</h5>
                            </div>
                        </div>
                        <div className="col col-lg-4 pt-5 mt-2 btn-cl">
                            <h5>Status: <strong>{order.status}</strong></h5><br />
                            <button onClick={ ()=>handleDeleteOrder(order._id)} className="btn btn-danger">Delete Order</button>
                            { order.status !== "Approved" ? 
                                <button onClick={ ()=>handleUpdateStatus(order._id)} className="btn btn-success">Approve Order</button> : ''}
                        </div>
                    </div>

                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default ManageAllOrder;<h1>This is Managing All The Orders</h1>