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
        city:req.body.doctorcity
    });


    doctor1.save().then(doctor1 =>{
        res.send(doctor1);
    }).catch(error =>{
        res.status(500).send("Doctor was not stored");
    });
});
router1.get("/",(req,res)=>{
    Doctor1.find().then(doctor1 => res.send(doctor1))
});


router1.get("/123", async(req,res)=>{
    try{
        const city = req.query.city;
        const speciality = req.query.speciality
        const data = await Doctor1.find({city:{$in: city},speciality:{$in: speciality}});
        res.send(data)
    }
    catch(err){
        console.log(err);
    }
})
module.exports = router1;