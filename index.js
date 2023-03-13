const express = require('express');

const Mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const inventory = require('./router');


const app = express ();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Mongoose.connect('mongodb://localhost:27017/inventory');


app.use('./inventory', inventory);

app.listen(port, () => console.log('server connected'));

