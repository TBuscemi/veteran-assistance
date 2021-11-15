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
            <div className ="home-container">
                <div className="home-container-bubble"></div>
                <div className="home-container-text">
                <h3 >Serving those who have proudly served! </h3>
                </div>
            </div>
            <div className="row bot-container">
                <div className="col-4 bot-left"></div>
                <div className="col-4 bot-mid"></div>
                <div className="col-4 bot-right"></div>
            </div>
        </div>
        );
    }
}
 
export default Home;