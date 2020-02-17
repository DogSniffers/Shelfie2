import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            imageUrl:'',
            productName:'',
            price:0,
        }
    }
    handleChangeImageUrl= value =>{
        this.setState({imageUrl:value})
    }

    handleChangeProductName= value =>{
        this.setState({productName:value})
    }

    handleChangePrice= value =>{
        this.setState({price:value})
    }

    cancelButton= () =>{
        this.setState({imageUrl:'',productName:'',price:0})
    }

    addToInventory= () =>{
        const {name,price,url} =this.state
        axios.post('/api/product',{name,price,url}).then(res =>{
            this.cancelButton()
        }).catch(err => console.log(err))
    }

    render(){
        // console.log(this.state)
        return(
            <div>
                <input onChange={(e) => this.handleChangeImageUrl(e.target.value)}></input>
                <input onChange={(e) => this.handleChangeProductName(e.target.value)}></input>
                <input onChange={(e) => this.handleChangePrice(e.target.value)}></input>
                <button onClick={() => this.cancelButton()}>Cancel</button>
                <button onClick={() => this.addToInventory()}>Add to Inventory</button>
            </div>
        )
    }
}