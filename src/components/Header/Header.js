import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><span className="logo">𝓣𝓻𝓲𝓹𝓪𝓭𝓿𝓲𝓼𝓸𝓻</span></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {
                                user.email && <Nav.Link as={Link} to="/myOrder">My Order</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/addServices">Add New Services</Nav.Link>
                        </Nav>
                        {
                            user.email ? <button onClick={logOut} className="btn btn-danger me-5">Log Out</button> : <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        }
                        <Navbar.Text>
                            {
                                user.email && <span>{user.displayName} <img src={user.photoURL} className="user-img" /></span>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;