require('dotenv').config();
const {CONNECTION_STRING, SERVER_PORT} = process.env
const express = require('express');
const massive = require('massive');
const app = express();
const controller = require('./controller');

app.use(express.json())


massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    }
}).then(dbInstance =>{
    app.set('db',dbInstance);
    console.log('Database connected');
    app.listen(SERVER_PORT, ()=>
    console.log(`Listening on Port ${SERVER_PORT}`));
    }
)