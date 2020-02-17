import React, {Component} from 'react';

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

    render(){
        // console.log(this.state)
        return(
            <div>
                <input onChange={(e) => this.handleChangeImageUrl(e.target.value)}></input>
                <input onChange={(e) => this.handleChangeProductName(e.target.value)}></input>
                <input onChange={(e) => this.handleChangePrice(e.target.value)}></input>
                <button onClick={() => this.cancelButton()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}