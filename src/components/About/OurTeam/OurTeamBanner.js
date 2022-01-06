import React from 'react';
import { Container } from 'react-bootstrap';
import './OurTeamBanner.css';

const OurTeamBanner = () => {
    return (
        <div className='team-banner text-white relative'>
            <div className='absolute banner-title special-font'>
                <Container>
                    <div className='text'>
                        <h1 className='title-head'>MEET OUR TEAM</h1>
                        <div className='top-line'></div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default OurTeamBanner;