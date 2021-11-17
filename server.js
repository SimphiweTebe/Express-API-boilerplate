const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');
const path = require('path');
const PORT = process.env.PORT;

const carRoutes = require('./routes/carRoutes');

dbConnect();

//middleware
app.use(express.json())

//Routes
app.use('/api/cars', carRoutes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/client/build")))
    //REDIRECT ALL TO index.html
    app.get('/', (req,res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}else{
    app.get('*', (req,res)=>{
        res.send('api v1')
    })
}

app.listen(PORT, ()=> console.log(`App running on ${PORT}`))