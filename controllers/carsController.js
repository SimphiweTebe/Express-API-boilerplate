const Car = require('../models/cars')

exports.createCar = async (req,res) => {

    const newCar = new Car(req.body)
    try {
        await newCar.save();
        res.status(201).json({ status: 'success', message: 'Car created successfully'})
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

    try {
        const car = await Car.findById(req.params.id)
        res.status(200).json(car)
    } catch (error) {
        console.log(error)
    }
}

exports.updateCar = async (req,res) => {

    try {
        await Car.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        res.status(200).json({ status: 'success', message: 'Car updated successfully'})
    } catch (error) {
        console.log(error)
    }
}

exports.deleteCar = async (req,res) => {
    
    try {
        await Car.findByIdAndDelete(req.params.id)
        res.status(204).json({ status: 'success', message: 'Car deleted successfully'})
    } catch (error) {
        console.log(error)
    }
}