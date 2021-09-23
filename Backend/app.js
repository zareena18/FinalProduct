// import the required packages
const express = require('express');
const mongoose = require ('mongoose')
const bodyParse = require ('body-parser');

// import the Routes
const routes = require('./Routes/index')

// initialize the libraries
const app = express();
const port = 5000;
app.use(bodyParse.json()); // sir we don't send the data in json format then also will it be use.

// handle the cors(cross origin resourse sharing)
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization");
    next();// impt bcz we are writing our owm middleware
});
// use the routes
app.use('/api',routes);
// u can put api if u want to use the base routes for version control otherwise remove that

// connect to mongodb
mongoose.connect(
    'mongodb+srv://Zareena:1996zari@cluster0.mc2ef.mongodb.net/zomato?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(success => 
        {
            console.log("Connected to MongoDB");
            // Start the server
            app.listen(port,()=>{
                console.log("Server is running on port = " + port );
            })
        }).catch(error => {
            console.log("Error: " + error);
        })
// start the server