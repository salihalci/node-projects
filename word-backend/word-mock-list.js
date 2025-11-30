require('dotenv').config();

const {connect_to_mongodb} = require("./mongo-repository-base");
const {getAllEmployees, getAllWords} = require("./mongo-repository-word");

connect_to_mongodb().then( response => {
    console.log(`Connected to the mongodb running at ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`);
    
    getAllWords(0,5).then( console.log );
    console.log(getAllWords(0,5).then( ))
})