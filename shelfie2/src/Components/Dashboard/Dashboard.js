import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{
    constructor(){
        super()
    }

    // inventory = []

    componentDidMount(){
      this.inventoryList()
    }
    inventoryList(){
        console.log('hit')
    }

    render(){
        return(
            <div>Dashboard{this.props.inventory}
                <Product/>
            
            </div>
        )
    }
}