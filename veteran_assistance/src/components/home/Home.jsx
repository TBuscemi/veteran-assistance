import React, { Component } from 'react';
import "./style/Home.css"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <div className="main-wrapper">
            <div className='home-wrapper'>
                <div className ="home-container">
                    <div className="home-container-bubble"></div>
                    <div className="home-container-text"></div>
                </div>
                <div className='about-cont'>
                    <div className="about-wrapper">
                        <div className="about-me-picture"> </div>
                        <h3 className="about-title">About</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet magnam hic ut, debitis modi unde eos soluta nulla temporibus consequuntur necessitatibus inventore error iure nobis quos voluptatem ipsam libero dignissimos?</p> 
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Home;