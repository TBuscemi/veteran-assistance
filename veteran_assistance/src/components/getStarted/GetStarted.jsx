import React, { Component } from 'react';
import "./style/GetStarted.css"


class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
}
render() { 
    return ( 
        <div className="main-wrapper">
            <div class="form-container">
                <h1>BEEP BOOP INFO PLS</h1>
                <form className="form" method="POST" action="https://formsubmit.co/polarbear494@gmail.com" enctype="multipart/form-data">
                    <input type="First Name" name="First Name" placeholder="First Name" required/>
                    <input type="Last Name" name="Last Name" placeholder="Last Name" required/>
                    <input type="Email" name="Email" placeholder="Your email" required/>
                    <input type="LinkedIn" name="LinkedIn" placeholder="LinkedIn"required/>
                    <input type="Phone Number" name="Phone Number" placeholder="Phone Number " required/>
                    <label for="Military Service">Military Service:</label>
                    <select id="Military Service" name="Military Service" required>
                      <option value="Army">Army</option>
                      <option value="Navy">Navy</option>
                      <option value="Air Force">Air Force</option>
                      <option value="Marines">Marines</option>
                      <option value="Coast Guard">Coast Guard</option>
                      <option value="None">None</option>
                    </select>
                    <input type="MOS/Rating" name="MOS/Rating" placeholder="MOS/Rating/Specialty Code"/>
                    <input type="Years of service" name="Years of service" placeholder="Years of service"/>
                    <input type=" Honorable Discharge" name=" Honorable Discharge" placeholder=" Honorable Discharge"/>
                    <input type="file" name="attachment" accept="pdf, pdf"/>
                    <input type="hidden" name="_next" value="http://localhost:3000/gets-started"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
     );
  }
}
 
export default GetStarted;