import React, {Component} from 'react';
import './Form.css';
// import Axios from 'axios';

class Form extends Component {
    render(){
        // const imageUrl = "";
        // const pimageurlForm = ()=>{
        //     Axios.get(`http://${imageUrl}`)
    
        // }
        return (
            <div>
                <div>Form</div>
                <div display="inline" className="inputTitles">
                   <p>New Product</p> 
                   <p>Item Price</p>
                   <p>Image Address</p>                  
                    
                </div>
                <input type="text" className="pnameForm"/>
                <input type="text" className="priceForm"/>
                <input type="text" className="pimageurlForm"/>
                <div className="imgPreview">
                <div>New Product Image</div>
                <div className="imgBox"></div>
                </div>
            </div>
        )
    }
// {pimageurlForm}
}

export default Form