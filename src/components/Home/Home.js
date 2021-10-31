import React from 'react';
import Banner from '../Banner/Banner';
import TripServices from './../TripServices/TripServices';
import video from '../../video/video.mp4';
import './Home.css';
import useAuth from '../../hooks/useAuth';
import { Container, Spinner } from 'react-bootstrap';

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

            <Container>
                <div className="mt-5">
                    <h1 className="text-center">Our Family Partner</h1>
                    <div className="row text-center">
                        <div className="col-md-4 col-12 partner">
                            <img src="https://imgproxy.epicpxls.com/c8FI8afYYMrAiR26g0wjfa3WfA1KaI6cl8iiqLvRX24/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by83ODM1MmU3/NTVkNTYwMWY4MTUy/MDA5MDZiY2E5YjQ3/OA.jpg" alt="" />
                        </div>
                        <div className="col-md-4 col-12 partner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKViCDgVrgsTvuLydh43EvXg2RdPxUaXgLw&usqp=CAU" alt="" />
                        </div>
                        <div className="col-md-4 col-12 partner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uMvMjDmuJ36Y9UDVLLiqfQ9NO15qtsFtqA&usqp=CAU" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;