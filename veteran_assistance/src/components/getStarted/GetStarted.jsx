import React, { Component } from 'react';
import "./style/GetStarted.css"
import 'bootstrap'


class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      linked: '',
      phone: 0,
      errors: {
        linkedIn: null,
        phone: null,
      }
     }
}

handleChange=(e)=>{
  let errors = this.state.errors;
  this.setState({
    [e.target.name]:e.target.value
  })

  if(e.target.name === 'linked' && e.target.value.length <10){
      errors.error = false
      errors.linkedIn = ''
  }
  if(e.target.name === 'linked' && e.target.value.length >9){
    errors.linkedIn = e.target.value && e.target.value.includes('http') && e.target.value.includes('.com') ? null : "You must include a valid URL"
    if(errors.linkedIn === null){
      errors.error = false
      errors.linkedIn = ''
    }
    else{
      errors.error = true
    }
  }

  if(e.target.name === 'phone'){
    errors.phone = e.target.value && e.target.value.length === 10 ? null : "Please enter a 10 digit phone number"
    if(errors.phone === null){
      errors.error = false
      errors.phone = ''
    }
    else{
      errors.error = true
    }
  }
}

render() { 
    return ( 
        <div className="main-wrapper">
          <div className='form-wrapper'>
            <div class="form-container">
            <h1 className="title-contact">Contact Form</h1>
            <form className="form" method="POST" action="https://formsubmit.co/polarbear494@gmail.com" enctype="multipart/form-data">
              <label><h5>Name*</h5></label>
              <input className="inputs" type="text" name="First Name" placeholder="First Name" required/>
              <input className="last" type="text" name="Last Name" placeholder="Last Name" required /><br/>
              <label htmlFor=""><h5>Phone*</h5></label>
              <input className="inputs" type="number" pattern="[0-9]" name="phone" value={this.state.number} onChange={this.handleChange} placeholder="Phone Number " required/><br/>
              {this.state.errors.phone ? <p className="error">{this.state.errors.phone}</p>:null}
              <label htmlFor=""><h5>Email*</h5></label>
              <input className="inputs"  type="Email" name="Email" placeholder="Your Email" required/><br/>
              {this.state.errors.linkedIn ? <p className="error">{this.state.errors.linkedIn}</p> : null}
              <label htmlFor=""><h5>LinkedIn*</h5></label>
              <input className="inputs"  type="text" name="linked" value={this.state.linked} onChange={this.handleChange} placeholder=" Your LinkedIn"required/><br/>
              <label htmlFor=""><h5>Resume</h5></label>
              <input className="inputs choose-file" type="file" name="attachment" accept="pdf, pdf"/>
              <input type="hidden" name="_next" value="http://localhost:3000/gets-started"/>
              <div className="military" for="Military Service" > <h4>Military Service If Applicable</h4></div>
              <label htmlFor=""><h5>Branch</h5></label>
              <select className="inputs branch" id="Military Service" name="Military Service" required>
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
              <input className="inputs jobs" type="MOS/Rating" name="MOS/Rating" placeholder="MOS/Rating/Specialty Code"/><br/>
              <div className="terms"><h6> Fair Winds Resources does not discriminate on the basis of age, race, creed, color, national origin, sexual orientation, gender identity or expression, military status, sex, marital status, or disability.</h6></div>
              <span className="terms-check-box"> <input type="checkbox" required /> <h6 className="check-box-words">I Understand the above terms</h6></span><br/>
              {this.state.errors.error ? <button className="button" type="submit" disabled>Submit</button> : <button className="button" type="submit">Submit</button> }
            </form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default GetStarted;