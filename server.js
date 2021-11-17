const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');

const carRoutes = require('./routes/carRoutes');

dbConnect();

//middleware
app.use(express.json())

//Routes
app.get('/', (req, res) => { res.send('api v1')})
app.use('/api/cars', carRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`App running on ${PORT}`))