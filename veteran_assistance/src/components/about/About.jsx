import React, { Component } from 'react';
import "./style/About.css";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="main-wrapper">
                <div className="about-me-container">
                    <div className="about-me-background box" ></div>      
                    <div className="about-me-picture" ></div>
                    <div className="about-me-text"> <h1>Jennie Bollinger</h1>
                        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa non blanditiis eius eligendi hic modi, accusantium excepturi vero debitis vitae sunt repellat tempore praesentium aliquam itaque adipisci, cum enim reiciendis?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rerum vel debitis consectetur, perspiciatis quia totam odio atque quos nostrum odit ratione dolores obcaecati esse molestiae, assumenda nisi accusamus officia?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis vel tempora odit recusandae saepe esse fuga. Autem suscipit nihil, tenetur totam praesentium nostrum atque in modi, quis nulla dignissimos?
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About;    