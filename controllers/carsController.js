const Car = require('../models/cars')

exports.createCar = async (req,res) => {

    const newCar = new Car(req.body)
    try {
        const car = await newCar.save();
        res.status(201).json(car)
    } catch (error) {
        console.log(error)
    }
}

exports.getAllCars = async (req,res) => {
    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (error) {
        console.log(error)
    }
}

exports.getSingleCar = async (req,res) => {
    
    const carId = req.params.id;
    try {
        const car = await Car.findById(carId)
        res.status(200).json(car)
    } catch (error) {
        console.log(error)
    }
}

exports.updateCar = async (req,res) => {

    const carId = req.params.id;
    try {
        const car = await Car.findOneAndUpdate({_id: carId}, req.body, { new: true })
        res.status(201).json(car)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteCar = async (req,res) => {
    
    const carId = req.params.id;
    try {
        const car = await Car.findByIdAndDelete(carId)
        res.status(201).json(car)
    } catch (error) {
        console.log(error)
    }
}