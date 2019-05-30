import React, {Component} from 'react';
import Product from '../Product/Product';
// import axios from 'axios';

class Dashboard extends Component {

    // componentDidMount(){
    //     axios.get(`http://localhost:3001/api/pname`).then(resp =>{
    //         console.log(resp.data);
    //         this.setState({Item: resp.data.pname});
    //       });
    //     }
    render(){
        // const inventoryItems = this.props
        return (
            <div>
                Dashboard
                <div>
                    <Product/>
                </div>
            </div>
        )
    }

}

export default Dashboard