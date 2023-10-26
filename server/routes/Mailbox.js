const express = require('express');
const router = express.Router();
const { Mailbox } = require('../models/Mailbox')


router.post('/', (req, res) => {
    console.log(req.body)
    const mailbox = new Mailbox(req.body)
    mailbox.save((err) => {
        // console.log('err', err)
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
   
})

router.post('/getMailbox', (req, res) => {
    // console.log(req.body)
    const userId = req.body.params.userId._id
    Mailbox.find({ 'maker': userId})
        .populate("maker")
        .exec((err, mailbox) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(mailbox)
        })
   
})

module.exports = router;