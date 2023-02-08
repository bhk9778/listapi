const express = require('express');
const router1 = express.Router();
const Doctor1 = require('../models/doctors');


router1.post('/',(req,res)=>{
    doctor1 = new Doctor1({
        name:req.body.doctorName,
        address:req.body.doctorAddress,
        phone:req.body.doctorPhone,
        id:req.body.doctorId,
        speciality:req.body.doctorSpeciality,
        city:req.body.doctorcity,
        district:req.body.doctorDistrict,
        pincode:req.body.doctorPincode
    });
    doctor1.save().then(doctor1 =>{
        res.send(doctor1);
    }).catch(error =>{
        res.status(500).send(`Doctor was not stored ${error}`);
    });
});
router1.get("/", async (req,res)=>{
        const data = await Doctor1.find()
        res.send(data)
})
router1.get("/123/:doctorDistrict/:doctorcity/:doctorSpeciality", async(req,res)=>{
    try{
        // const doctorDistrict = req.params.doctorDistrict;
        // console.log(doctorDistrict)
        // const doctorcity = req.params.doctorcity;
        // console.log(doctorcity)
        // const doctorSpeciality = req.params.doctorSpeciality;
        // console.log(doctorSpeciality)
        
        const data = await Doctor1.find({
            $and:[{
                $or: [{doctorDistrict: req.params.doctorDistrict}]
            },{
                $or: [{doctorcity: req.params.doctorcity}]},
        {
           $or: [{doctorSpeciality:req.params.doctorSpeciality}]}]
            // doctorDistrict:{$in: doctorDistrict},
            // doctorcity:{$in: doctorcity},
            // doctorSpeciality:{$in: doctorSpeciality}
        
        });
        res.send(data)
    }
    catch(err){
        console.log(err);
    }
})
module.exports = router1;