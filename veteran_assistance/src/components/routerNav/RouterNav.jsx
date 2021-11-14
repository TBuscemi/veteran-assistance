import { Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";

class RouterNav extends Component {
    render() { 
        return(
            <div>
                    <Navbar bg="black" variant="dark">
                    <NavbarBrand href=""> Test! </NavbarBrand>
                        <Nav> 
                            <Nav.Item><Nav.Link id="textLinks" href="/">Home</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>

                    <Routes>
                        <Route></Route>
                    </Routes>
            </div>
        )
    }
}
 
export default RouterNav;