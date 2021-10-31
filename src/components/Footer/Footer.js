import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer pt-5 mt-5">
            <Container>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h3 className="ps-4">About Tripadvisor</h3>
                        <ul className="list-item">
                            <li>About Us</li>
                            <li>Press</li>
                            <li>Resources and Politicis</li>
                            <li>Careers</li>
                            <li>Investor Relations</li>
                            <li>Trust & Safty</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="ps-4">Explore</h3>
                        <ul className="list-item">
                            <li>Write a review</li>
                            <li>Add a place</li>
                            <li>Join</li>
                            <li>Travelers' Choice</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className="ps-4">Tripadvisor Sites</h3>
                        <ul className="list-item">
                            <li>Discover your dream destination with Jetsetter</li>
                            <li>Book the best restaurants with TheFork</li>
                            <li>Book tours and attraction tickets on Viator</li>
                            <li>Read cruise reviews on Cruise Critic</li>
                            <li>Get airline seating charts on Seat Guru</li>
                            <li>Find vacation rentals on FlipKey</li>
                            <li>Search for holiday rentals on Holiday Lettings</li>
                            <li>Find a vacation home on Vacation Home Rentals</li>
                            <li>Plan and book your next trip with Reco Trip Designers</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5 copyright text-center">
                    <div className="col-md-6 col-12">
                        <p>Copyright © 2021 Geek Code Lab. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <p>Privacy Policy | Terms of Use | Cookie Policy</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;