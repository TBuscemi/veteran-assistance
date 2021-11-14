import { Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import Article from '../articles/Articles';
import Contact from '../contact/Contact';
import Mission from '../mission/Mission';

class RouterNav extends Component {
    render() { 
        return(
            <div>
                    <Navbar bg="black" variant="dark">
                    <NavbarBrand href=""> Test! </NavbarBrand>
                        <Nav> 
                            <Nav.Item><Nav.Link id="textLinks" href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link id="textLinks" href="about">About</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link id="textLinks" href="mission">Mission</Nav.Link></Nav.Item>                            
                            <Nav.Item><Nav.Link id="textLinks" href="article">Article</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link id="textLinks" href="contact">Contact</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>

                    <Routes>
                        <Route  path='/' element  ={<Home/>}></Route>
                        <Route  path='about' element  ={<About/>}></Route>
                        <Route  path='article' element  ={<Article/>}></Route>
                        <Route  path='contact' element  ={<Contact/>}></Route>
                        <Route  path='mission' element  ={<Mission/>}></Route>
                    </Routes>
            </div>
        )
    }
}
 
export default RouterNav;