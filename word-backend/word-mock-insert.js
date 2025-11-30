require('dotenv').config();

const {connect_to_mongodb} = require("./mongo-repository-base");
const {createWord} = require("./mongo-repository-word");

connect_to_mongodb().then( response => {
    console.log(`Connected to the mongodb running at ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`);
    
    let word ={
        turkish: "merhaba",
        english: "hello",
        pictureBase64:"base64stringhere",
        pictureURL:"http://example.com/image.jpg"

    }
    createWord(word).then( console.log );   
})