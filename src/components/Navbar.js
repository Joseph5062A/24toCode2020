import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../style/Navbar.scss';

const navBar = props => {
    return (
        <Navbar className="Navbar">
            <Navbar.Brand href="#home">
                <img
                    src="/24toCodeLogo.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="24toCode"
                />
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="search">
                    <FormControl type="text" placeholder="" className="searchBox"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navBar;