const express = require('express');
const router = express.Router();
const { Mail } = require("../models/Mail");
const { auth } = require("../middleware/auth");

//=================================
//             Mails
//=================================

router.post('/', (req, res) => {
    console.log(req.body)
    const mail = new Mail(req.body)
    mail.save((err) => {
        // console.log('err', err)
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
   
})

module.exports = router;