const mongoose = require('mongoose');



//DOCTOR SCHEMA
const DoctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    id:{
        type:Number
    },
    speciality:{
        type:String,
        required: true
    }
});

module.exports = new mongoose.model('Doctor', DoctorSchema);