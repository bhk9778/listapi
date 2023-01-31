const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const doctorRoute = require('./routes/doctorss')
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//routes
app.use('/api/doctors',doctorRoute);


//connecting to mongodb atlas;
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser:true}
)
.then(() => {
    console.warn("Connected to Mongodb atlas");
}).catch(error =>{
    console.warn(`error is occured with ${error}`);
});
app.listen(PORT, () => {
    console.log("Server Started at port", PORT);
})