import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';
import { Row } from 'react-bootstrap';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    console.log(myOrder);
    const { user } = useAuth();
    console.log(user);
    useEffect(() => {

        fetch(`https://bloodcurdling-castle-90813.herokuapp.com/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])

    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    myOrder.map(order => <Order
                        key={order._id}
                        order={order}>
                    </Order>)
                }
            </Row>
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