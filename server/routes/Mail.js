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

//내 우체통 내 편지 정보 가져오기
router.post('/getMail', (req, res) => {
    console.log(req.body)
    const userId = req.body.params.userId
    const mailboxId = req.body.params.mailboxId
    Mail.find({ 'mailboxId' : mailboxId })
        .populate("mailboxId")
        .exec((err, mail) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(mail)
        })
})

module.exports = router;