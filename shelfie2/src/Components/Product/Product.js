import React, {Component} from 'react';

export default class Product extends Component{
    render(){
        return(
        <div>
            <img>{this.props.inventory.url}</img>
            <p>{this.props.inventory.name}</p>
            <p>{this.props.inventory.price}</p>
        </div>
        )
    }
}