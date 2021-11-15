import React, { Component } from 'react';
import RouterNav from './components/routerNav/RouterNav';
import './style/App.css';
import flag from './images/flag.jpg'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (  
      <div> 
      <RouterNav/> 
      {/* <div class="flag-background-img" style={{backgroundImage:`url(${flag})`}}></div> */}
      </div>
     
    );
  }
}
 
export default App;