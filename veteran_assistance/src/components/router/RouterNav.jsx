import { Nav, Navbar, NavbarBrand, } from 'react-bootstrap';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,Routes
}from 'react-router-dom';

class RouterNav extends Component {
    render() { 
        return(
            <div>
                <Router>
                    <Navbar bg="black" variant="dark">
                        <NavbarBrand href=""> Test! </NavbarBrand>
                    </Navbar>

                    <Routes>
                        <Route></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}
 
export default RouterNav;