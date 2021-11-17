const express = require('express');
const route = express.Router();
const carsController = require('../controllers/carsController');

route.post('/', carsController.createCar);
route.get('/', carsController.getAllCars);
route.get('/:id', carsController.getSingleCar);
route.put('/:id', carsController.updateCar);
route.delete('/:id', carsController.deleteCar);

module.exports = route;