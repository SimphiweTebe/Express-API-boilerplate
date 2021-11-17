const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Please enter a car name']},
    model: { type: String, required: [true, 'Please enter a car model']},
    price: { type: String, required: [true, "Please enter a price"]},
    photo: { type: String }
})

const Car = mongoose.model('car', carSchema)
module.exports = Car;

