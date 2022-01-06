import React from 'react';
import { Container } from 'react-bootstrap';
import member1 from '../images/model-017.png'
import member2 from '../images/model-020.png'
import member3 from '../images/model-031.png'
import member4 from '../images/model-038.png'
import './Member.css';

const Members = () => {
    return (
        <Container>
            <div className='card-container'>
                <div className="row">
                    <div className='col'>
                        <div className="row member-card">
                            <div className='col'>
                                <img src={member1} alt="" />
                            </div>
                            <div className='col member-detail'>
                                <div className="detail-text">
                                    <h5>Jamson Ville</h5>
                                    <div><small><em>Marketing Officer</em></small></div>
                                    <div><small>Integer hendrerit est in venenatis auctor. Suspendisse aliquet tortor ac vehicula dictum.</small></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="row member-card">
                            <div className='col'>
                                <img src={member2} alt="" />
                            </div>
                            <div className='col member-detail'>
                                <div className="detail-text">
                                    <h5>Jamson Ville</h5>
                                    <div><small><em>Senior Advisor</em></small></div>
                                    <div><small>Integer hendrerit est in venenatis auctor. Suspendisse aliquet tortor ac vehicula dictum.</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className='col'>
                        <div className="row member-card">
                            <div className='col'>
                                <img src={member3} alt="" />
                            </div>
                            <div className='col member-detail'>
                                <div className="detail-text">
                                    <h5>Jamson Ville</h5>
                                    <div><small><em>Managing Derector</em></small></div>
                                    <div><small>Integer hendrerit est in venenatis auctor. Suspendisse aliquet tortor ac vehicula dictum.</small></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="row member-card">
                            <div className='col'>
                                <img src={member4} alt="" />
                            </div>
                            <div className='col member-detail'>
                                <div className="detail-text">
                                    <h5>Jamson Ville</h5>
                                    <div><small><em>HRM Manager</em></small></div>
                                    <div><small>Integer hendrerit est in venenatis auctor. Suspendisse aliquet tortor ac vehicula dictum.</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Members;