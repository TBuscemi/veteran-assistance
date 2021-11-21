import React, { Component } from 'react';
import RouterNav from './components/routerNav/RouterNav';
import './style/App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (  
      <div> 
      <RouterNav/> 
      </div>
     
    );
  }
}
 
export default App;