import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, key, name, img, short_description, price, member } = service;
    return (
        <div className="mt-5">
            <CardGroup>
                <Col>
                    <Card>
                        <div className="text-center">
                            <Card.Img variant="top" src={img} className="card-img" />
                        </div>
                        <Card.Body>
                            <div className="description">
                                <Card.Title className="title-name">{name}</Card.Title>
                                <Card.Text>
                                    {short_description}
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/placeOrder/${_id}`}><button className="btn">BOOK NOW</button></Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </CardGroup>
        </div>
    );
};

export default Service;