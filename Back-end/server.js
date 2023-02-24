// Import Packages
const express = require('express'); //Framework for APIs
const cors = require('cors'); //Provides Express Middleware

//Dotenv - For Connection

require('dotenv').config();

//Initialise App
const app = express();
const port = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());


app.listen(port,() => {
    console.log(`Server Running on Port : ${port} `);
})

