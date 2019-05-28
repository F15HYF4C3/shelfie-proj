import React, {Component} from 'react';
import './Form.css';
import axios from 'axios';


class Form extends Component {
    constructor(props){
        super(props);
    this.state = {
        item: {
            pnameForm: "",
            priceForm: 0.00,
            pimageurlForm: ""
        }
    }

    this.addName = this.addName.bind(this);
    this.addPrice = this.addPrice.bind(this);
    this.addImgUrl = this.addImgUrl.bind(this);
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
   
    addName(input){
        axios.post('http://localhost:3000/api/add', {input})
        .then((res)=>{
            this.setState({
            pnameForm: this.state.item.pnameForm
        })
    }
}
    addPrice(input){
        this.setState({
            priceForm: this.state.item.priceForm
        })
    }
    addImgUrl(input){
        this.setState({
            pimageurlForm: this.state.item.pimageurlForm
        })
    }

    onDeleteHandle(code){
        axios.delete(`http://localhost:3001/api/pname/delete/${code}`)
        .then((res)=>{
          this.setState({
            item: res.data
          })
        })
      
      }
        render(){

     
    
        // const imageUrl = "";
        // const pimageurlForm = ()=>{
        //     Axios.get(`http://${imageUrl}`)
    
        // }
        return (
            <div>
                <button className="add" onClick={()=>{
      this.addItem(e.input)
    }}>Add</button>
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
}


export default Form