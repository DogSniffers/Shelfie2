import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{
    render(){
        return(
            <div>Dashboard
            <ul>
                {this.props.inventory.map(element =>{
                    return(
                        <li>    
                            <Product inventory={this.props.inventory}/>
                        </li>
                    )
                })}
            </ul>
            
            </div>
        )
    }
}