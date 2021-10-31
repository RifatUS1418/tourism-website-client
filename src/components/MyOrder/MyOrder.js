import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    console.log(myOrder);
    const { user } = useAuth();
    console.log(user);
    useEffect(() => {

        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])

    return (
        <div>
            {
                myOrder.map(order => <Order
                    key={order._id}
                    order={order}>
                </Order>)
            }
        </div >
    );
};

export default MyOrder;

// < div >
//     <p>{order.displayName}</p>
//     <p>{order.email}</p>
//     <p>Address: {order.address}</p>
//     <p>Product: {order.object}</p>
// </div>