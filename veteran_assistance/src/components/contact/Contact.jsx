import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main-wrapper">
                <div class="container">
                    <h1>BEEP BOOP INFO PLS</h1>
                    <form target="_blank" action="https://formsubmit.co/polarbear494@gmail.com" method="POST">
                        <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                            <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
                            </div>
                            <div class="col">
                            <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                    </form>
                    </div>
            </div>
         );
    }
}
 
export default Contact;