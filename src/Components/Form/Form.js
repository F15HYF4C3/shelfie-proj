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
                {/* onHandleClick(Button){
    app.post('/api/pname', (req, res, next)=>{
        const prodsdb = req.app.get('db');
        const {pname, pprice, pimageurl} = req.body;
        //can use this function in any other files
        prodsdb.productdb.insert({
            pname, 
            pprice, 
            pimageurl
        })
        .then((pname)=>{
       res.send(pname)
        })
    })
}  */}
  
                <div>Form</div>
                <div display="inline" className="inputTitles">
               <input type="text" name="New Product" id="pnameForm"/>
                <input type="text" name="Item Price" id="priceForm"/>
                <input type="text" name="Image Address" id="pimageurlForm"/>
                </div>
            
                
                
                <div className="imgPreview">
                <div>New Product Image</div>
                <div className="imgBox"></div>
                <button>Add to Inventory</button>
                   <button>Cancel</button> 
                </div>
            </div>
        )
    }
// {pimageurlForm}
}


export default Form