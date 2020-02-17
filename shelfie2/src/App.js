import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inventory:[{name:'a',url:'b',price:666}]
    }
  }

  test = () => {
    axios.get('/api/inventory', console.log('hit'))
  }
  render(){
  return (
    <div>
      <Header/>
      <Dashboard inventory={this.state.inventory}/>
      <Form/>
    </div>
    );
  }
}

export default App;
