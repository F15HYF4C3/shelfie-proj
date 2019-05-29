import React, {Component} from 'react';
import './Form.css';
// import axios from 'axios';
// import genericBground from './Form/Components/src/genericBground.png';

class Form extends Component {
    constructor(props){
        super(props);
    this.state = {
        items: [],
            pnameForm: "",
            priceForm: 0.00,
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

      this.setState({items: inventoryItems, pnameForm: '', priceForm: 0.00, pimageurlForm: '' })
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
        <div> 
    <div className="Form">Form
        <div className="imgBox" >
        {/* <img src={ this.addImgUrl } /> */}
        </div>
        <span>Product Name</span>
        <input onChange={(e)=> this.addName(e.target.value)} value={this.state.name}/>
        <span>Product Price</span>
        <input onChange={(e)=> this.addPrice(e.target.value)} value={this.state.name}/>
        <span>Image URL</span>
        <input onChange={(e)=> this.addImgUrl(e.target.value)} value={this.state.name}/>


    </div>
        
                      
        
        
        <button className="add" onClick={ () => this.addItem() }>Add to Inventory</button>
            <button className="cancel" onClick={this.onDeleteHandle}>Cancel</button> 
            </div>
        )
    }
// {pimageurlForm}
}



export default Form