const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctors');

//POST: create a new doctor list
router.post('/',(req,res)=>{
        doctor = new Doctor({
            name:req.body.doctorName,
            address:req.body.doctorAddress,
            phone:req.body.doctorPhone,
            id:req.body.doctorId,
            speciality:req.body.doctorSpeciality,

        });


        doctor.save().then(doctor =>{
            res.send(doctor);
        }).catch(error =>{
            res.status(500).send("Doctor was not stored");
        });
});
module.exports = router;