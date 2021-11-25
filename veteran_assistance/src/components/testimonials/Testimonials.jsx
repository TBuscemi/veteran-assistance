import React, { Component } from 'react';
import "./style/Testimonials.css"



class Mission extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main-wrapper">
                <div Testimonials className="testimonials-container">
                    <div className="container">
                        <img src="../../../images/guy1.jpg" alt="Avatar"/>
                        <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim, tenetur excepturi aliquid sed, doloribus minima eaque provident, qui aliquam inventore atque fuga accusamus soluta debitis tempore consequatur minus aut!.</p>
                    </div>

                    <div className="container">
                        <img src="" alt="Avatar"/>
                        <p><span>Rebecca Flex.</span> CEO at Company.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste labore officia iure doloribus totam eligendi id, et explicabo adipisci ea repellendus eveniet, sed fugiat, odio nesciunt nulla a exercitationem?</p>
                    </div>
                    
                    <div className="container">
                        <img src="" alt="Avatar"/>
                        <p><span>Rebecca Flex.</span> CEO at Company.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum iure itaque odio iusto ex dolorum aliquid esse, cupiditate, veritatis est neque assumenda! Repellendus asperiores voluptates ratione porro autem tenetur.</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Mission;