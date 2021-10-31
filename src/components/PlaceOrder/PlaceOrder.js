import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    // console.log(service);
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    // console.log(user);

    const onSubmit = data => {
        console.log(data);
        // const bookedService = service.key;
        const bookedService = { service_key: service.key, service_img: service.img, service_price: service.price, status: { service_status: 'Pending' } }
        data.booking = bookedService;


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then()
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('posted successfully');
                    reset();
                }
                console.log(result);
            })
    };

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="service">
            <img src={service?.img} alt="" />
            <h1 className="place">{service?.name}</h1>
            <Container>
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-md-7 col-12 details p-5">
                        <div className="detail-title d-flex align-items-center">
                            <h1 className="w-75">A wonderful serenity has taken possession of my entire soul</h1>
                            <div className="w-25 price p-2">
                                <div className="under-div">
                                    <span className="fw-bold pb-1">${service?.price}</span>
                                    <div className="line"></div>
                                    <small className="person pt-1">Per Person</small>
                                </div>
                            </div>
                        </div>
                        <p>{service?.description}</p>
                        <p>{service?.member}</p>
                    </div>
                    <div className="place-order col-md-4 col 12 p-3">
                        <h4 className="m-2">BOOK THIS TRIP</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("displayName")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {/* {errors.email && <span className="error">This field is required</span>} */}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" value="Place Order" className="button" />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PlaceOrder;