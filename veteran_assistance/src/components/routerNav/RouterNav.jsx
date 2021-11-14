import React, { Component } from 'react';
import { Routes, Route, Link} from "react-router-dom";
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
                <div class = "nav-bar">
                <div class = "logo"> Test! </div>
                    <nav class = "nav-links"> 
                        <Link  to="/" class="text-links ext-space">Home</Link>
                        <Link  to="about" class="text-links">About</Link>
                        <Link  to="mission" class="text-links">Mission</Link>                          
                        <Link  to="article"class="text-links">Article</Link>
                        <Link  to="contact" class="text-links">Contact</Link>
                    </nav>
                </div>

                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="about" element={<About/>}/>
                    <Route  path="article" element={<Article/>}/>
                    <Route  path="contact" element={<Contact/>}/>
                    <Route  path="mission" element ={<Mission/>}/>
                </Routes>
            </div>
        )
    }
}
 
export default RouterNav;