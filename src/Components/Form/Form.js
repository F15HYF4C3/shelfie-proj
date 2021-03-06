import React, {Component} from 'react';
import './Form.css';
// import App from 'App.js';
// import axios from 'axios';
// import genericBground from './Form/Components/src/genericBground.png';

class Form extends Component {
    constructor(){
        super();
    this.state = {
        items: [],
            pnameForm: "",
            priceForm: "0.00",
            pimageurlForm: "" 
        
};
    
    
    this.addItem=this.addItem.bind(this)
    this.addName = this.addName.bind(this);
    this.addPrice = this.addPrice.bind(this);
    this.addImgUrl = this.addImgUrl.bind(this);
    // this.onDeleteHandle = this.onDeleteHandle.bind(this);
  } 

  
    addName(value){
            this.setState({
            pnameForm: value
        });
    }
    addPrice(value){
        this.setState({
            priceForm: value
        });
    }
    addImgUrl(value){
        this.setState({
            pimageurlForm: value
        });
    }
addItem(){
      const {items, pnameForm, priceForm, pimageurlForm} = this.state;

      let inventoryItems = items.slice();
      inventoryItems.push({pnameForm, priceForm, pimageurlForm});

      this.setState({items: inventoryItems, pnameForm: "", priceForm: "0.00", pimageurlForm: "" })
    } 

    // onDeleteHandle(){
    //     this.setState({items: inventoryItems, pnameForm: '', priceForm: 0.00, pimageurlForm: '' })
    //   }
        render(){

     
    
        // const imageUrl = "";
        // const pimageurlForm = ()=>{
        //     Axios.get(`http://${imageUrl}`)
    
        // }
    return (
<div className="formBox"> 

    <div className="imgBox" onChange={(e)=> this.addImgUrl(e.target.value)} value={this.state.pimageurlForm}>Image Preview
    </div>
    
        <br/>
            <div>Product Name</div>
            <input onChange={(e)=> this.addName(e.target.value)} value={this.state.pnameForm}/>
        <br/>
            <div>Product Price</div>
            <input onChange={(e)=> this.addPrice(e.target.value)} value={this.state.priceForm}/>
        <br/>
            <div>Image URL</div>
            <input onChange={(e)=> this.addImgUrl(e.target.value)} value={this.state.pimageurlForm}/>
        <br/>
        <br/>

    <div>
        <button className="add" onClick={ () => this.addItem() }>Add to Inventory</button>
        <button className="cancel" onClick={this.onDeleteHandle}>Cancel</button>
    </div>

</div> 
      
        )
    }

}



export default Form