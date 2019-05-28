import React, {Component} from 'react';
import './Form.css';
// import axios from 'axios';
// import genericBground from '../../../../shelfie-proj';

class Form extends Component {
    constructor(props){
        super(props);
    this.state = {
        item: {
            pnameForm: "",
            priceForm: 0.00,
            pimageurlForm: ""  
        }
};
    
    
this.addItem=this.addItem.bind(this)
    this.addName = this.addName.bind(this);
    this.addPrice = this.addPrice.bind(this);
    this.addImgUrl = this.addImgUrl.bind(this);
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
  } 

  
    addName(input){
            this.setState({
            pnameForm: input
        });
    }
    addPrice(input){
        this.setState({
            priceForm: input
        });
    }
    addImgUrl(input){
        this.setState({
            pimageurlForm: input
        });
    }
addItem(input){
      this.setState({
          item: {
            pnameForm: input,
            priceForm: input,
            pimageurlForm: input
          }
        })
    } 

    onDeleteHandle(event){
          this.setState({
            item: {
                pnameForm: "",
                priceForm: 0.00,
                pimageurlForm: "" 
            }
          })
      
      }
        render(){

     
    
        // const imageUrl = "";
        // const pimageurlForm = ()=>{
        //     Axios.get(`http://${imageUrl}`)
    
        // }
    return (
        <div> 
    <div className="Form">Form
        <div className="imgBox"></div>
        <input type="text" onChange={ this.addName }/>
        <input type="text" onChange={ this.addPrice }/>
        <input type="text" onChange={ this.addImgUrl }/>


    </div>
        
                      
        
        
        <button className="add" onClick={this.addItem}>Add to Inventory</button>
            <button className="cancel" onClick={this.onDeleteHandle}>Cancel</button> 
            </div>
        )
    }
// {pimageurlForm}
}



export default Form