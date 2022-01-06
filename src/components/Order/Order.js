import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Order.css';

const Order = ({ order }) => {
    const { _id, displayName, email, address, booking } = order;
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://bloodcurdling-castle-90813.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    // handle order delete
    const handleDelete = id => {
        console.log(id);
        const url = `https://bloodcurdling-castle-90813.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    window.confirm('Are you sure to delete thi service, Sir')
                    const remaining = allOrder.filter(order => order._id !== id);
                    setAllOrder(remaining);
                }

            })
    }
    return (
        <Container>
            <div className="order-container m-5">
                <img src={booking?.service_img} alt="" className="img-fluid" />
                <div className="text-center mt-3"><small>"Service Key: {booking?.service_key}"</small></div>
                <p className="text-center">Price: {booking?.service_price}</p>
                <div className="m-3">
                    <p>Name: {displayName}</p>
                    <p>Email: {email}</p>
                    <p>Address: {address}</p>
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger mb-3">Remove Order</button>
                </div>
            </div>
        </Container>
    );
};

export default Order;