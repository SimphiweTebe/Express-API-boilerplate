require('dotenv').config();
const mongoose = require('mongoose')

const url = process.env.mongoURI;

const dbConnect = async ()=> {
    try {
        await mongoose.connect(url, { useNewUrlParser: true })
        console.log('Succesfully connected to DB');
    } catch (error) {
        console.log(error);
        exit();
    }
}

module.exports = dbConnect;
