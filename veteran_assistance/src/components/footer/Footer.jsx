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
                <div className="foot-links">
                    <div className="safe-helpline" >
                        <a href="https://www.safehelpline.org/" target="_blank">
                            <img className='footer-imgs' src={safe} />
                        </a>
                    </div>
                    <div className="veterans-crisis" >
                        <a href="https://www.veteranscrisisline.net/" target="_blank">
                            <img className='footer-imgs' src={crisis}/>
                        </a>
                    </div> 
                </div>
            </footer>

        );
    }
}
 
export default Footer;