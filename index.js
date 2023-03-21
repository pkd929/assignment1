// const express = require('express');

// const Mongoose = require ('mongoose');
// const bodyParser = require ('body-parser');
// const inventory = require('./router');


// const app = express ();
// const port = 3000;

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());


// // Mongoose.connect('mongodb://localhost:27017/inventory');


// app.use('./inventory', inventory);

// app.listen(port, () => console.log('server connected'));


const express = require("express");
const bodyParser = require("body-parser")
  
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
  
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
    
  var result = num1 + num2 ;
    
  res.send("Addition - " + result);
});
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})