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
      inventoryList: [
        {
          name: 'Jordan',
        price: 20.00,
        imgUrl: 'priceless.com'
        },
        {
          name: 'Duck',
        price: 10.00,
        imgUrl: 'priceless.com'
        },
        {
        name: 'Tyra',
        price: 0.00,
        imgUrl: 'priceless.com'
      }
    ]
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
        <span className="Dashboard"><Dashboard display='inline'
        inventoryList={this.state.inventoryList}/>
        </span>

        <span className="Form"><Form display='inline'/>
        </span>
      <br/>
      
      
      
      
      
    </div>
  );
}
  }

export default App;
