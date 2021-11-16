import React, { Component } from 'react';
import RouterNav from './components/routerNav/RouterNav';
import './style/App.css';
import Footer from './components/footer/footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (  
      <div> 
      <RouterNav/> 
      <Footer/>
      </div>
     
    );
  }
}
 
export default App;