// Import Packages
const express = require('express'); //Framework for APIs
const cors = require('cors'); //Provides Express Middleware
const mongoose = require('mongoose');

//Dotenv - For Connection

require('dotenv').config();

//Initialise App
const app = express();
const port = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());

//Connecting to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB has been connected successfully!");
})



app.listen(port,() => {
    console.log(`Server Running on Port : ${port} `);
})

