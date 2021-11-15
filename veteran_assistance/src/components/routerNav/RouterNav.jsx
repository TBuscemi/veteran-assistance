import React, { Component } from 'react';
import { Routes, Route, Link,NavLink} from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import Article from '../articles/Articles';
import Contact from '../contact/Contact';
import Mission from '../mission/Mission';
import './style/RouterNav.css'

class RouterNav extends Component {
    render() { 
        return(
            <div>
                <div className = "nav-bar">
                <div className = "logo"> Test! </div>
                    <nav class = "nav-links"> 
                        <NavLink  to="/" className="text-links ext-space" style={({ isActive }) => {return {color: isActive ? "#E7B00F" : ""};}}> Home</NavLink>
                        <NavLink  to="about" className="text-links" style={({ isActive }) => {return {color: isActive ? "#E7B00F" : ""};}}>About</NavLink>
                        <NavLink  to="mission" className="text-links" style={({ isActive }) => {return {color: isActive ? "#E7B00F" : ""};}}>Mission</NavLink>                          
                        <NavLink  to="article"className="text-links" style={({ isActive }) => {return {color: isActive ? "#E7B00F" : ""};}}>Article</NavLink>
                        <NavLink  to="contact" className="text-links" style={({ isActive }) => {return {color: isActive ? "#E7B00F" : ""};}}>Contact</NavLink>
                    </nav>
                </div>

                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="about"  element={<About/>}/>
                    <Route  path="article" element={<Article/>}/>
                    <Route  path="contact" element={<Contact/>}/>
                    <Route  path="mission" element ={<Mission/>}/>
                </Routes>

                <div>
                
                </div>
            </div>
        )
    }
}
 
export default RouterNav;