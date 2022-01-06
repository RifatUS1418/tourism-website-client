import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <div className='topAbout-banner text-white relative'>
            <div className='absolute banner-title special-font'>
                <Container>
                    <div className='text'>
                        <h1 className='title-head'>ABOUT OUR ADVISOR</h1>
                        <div className='top-line'></div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AboutBanner;