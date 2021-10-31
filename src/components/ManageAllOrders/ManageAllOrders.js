import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    console.log(allOrder);

    useEffect(() => {
        fetch('https://bloodcurdling-castle-90813.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, []);

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

    const handleStatus = (id, data) => {
        console.log(id);
        const url = `https://bloodcurdling-castle-90813.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            // })
            .then()
    }

    return (
        <div>
            {
                allOrder.map(order => <div
                    key={order._id}
                >
                    <Container>
                        <div className="order-container m-5">
                            <img src={order?.booking.service_img} alt="" className="img-fluid" />
                            <div className="text-center mt-3"><small>"Service Key: {order?.booking.service_key}"</small></div>
                            <div className="text-center"><small>Status: {order?.booking?.status?.service_status}</small></div>
                            <p className="text-center">Price: {order?.booking.service_price}</p>
                            <div className="m-3">
                                <p>Name: {order.displayName}</p>
                                <p>Email: {order.email}</p>
                                <p>Address: {order.address}</p>
                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger mb-3">Remove Order</button>
                                <button onClick={() => handleStatus(order._id, { status: 'Approved' })} className="btn btn-success ms-3 mb-3">Update Status</button>
                            </div>
                        </div>
                    </Container>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;