import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);

            })
    }
    return (
        <div>
            <section className="intro">
                <div className="d-flex align-items-center h-100">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card border-radius my-5">
                                    <div className="card-body p-5 text-center custom">
                                        <button onClick={handleGoogleLogin} className='btn btn-outline-danger btn-rounded my-3 px-5'>Google Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Login;