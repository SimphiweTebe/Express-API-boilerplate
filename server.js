const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');
const path = require('path');

const carRoutes = require('./routes/carRoutes');

dbConnect();

//middleware
app.use(express.json())

//Routes
app.get('/', (req, res) => { res.send('api v1')})
app.use('/api/cars', carRoutes)

const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`App running on ${PORT}`))