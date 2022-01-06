import React from 'react';
import './History.css';
import banner2 from '../images/section.jpg'
import { Container } from 'react-bootstrap';


const History = () => {
    return (
        <div className="history">
            <Container>
                <div className='d-flex history-background'>
                    <div className='w-50'>
                        <img className='img-fluid mt-5' src={banner2} alt="" />
                        <div>
                            <em><h1 className='section-title'>"Design is thinking
                                <br /> made visual"</h1></em>
                            <div className='underline'>

                            </div>
                        </div>
                    </div>
                    <div className='w-50 history-blog ms-5'>
                        <h5 className="history-heading">History</h5>
                        <div className='mb-3'>
                            <small className="history-para mb-3">
                                Morbi eu metus vel lorem porta convallis vitae nec turpis. Sed porta in nulla a condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam molestie diam vel diam scelerisque malesuada sit amet ac tellus. Sed vulputate, lorem a hendrerit vestibulum, orci orci vestibulum risus. Non imperdiet est sem ut arcu. Phasellus consectetur quis metus a tincidunt.
                            </small>
                        </div>
                        <h5 className="history-heading">Our Mission</h5>
                        <div className='mb-3'>
                            <small className="history-para">
                                Morbi eu metus vel lorem porta convallis vitae nec turpis. Sed porta in nulla a condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam molestie diam vel diam scelerisque malesuada sit amet ac tellus. Sed vulputate, lorem a hendrerit vestibulum, orci orci vestibulum risus. Non imperdiet est sem ut arcu. Phasellus consectetur quis metus a tincidunt.
                            </small>
                        </div>
                        <h5 className="history-heading">Goals</h5>
                        <div className='mb-3'>
                            <small className="history-para">
                                Morbi eu metus vel lorem porta convallis vitae nec turpis. Sed porta in nulla a condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam molestie diam vel diam scelerisque malesuada sit amet ac tellus. Sed vulputate, lorem a hendrerit vestibulum, orci orci vestibulum risus. Non imperdiet est sem ut arcu. Phasellus consectetur quis metus a tincidunt.
                            </small>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default History;