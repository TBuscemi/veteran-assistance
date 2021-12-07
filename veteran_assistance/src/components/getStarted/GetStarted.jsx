import React, { Component } from 'react';
import "./style/GetStarted.css"
import 'bootstrap'


class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
}
render() { 
    return ( 
        <div className="main-wrapper">
            <div class="form-container">
                <h1 className="title-contact">Contract Form</h1>
                <form className="form" method="POST" action="https://formsubmit.co/polarbear494@gmail.com" enctype="multipart/form-data">
                    <label><h5>Name*</h5></label>
                    <input className="inputs" type="First Name" name="First Name" placeholder="First Name" required/>
                    <input className="inputs" type="Last Name" name="Last Name" placeholder="Last Name" required /><br/>
                    <label htmlFor=""><h5>Phone*</h5></label>
                    <input className="inputs"type="Phone Number" name="Phone Number" placeholder="Phone Number " required/><br/>
                    <label htmlFor=""><h5>Email*</h5></label>
                    <input className="inputs" size="48" type="Email" name="Email" placeholder="Your Email" required/><br/>
                    <label htmlFor=""><h5>LinkedIn*</h5></label>
                    <input className="inputs" size="48" type="LinkedIn" name="LinkedIn" placeholder=" Your LinkedIn"required/><br/>
                    <label htmlFor=""><h5>Resume</h5></label>
                    <input className="inputs" type="file" name="attachment" accept="pdf, pdf"/>
                    <input type="hidden" name="_next" value="http://localhost:3000/gets-started"/>
                    <div className="military" for="Military Service" > <h4>Military Service If Applicable</h4></div>
                    <label htmlFor=""><h5>Branch</h5></label>
                    <select className="inputs" id="Military Service" name="Military Service" required>
                      <option value="None">None</option>
                      <option value="Navy">Navy</option>
                      <option value="Air Force">Air Force</option>
                      <option value="Marines">Marines</option>
                      <option value="Coast Guard">Coast Guard</option>
                      <option value="Army">Army</option>
                    </select><br/>
              
                    <label htmlFor=""><h5>Service</h5></label>
                    <input className="inputs" type="Years of service" name="Years of service" placeholder="Years of service"/><br/>
                    <label htmlFor=""><h5>Discharge</h5></label>
                    <input className="inputs" type=" Discharge" name="Discharge" placeholder=" Discharge Type"/><br/>
                    <label htmlFor=""><h5>Military Job</h5></label>
                    <input className="inputs" size="48" type="MOS/Rating" name="MOS/Rating" placeholder="MOS/Rating/Specialty Code"/><br/>
                   <div className="terms"><h6> Fair Winds Resources does not discriminate on the basis of age, race, creed, color, national origin, sexual orientation, gender identity or expression, military status, sex, marital status, or disability.</h6></div>
                   <div className="terms-check-box"> <input type="checkbox" required /> <h6>I Understand the above terms</h6></div><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
     );
  }
}
 
export default GetStarted;