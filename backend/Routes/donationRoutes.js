const express = require ('express')
const router = express.Router()
const Donation = require ("../Models/donationSchema")


//get donation
router.get("/", (req, res) => {
  Donation.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

module.exports = router