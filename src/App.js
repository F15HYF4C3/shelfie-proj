import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
// import Product from './Components/Product/Product';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventoryList: [{
        name: '',
        price: 0.00,
        imgUrl: ''
      }]
    }
  }
    render(){
      
  return (
    <div className="App">
      <div className="Header"><Header/></div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <span className="Dashboard"><Dashboard/></span>
      <span className="Form"><Form/></span>
      <br/>
      
      
      
      
      
    </div>
  );
}
  }

export default App;
