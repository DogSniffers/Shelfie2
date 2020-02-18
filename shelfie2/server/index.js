require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();


const {SERVER_PORT,CONNECTION_STRING} = process.env
massive(CONNECTION_STRING).then(dbInstance => {app.set('db',dbInstance)})

app.use(express.json())


app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.addProduct);

app.listen(SERVER_PORT, () =>{
    console.log(`I am listening on port ${this.SERVER_PORT}`)
})

