import React from 'react';
import Product from '../Product/Product';
import './Dashboard.css'
// import App from '../../App';
// import axios from 'axios';

const Dashboard = (props) => {

    const products = props.inventoryList.map((e, i)=>{
        return <div key={e[i]}>
        <Product className="items"/>{e.name}
        <Product className="items"/>{e.price}
        <Product className="items"/>{e.imgUrl}
            </div>
    })
    // componentDidMount(){
    //     axios.get(`http://localhost:3001/api/pname`).then(resp =>{
    //         console.log(resp.data);
    //         this.setState({Item: resp.data.pname});
    //       });
    //     }

        // const inventoryItems = this.props
return (
    <div>
        <h1>Inventory</h1>
        <section>{products}</section>
            </div>
        )

}
export default Dashboard