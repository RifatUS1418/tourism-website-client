import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useTripServices from './../../hooks/useTripServices';

const TripServices = () => {
    const services = useTripServices();
    console.log(services);
    return (
        <div className="m-5">
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