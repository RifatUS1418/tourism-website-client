import React from 'react';
import Banner from '../Banner/Banner';
import TripServices from './../TripServices/TripServices';
import video from '../../video/video.mp4';
import './Home.css';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const { loading } = useAuth();
    if (loading) {
        return <Spinner animation="border" variant="dark" />
    }
    return (
        <div>
            <Banner></Banner>
            <TripServices></TripServices>
            <div>
                <video src={video} autoPlay loop muted></video>
                <div className="text-container"><h1 className="video-text">Never Stop Exploring the World</h1></div>
            </div>
        </div>
    );
};

export default Home;