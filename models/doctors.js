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
        type:String,
        required:true
    },
    id:{
        type:String
    },
    pincode:{
        type:String
    },
    speciality:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true,
    },
});

// module.exports = new mongoose.model('Doctor', DoctorSchema);
// module.exports = new mongoose.model('Doctor1', DoctorSchema);

const doctor = mongoose.model("Doctor",DoctorSchema);
const doctor1 = mongoose.model("Doctor1",DoctorSchema);

module.exports = doctor;
module.exports = doctor1;