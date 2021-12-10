import React, { Component } from 'react';
import "./style/Footer.css";
import safe from "../../images/safe.jpg";
import crisis from "../../images/crisis.jpg";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer>
                <div className="Foot-links">
                    <div className="safe-helpline" >
                        <a href="https://www.safehelpline.org/" target="_blank">
                            <img src={safe} height="120px" />
                        </a>
                    </div>
                    <div className="veterans-crisis" >
                        <a href="https://www.veteranscrisisline.net/" target="_blank">
                            <img src={crisis} height="116px"/>
                        </a>
                    </div> 
                </div>
            </footer>

         );
    }
}
 
export default Footer;