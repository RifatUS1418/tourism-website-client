import React from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useTripServices from './../../hooks/useTripServices';

const TripServices = () => {
    const services = useTripServices();
    console.log(services);
    return (
        <div className="m-5">
            <h1>Choose The Destination Just Right For Your Vacation</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default TripServices;